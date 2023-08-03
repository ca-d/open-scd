/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots[
  'BDA wizarding editing integration defines a editBDaWizard to edit an existing BDA looks like the latest snapshot'
] = `<mwc-dialog
  defaultaction="next"
  heading="[bda.wizard.title.edit]"
  open=""
  style="--mdc-dialog-min-width:calc(100% + 48px)"
>
  <nav>
    <mwc-icon-button icon="more_vert">
    </mwc-icon-button>
    <mwc-menu
      class="actions-menu"
      corner="BOTTOM_RIGHT"
      menucorner="END"
    >
      <mwc-list-item
        aria-disabled="false"
        graphic="icon"
        mwc-list-item=""
        role="menuitem"
        tabindex="0"
      >
        <span>
          [remove]
        </span>
        <mwc-icon slot="graphic">
          delete
        </mwc-icon>
      </mwc-list-item>
    </mwc-menu>
  </nav>
  <div id="wizard-content">
    <wizard-textfield
      dialoginitialfocus=""
      helper="[scl.name]"
      label="name"
      maxlength="60"
      pattern="((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
      required=""
    >
      >
    </wizard-textfield>
    <wizard-textfield
      disabled=""
      helper="[scl.desc]"
      label="desc"
      nullable=""
      pattern="([ -~]|[]|[ -퟿]|[-�])*"
    >
    </wizard-textfield>
    <wizard-select
      fixedmenuposition=""
      helper="[scl.bType]"
      label="bType"
      required=""
    >
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="BOOLEAN"
      >
        BOOLEAN
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT8"
      >
        INT8
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT16"
      >
        INT16
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT24"
      >
        INT24
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT32"
      >
        INT32
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT64"
      >
        INT64
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT128"
      >
        INT128
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT8U"
      >
        INT8U
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT16U"
      >
        INT16U
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT24U"
      >
        INT24U
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT32U"
      >
        INT32U
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="FLOAT32"
      >
        FLOAT32
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="FLOAT64"
      >
        FLOAT64
      </mwc-list-item>
      <mwc-list-item
        activated=""
        aria-disabled="false"
        aria-selected="true"
        mwc-list-item=""
        role="option"
        selected=""
        tabindex="0"
        value="Enum"
      >
        Enum
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dbpos"
      >
        Dbpos
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Tcmd"
      >
        Tcmd
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Quality"
      >
        Quality
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Timestamp"
      >
        Timestamp
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="VisString32"
      >
        VisString32
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="VisString64"
      >
        VisString64
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="VisString65"
      >
        VisString65
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="VisString129"
      >
        VisString129
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="VisString255"
      >
        VisString255
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Octet64"
      >
        Octet64
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Unicode255"
      >
        Unicode255
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Struct"
      >
        Struct
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="EntryTime"
      >
        EntryTime
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Check"
      >
        Check
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="ObjRef"
      >
        ObjRef
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Currency"
      >
        Currency
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="PhyComAddr"
      >
        PhyComAddr
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="TrgOps"
      >
        TrgOps
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="OptFlds"
      >
        OptFlds
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="SvOptFlds"
      >
        SvOptFlds
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="EntryID"
      >
        EntryID
      </mwc-list-item>
    </wizard-select>
    <wizard-select
      fixedmenuposition=""
      helper="[scl.type]"
      label="type"
    >
      <mwc-list-item
        aria-disabled="true"
        class="Struct"
        disabled=""
        noninteractive=""
        role="option"
        style="display: none;"
        tabindex="-1"
        value="Dummy_origin"
      >
        Dummy_origin
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="Struct"
        disabled=""
        noninteractive=""
        role="option"
        style="display: none;"
        tabindex="-1"
        value="Dummy.LLN0.Mod.SBOw"
      >
        Dummy.LLN0.Mod.SBOw
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="Struct"
        disabled=""
        noninteractive=""
        role="option"
        style="display: none;"
        tabindex="-1"
        value="Dummy.LLN0.Mod.Cancel"
      >
        Dummy.LLN0.Mod.Cancel
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="Struct"
        disabled=""
        noninteractive=""
        role="option"
        style="display: none;"
        tabindex="-1"
        value="Dummy.LPHD1.Sim.SBOw"
      >
        Dummy.LPHD1.Sim.SBOw
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="Struct"
        disabled=""
        noninteractive=""
        role="option"
        style="display: none;"
        tabindex="-1"
        value="Dummy.LPHD1.Sim.Cancel"
      >
        Dummy.LPHD1.Sim.Cancel
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="Enum"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dummy_ctlModel"
      >
        Dummy_ctlModel
      </mwc-list-item>
      <mwc-list-item
        activated=""
        aria-disabled="false"
        aria-selected="true"
        class="Enum"
        mwc-list-item=""
        role="option"
        selected=""
        tabindex="0"
        value="Dummy_Beh"
      >
        Dummy_Beh
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="Enum"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dummy_Health"
      >
        Dummy_Health
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="Enum"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dummy_orCategory"
      >
        Dummy_orCategory
      </mwc-list-item>
    </wizard-select>
    <wizard-textfield
      disabled=""
      helper="[scl.sAddr]"
      label="sAddr"
      nullable=""
      pattern="([ -~]|[]|[ -퟿]|[-�])*"
    >
    </wizard-textfield>
    <wizard-select
      disabled=""
      fixedmenuposition=""
      helper="[scl.valKind]"
      label="valKind"
      nullable=""
      required=""
    >
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="0"
        value="Spec"
      >
        Spec
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Conf"
      >
        Conf
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="RO"
      >
        RO
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Set"
      >
        Set
      </mwc-list-item>
    </wizard-select>
    <wizard-checkbox
      helper="[scl.valImport]"
      label="valImport"
      nullable=""
      required=""
    >
    </wizard-checkbox>
    <wizard-select
      disabled=""
      helper="[scl.Val]"
      label="Val"
      nullable=""
    >
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        mwc-list-item=""
        role="option"
        tabindex="0"
        value="on"
      >
        on
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="blocked"
      >
        blocked
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="test"
      >
        test
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="test/blocked"
      >
        test/blocked
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="off"
      >
        off
      </mwc-list-item>
    </wizard-select>
    <wizard-textfield
      disabled=""
      helper="[scl.Val]"
      label="Val"
      nullable=""
      style="display: none;"
    >
    </wizard-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[close]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
  <mwc-button
    icon=""
    label="[save]"
    slot="primaryAction"
    trailingicon=""
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot BDA wizarding editing integration defines a editBDaWizard to edit an existing BDA looks like the latest snapshot */

snapshots[
  'BDA wizarding editing integration defines a createBDaWizard to create a new BDA element looks like the latest snapshot'
] = `<mwc-dialog
  defaultaction="next"
  heading="[bda.wizard.title.edit]"
  open=""
  style="--mdc-dialog-min-width:calc(100% + 0px)"
