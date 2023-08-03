/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots['with no ancestors looks like the latest snapshot'] = `<mwc-dialog
  defaultaction="next"
  heading="[iededitor.wizard.doTitle]"
  open=""
  style="--mdc-dialog-min-width:calc(100% + 0px)"
>
  <div id="wizard-content">
    <mwc-textarea
      cols="50"
      disabled=""
      id="nsdocDescription"
      label="[iededitor.wizard.nsdocDescription]"
      readonly=""
      rows="3"
      value="Mod"
    >
    </mwc-textarea>
    <mwc-textfield
      disabled=""
      id="doName"
      label="[iededitor.wizard.doName]"
      readonly=""
      value="Mod"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="doiDescription"
      label="[iededitor.wizard.doiDescription]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="doCdc"
      label="[iededitor.wizard.doCdc]"
      readonly=""
      value="ENC"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="ln"
      label="[iededitor.wizard.lnPrefix]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnPrefix"
      label="[iededitor.wizard.lnDescription]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnInst"
      label="[iededitor.wizard.lnInst]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="lDevice"
      label="[iededitor.wizard.lDevice]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="accessPoint"
      label="[iededitor.wizard.accessPoint]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="ied"
      label="[iededitor.wizard.ied]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[close]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot with no ancestors looks like the latest snapshot */

snapshots['with a DO element looks like the latest snapshot'] = `<mwc-dialog
  defaultaction="next"
  heading="[iededitor.wizard.doTitle]"
  open=""
  style="--mdc-dialog-min-width:calc(100% + 0px)"
>
  <div id="wizard-content">
    <mwc-textarea
      cols="50"
      disabled=""
      id="nsdocDescription"
      label="[iededitor.wizard.nsdocDescription]"
      readonly=""
      rows="3"
      value="Mod"
    >
    </mwc-textarea>
    <mwc-textfield
      disabled=""
      id="doName"
      label="[iededitor.wizard.doName]"
      readonly=""
      value="Mod"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="doiDescription"
      label="[iededitor.wizard.doiDescription]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="doCdc"
      label="[iededitor.wizard.doCdc]"
      readonly=""
      value="ENC"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="ln"
      label="[iededitor.wizard.lnPrefix]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnPrefix"
      label="[iededitor.wizard.lnDescription]"
      readonly=""
      value="Some LN title (LLN0)"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnInst"
      label="[iededitor.wizard.lnInst]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="lDevice"
      label="[iededitor.wizard.lDevice]"
      readonly=""
      value="CircuitBreaker_CB1"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="accessPoint"
      label="[iededitor.wizard.accessPoint]"
      readonly=""
      value="P1"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="ied"
      label="[iededitor.wizard.ied]"
      readonly=""
      value="IED1"
    >
    </mwc-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[close]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot with a DO element looks like the latest snapshot */

snapshots[
  'with a DO element and DOI Element looks like the latest snapshot'
] = `<mwc-dialog
  defaultaction="next"
  heading="[iededitor.wizard.doTitle]"
  open=""
  style="--mdc-dialog-min-width:calc(100% + 0px)"
>
  <div id="wizard-content">
    <mwc-textarea
      cols="50"
      disabled=""
      id="nsdocDescription"
      label="[iededitor.wizard.nsdocDescription]"
      readonly=""
      rows="3"
      value="Pos"
    >
    </mwc-textarea>
    <mwc-textfield
      disabled=""
      id="doName"
      label="[iededitor.wizard.doName]"
      readonly=""
      value="Pos"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="doiDescription"
      label="[iededitor.wizard.doiDescription]"
      readonly=""
      value="Position"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="doCdc"
      label="[iededitor.wizard.doCdc]"
      readonly=""
      value="DPC"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="ln"
      label="[iededitor.wizard.lnPrefix]"
      readonly=""
      value="-"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnPrefix"
      label="[iededitor.wizard.lnDescription]"
      readonly=""
      value="CSWI"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="lnInst"
      label="[iededitor.wizard.lnInst]"
      readonly=""
      value="1"
    >
    </mwc-textfield>
    <br>
    <mwc-textfield
      disabled=""
      id="lDevice"
      label="[iededitor.wizard.lDevice]"
      readonly=""
      value="CircuitBreaker_CB1"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="accessPoint"
      label="[iededitor.wizard.accessPoint]"
      readonly=""
      value="P1"
    >
    </mwc-textfield>
    <mwc-textfield
      disabled=""
      id="ied"
      label="[iededitor.wizard.ied]"
      readonly=""
      value="IED1"
    >
    </mwc-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[close]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot with a DO element and DOI Element looks like the latest snapshot */
