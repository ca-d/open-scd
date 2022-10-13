import {
  css,
  customElement,
  html,
  LitElement,
  property,
  state,
  TemplateResult,
} from 'lit-element';
import { get, translate } from 'lit-translate';

import {
  ComplexAction,
  Create,
  createElement,
  Delete,
  identity,
  newActionEvent,
} from '../../../foundation.js';
import { Nsdoc } from '../../../foundation/nsdoc.js';

import {
  canCreateValidExtRef,
  createExtRefElement,
  existExtRef,
  FcdaSelectEvent,
  serviceTypes,
  styles,
} from '../foundation.js';
import { isSubscribedTo } from './foundation.js';
import {
  emptyInputsDeleteActions,
  getFcdaReferences,
} from '../../../foundation/ied.js';

/**
 * A sub element for showing all Ext Refs from a FCDA Element.
 * The List reacts on a custom event to know which FCDA Element was selected and updated the view.
 */
@customElement('extref-ln-binding-list')
export class ExtRefLnBindingList extends LitElement {
  @property({ attribute: false })
  doc!: XMLDocument;
  @property()
  nsdoc!: Nsdoc;
  @property()
  controlTag!: 'SampledValueControl' | 'GSEControl';

  @state()
  currentSelectedControlElement: Element | undefined;
  @state()
  currentSelectedFcdaElement: Element | undefined;
  @state()
  currentIedElement: Element | undefined;

  constructor() {
    super();

    const parentDiv = this.closest('.container');
    if (parentDiv) {
      this.onFcdaSelectEvent = this.onFcdaSelectEvent.bind(this);
      parentDiv.addEventListener('fcda-select', this.onFcdaSelectEvent);
    }
  }

  private getLNElements(): Element[] {
    if (this.doc) {
      return Array.from(
        this.doc.querySelectorAll('LDevice > LN0, LDevice > LN')
      )
        .filter(element => element.closest('IED') !== this.currentIedElement)
        .sort((a, b) =>
          (
            identity(a.closest('LDevice')) +
            ' ' +
            this.buildLNTitle(a)
          ).localeCompare(
            identity(b.closest('LDevice')) + ' ' + this.buildLNTitle(b)
          )
        );
    }
    return [];
  }

  private getSubscribedLNElements(): Element[] {
    return this.getLNElements().filter(element =>
      Array.from(element.querySelectorAll('ExtRef'))
        .filter(extRefElement => extRefElement.getAttribute('intAddr') === null)
        .some(extRefElement =>
          isSubscribedTo(
            serviceTypes[this.controlTag],
            this.currentIedElement,
            this.currentSelectedControlElement,
            this.currentSelectedFcdaElement,
            extRefElement
          )
        )
    );
  }

  private getAvailableLNElements(): Element[] {
    return this.getLNElements().filter(
      element =>
        !Array.from(element.querySelectorAll('ExtRef')).some(extRefElement =>
          isSubscribedTo(
            serviceTypes[this.controlTag],
            this.currentIedElement,
            this.currentSelectedControlElement,
            this.currentSelectedFcdaElement,
            extRefElement
          )
        )
    );
  }

  private async onFcdaSelectEvent(event: FcdaSelectEvent) {
    this.currentSelectedControlElement = event.detail.controlElement;
    this.currentSelectedFcdaElement = event.detail.fcda;

    // Retrieve the IED Element to which the FCDA belongs.
    // These LN Elements will be excluded.
    this.currentIedElement = this.currentSelectedFcdaElement
      ? this.currentSelectedFcdaElement.closest('IED') ?? undefined
      : undefined;
  }

  private subscribe(lnElement: Element): ComplexAction | null {
    if (
      !this.currentIedElement ||
      !this.currentSelectedFcdaElement ||
      !this.currentSelectedControlElement!
    ) {
      return null;
    }

    const actions: Create[] = [];
    let inputsElement = lnElement.querySelector(':scope > Inputs');
    if (!inputsElement) {
      inputsElement = createElement(lnElement.ownerDocument, 'Inputs', {});
      actions.push({ new: { parent: lnElement, element: inputsElement } });
    }

    if (
      !existExtRef(inputsElement!, this.currentSelectedFcdaElement) &&
      canCreateValidExtRef(
        this.currentSelectedFcdaElement,
        this.currentSelectedControlElement
      )
    ) {
      const extRef = createExtRefElement(
        this.currentSelectedControlElement,
        this.currentSelectedFcdaElement
      );
      actions.push({ new: { parent: inputsElement, element: extRef } });
    }

    const title = get('subscription.connect');
    return { title, actions };
  }

