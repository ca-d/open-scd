import {
  css,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';
import { newIEDSubscriptionEvent } from '../../../foundation.js';

@customElement('ied-element')
export class IEDElement extends LitElement {
  /** Holding the IED element */
  @property({ attribute: false })
  element!: Element;

  private onIedSelect = () => {
    document.querySelector('open-scd')!.dispatchEvent(
      newIEDSubscriptionEvent(
        this.element!.getAttribute('name') ?? ''
      )
    );
  };

  render(): TemplateResult {
    return html`<mwc-list-item
      @click=${this.onIedSelect}
      graphic="avatar"
      hasMeta>
      <span>${this.element.getAttribute('name')}</span>
      <mwc-icon slot="graphic">add</mwc-icon>
    </mwc-list-item>`;
  }

  static styles = css``;
}