>
  <div id="wizard-content">
    <wizard-textfield
      dialoginitialfocus=""
      helper="[scl.name]"
      label="name"
      maxlength="60"
      pattern="((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
      required=""
    >
      >
    </wizard-textfield>
    <wizard-textfield
      disabled=""
      helper="[scl.desc]"
      label="desc"
      nullable=""
      pattern="([ -~]|[]|[ -퟿]|[-�])*"
    >
    </wizard-textfield>
    <wizard-select
      fixedmenuposition=""
      helper="[scl.bType]"
      label="bType"
      required=""
    >
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="0"
        value="BOOLEAN"
      >
        BOOLEAN
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT8"
      >
        INT8
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT16"
      >
        INT16
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT24"
      >
        INT24
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT32"
      >
        INT32
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT64"
      >
        INT64
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT128"
      >
        INT128
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT8U"
      >
        INT8U
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT16U"
      >
        INT16U
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT24U"
      >
        INT24U
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="INT32U"
      >
        INT32U
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="FLOAT32"
      >
        FLOAT32
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="FLOAT64"
      >
        FLOAT64
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Enum"
      >
        Enum
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dbpos"
      >
        Dbpos
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Tcmd"
      >
        Tcmd
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Quality"
      >
        Quality
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Timestamp"
      >
        Timestamp
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="VisString32"
      >
        VisString32
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="VisString64"
      >
        VisString64
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="VisString65"
      >
        VisString65
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="VisString129"
      >
        VisString129
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="VisString255"
      >
        VisString255
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Octet64"
      >
        Octet64
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Unicode255"
      >
        Unicode255
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Struct"
      >
        Struct
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="EntryTime"
      >
        EntryTime
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Check"
      >
        Check
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="ObjRef"
      >
        ObjRef
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Currency"
      >
        Currency
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="PhyComAddr"
      >
        PhyComAddr
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="TrgOps"
      >
        TrgOps
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="OptFlds"
      >
        OptFlds
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="SvOptFlds"
      >
        SvOptFlds
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="EntryID"
      >
        EntryID
      </mwc-list-item>
    </wizard-select>
    <wizard-select
      fixedmenuposition=""
      helper="[scl.type]"
      label="type"
    >
      <mwc-list-item
        aria-disabled="false"
        class="Struct"
        mwc-list-item=""
        role="option"
        tabindex="0"
        value="Dummy_origin"
      >
        Dummy_origin
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="Struct"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dummy.LLN0.Mod.SBOw"
      >
        Dummy.LLN0.Mod.SBOw
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="Struct"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dummy.LLN0.Mod.Cancel"
      >
        Dummy.LLN0.Mod.Cancel
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="Struct"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dummy.LPHD1.Sim.SBOw"
      >
        Dummy.LPHD1.Sim.SBOw
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="Struct"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dummy.LPHD1.Sim.Cancel"
      >
        Dummy.LPHD1.Sim.Cancel
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="Enum"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dummy_ctlModel"
      >
        Dummy_ctlModel
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="Enum"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dummy_Beh"
      >
        Dummy_Beh
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="Enum"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dummy_Health"
      >
        Dummy_Health
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="Enum"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Dummy_orCategory"
      >
        Dummy_orCategory
      </mwc-list-item>
    </wizard-select>
    <wizard-textfield
      disabled=""
      helper="[scl.sAddr]"
      label="sAddr"
      nullable=""
      pattern="([ -~]|[]|[ -퟿]|[-�])*"
    >
    </wizard-textfield>
    <wizard-select
      disabled=""
      fixedmenuposition=""
      helper="[scl.valKind]"
      label="valKind"
      nullable=""
      required=""
    >
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="0"
        value="Spec"
      >
        Spec
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Conf"
      >
        Conf
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="RO"
      >
        RO
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Set"
      >
        Set
      </mwc-list-item>
    </wizard-select>
    <wizard-checkbox
      helper="[scl.valImport]"
      label="valImport"
      nullable=""
      required=""
    >
    </wizard-checkbox>
    <wizard-select
      disabled=""
      helper="[scl.Val]"
      label="Val"
      nullable=""
    >
    </wizard-select>
    <wizard-textfield
      disabled=""
      helper="[scl.Val]"
      label="Val"
      nullable=""
    >
    </wizard-textfield>
  </div>
  <mwc-button
    dialogaction="close"
    label="[close]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
  <mwc-button
    icon=""
    label="[save]"
    slot="primaryAction"
    trailingicon=""
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot BDA wizarding editing integration defines a createBDaWizard to create a new BDA element looks like the latest snapshot */
