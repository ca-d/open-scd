/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["web component rendering SubFunction element with complete attribute set and existing children looks like the latest snapshot"] = 
`<action-pane
  icon="functions"
  label="mySubFunc - some string (some type)"
  secondary=""
  tabindex="0"
>
  <abbr
    slot="action"
    title="[edit]"
  >
    <mwc-icon-button icon="edit">
    </mwc-icon-button>
  </abbr>
  <abbr
    slot="action"
    title="[remove]"
  >
    <mwc-icon-button icon="delete">
    </mwc-icon-button>
  </abbr>
  <abbr
    slot="action"
    style="position:relative;"
    title="[add]"
  >
    <mwc-icon-button icon="playlist_add">
    </mwc-icon-button>
    <mwc-menu
      corner="BOTTOM_RIGHT"
      menucorner="END"
    >
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="menuitem"
        tabindex="0"
        value="LNode"
      >
        <span>
          LNode
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="menuitem"
        tabindex="-1"
        value="ConductingEquipment"
      >
        <span>
          ConductingEquipment
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="menuitem"
        tabindex="-1"
        value="SubFunction"
      >
        <span>
          SubFunction
        </span>
      </mwc-list-item>
    </mwc-menu>
  </abbr>
  <sub-function-editor>
  </sub-function-editor>
</action-pane>
`;
/* end snapshot web component rendering SubFunction element with complete attribute set and existing children looks like the latest snapshot */

snapshots["web component rendering SubFunction element with missing desc and type attribute looks like the latest snapshot"] = 
`<action-pane
  icon="functions"
  label="mySubFunc"
  secondary=""
  tabindex="0"
>
  <abbr
    slot="action"
    title="[edit]"
  >
    <mwc-icon-button icon="edit">
    </mwc-icon-button>
  </abbr>
  <abbr
    slot="action"
    title="[remove]"
  >
    <mwc-icon-button icon="delete">
    </mwc-icon-button>
  </abbr>
  <abbr
    slot="action"
    style="position:relative;"
    title="[add]"
  >
    <mwc-icon-button icon="playlist_add">
    </mwc-icon-button>
    <mwc-menu
      corner="BOTTOM_RIGHT"
      menucorner="END"
    >
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="menuitem"
        tabindex="0"
        value="LNode"
      >
        <span>
          LNode
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="menuitem"
        tabindex="-1"
        value="ConductingEquipment"
      >
        <span>
          ConductingEquipment
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="menuitem"
        tabindex="-1"
        value="SubFunction"
      >
        <span>
          SubFunction
        </span>
      </mwc-list-item>
    </mwc-menu>
  </abbr>
</action-pane>
`;
/* end snapshot web component rendering SubFunction element with missing desc and type attribute looks like the latest snapshot */

snapshots["web component rendering SubFunction element with existing LNode children looks like the latest snapshot"] = 
`<action-pane
  icon="functions"
  label="myBaySubFunc - myDesc (myBaySubFuncType)"
  secondary=""
  tabindex="0"
>
  <abbr
    slot="action"
    title="[edit]"
  >
    <mwc-icon-button icon="edit">
    </mwc-icon-button>
  </abbr>
  <abbr
    slot="action"
    title="[remove]"
  >
    <mwc-icon-button icon="delete">
    </mwc-icon-button>
  </abbr>
  <abbr
    slot="action"
    style="position:relative;"
    title="[add]"
  >
    <mwc-icon-button icon="playlist_add">
    </mwc-icon-button>
    <mwc-menu
      corner="BOTTOM_RIGHT"
      menucorner="END"
    >
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="menuitem"
        tabindex="0"
        value="LNode"
      >
        <span>
          LNode
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="menuitem"
        tabindex="-1"
        value="ConductingEquipment"
      >
        <span>
          ConductingEquipment
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="menuitem"
        tabindex="-1"
        value="SubFunction"
      >
        <span>
          SubFunction
        </span>
      </mwc-list-item>
    </mwc-menu>
  </abbr>
  <div class="container lnode">
    <l-node-editor>
    </l-node-editor>
    <l-node-editor>
    </l-node-editor>
    <l-node-editor>
    </l-node-editor>
  </div>
</action-pane>
`;
/* end snapshot web component rendering SubFunction element with existing LNode children looks like the latest snapshot */