  private unsubscribe(lnElement: Element): ComplexAction | null {
    if (
      !this.currentIedElement ||
      !this.currentSelectedFcdaElement ||
      !this.currentSelectedControlElement!
    ) {
      return null;
    }

    const actions: Delete[] = [];
    const inputElement = lnElement.querySelector(':scope > Inputs')!;
    const extRefElement = inputElement.querySelector(
      `ExtRef[iedName=${this.currentIedElement.getAttribute('name')}]` +
        `${getFcdaReferences(this.currentSelectedFcdaElement)}`
    );
    if (extRefElement) {
      actions.push({ old: { parent: inputElement, element: extRefElement } });
    }

    // Check if empty Input Element should also be removed.
    actions.push(...emptyInputsDeleteActions(actions));

    return {
      title: get('subscription.disconnect'),
      actions: actions,
    };
  }

  private bindingNotSupported(lnElement: Element): boolean {
    const iedElement = lnElement.closest('IED')!;
    return (
      (iedElement
        .querySelector(
          ':scope > AccessPoint > Services > ClientServices, :scope > Services > ClientServices'
        )
        ?.getAttribute('noIctBinding') ?? 'false') === 'true'
    );
  }

  private buildLNTitle(lnElement: Element): string {
    const prefix = lnElement.getAttribute('prefix');
    const inst = lnElement.getAttribute('inst');

    const data = this.nsdoc.getDataDescription(lnElement);

    return `${prefix ? `${prefix} - ` : ''}${data.label} ${
      inst ? ` - ${inst}` : ''
    }`;
  }

  private renderTitle(): TemplateResult {
    return html`<h1>${translate(`subscription.binding.extRefList.title`)}</h1>`;
  }

  private renderSubscribedLNs(): TemplateResult {
    const subscribedLNs = this.getSubscribedLNElements();
    return html`
      <mwc-list-item
        noninteractive
        value="${subscribedLNs
          .map(
            lnElement =>
              this.buildLNTitle(lnElement) +
              ' ' +
              identity(lnElement.closest('LDevice'))
          )
          .join(' ')}"
      >
        <span>${translate('subscription.subscriber.subscribed')}</span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${subscribedLNs.length > 0
        ? html`${subscribedLNs.map(
            lnElement => html` <mwc-list-item
              graphic="large"
              ?disabled=${this.bindingNotSupported(lnElement)}
              twoline
              value="${identity(lnElement)}"
              @click=${() => {
                const replaceAction = this.unsubscribe(lnElement);
                if (replaceAction) {
                  this.dispatchEvent(newActionEvent(replaceAction));
                }
              }}
            >
              <span>${this.buildLNTitle(lnElement)}</span>
              <span slot="secondary">
                ${identity(lnElement.closest('LDevice'))}
              </span>
              <mwc-icon slot="graphic">close</mwc-icon>
            </mwc-list-item>`
          )}`
        : html`<mwc-list-item graphic="large" noninteractive>
            ${translate('subscription.binding.extRefList.noSubscribedLNs')}
          </mwc-list-item>`}
    `;
  }

  private renderAvailableLNs(): TemplateResult {
    const availableLNs = this.getAvailableLNElements();
    return html`
      <mwc-list-item
        noninteractive
        value="${availableLNs
          .map(
            lnElement =>
              this.buildLNTitle(lnElement) +
              ' ' +
              identity(lnElement.closest('LDevice'))
          )
          .join(' ')}"
      >
        <span>
          ${translate('subscription.subscriber.availableToSubscribe')}
        </span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${availableLNs.length > 0
        ? html`${availableLNs.map(
            lnElement => html` <mwc-list-item
              graphic="large"
              ?disabled=${this.bindingNotSupported(lnElement)}
              twoline
              value="${identity(lnElement)}"
              @click=${() => {
                const replaceAction = this.subscribe(lnElement);
                if (replaceAction) {
                  this.dispatchEvent(newActionEvent(replaceAction));
                }
              }}
            >
              <span>${this.buildLNTitle(lnElement)}</span>
              <span slot="secondary">
                ${identity(lnElement.closest('LDevice'))}
              </span>
              <mwc-icon slot="graphic">add</mwc-icon>
            </mwc-list-item>`
          )}`
        : html`<mwc-list-item graphic="large" noninteractive>
            ${translate('subscription.binding.extRefList.noAvailableLNs')}
          </mwc-list-item>`}
    `;
  }

  render(): TemplateResult {
    return html` <section tabindex="0">
      ${this.currentSelectedControlElement && this.currentSelectedFcdaElement
        ? html`
            ${this.renderTitle()}
            <filtered-list>
              ${this.renderSubscribedLNs()} ${this.renderAvailableLNs()}
            </filtered-list>
          `
        : html`
            <h1>${translate('subscription.binding.extRefList.noSelection')}</h1>
          `}
    </section>`;
  }

  static styles = css`
    ${styles}

    mwc-list-item.hidden[noninteractive] + li[divider] {
      display: none;
    }
  `;
}