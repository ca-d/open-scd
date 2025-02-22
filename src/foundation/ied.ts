import { Delete, identity, selector } from '../foundation.js';

/**
 * All available FCDA references that are used to link ExtRefs.
 */
const fcdaReferences = [
  'ldInst',
  'lnClass',
  'lnInst',
  'prefix',
  'doName',
  'daName',
];

/**
 * Get all the FCDA attributes containing values from a specific element.
 *
 * @param elementContainingFcdaReferences - The element to use
 * @returns FCDA references
 */
export function getFcdaReferences(
  elementContainingFcdaReferences: Element
): string {
  return fcdaReferences
    .map(fcdaRef =>
      elementContainingFcdaReferences.getAttribute(fcdaRef)
        ? `[${fcdaRef}="${elementContainingFcdaReferences.getAttribute(
            fcdaRef
          )}"]`
        : ''
    )
    .join('');
}

/**
 * All available Control references that are used to link ExtRefs.
 */
const controlReferences = ['srcLDInst', 'srcLNClass', 'srcLNInst', 'srcCBName'];

/**
 * Get all the Control attributes containing values from a specific element.
 *
 * @param extRef - The element to use
 * @returns Control references
 */
export function getControlReferences(extRef: Element): string {
  return controlReferences
    .map(controlRef =>
      extRef.getAttribute(controlRef)
        ? `[${controlRef}="${extRef.getAttribute(controlRef)}"]`
        : ''
    )
    .join('');
}

/**
 * Creating Delete actions in case Inputs elements are empty.
 *
 * @param extRefDeleteActions - All Delete actions for ExtRefs.
 * @returns Possible delete actions for empty Inputs elements.
 */
export function emptyInputsDeleteActions(
  extRefDeleteActions: Delete[]
): Delete[] {
  if (!extRefDeleteActions.length) return [];

  const inputDeleteActions: Delete[] = [];
  const inputsMap: Record<string, Element> = {};

  for (const extRefDeleteAction of extRefDeleteActions) {
    const extRef = <Element>extRefDeleteAction.old.element;
    const inputsElement = <Element>extRefDeleteAction.old.parent;

    const id = identity(inputsElement);
    if (!inputsMap[id]) inputsMap[id] = <Element>inputsElement.cloneNode(true);

    // Search the ExtRef in the Cloned Inputs Element
    const linkedExtRef = inputsMap[id].querySelector(
      `ExtRef${
        extRef.getAttribute('iedName')
          ? `[iedName="${extRef.getAttribute('iedName')}"]`
          : ''
      }${getFcdaReferences(extRef)}${
        extRef.getAttribute('serviceType')
          ? `[serviceType="${extRef.getAttribute('serviceType')}"]`
          : ''
      }${getControlReferences(extRef)}`
    );
    // And if found remove it as child from the Cloned Inputs Element
    if (linkedExtRef) inputsMap[id].removeChild(linkedExtRef);
  }

  // Create delete action for each empty inputs
  Object.entries(inputsMap).forEach(([key, value]) => {
    if (value.children.length! == 0) {
      const doc = extRefDeleteActions[0].old.parent.ownerDocument!;
      const inputs = doc.querySelector(selector('Inputs', key));

      if (inputs && inputs.parentElement) {
        inputDeleteActions.push({
          old: { parent: inputs.parentElement, element: inputs },
        });
      }
    }
  });

  return inputDeleteActions;
}
