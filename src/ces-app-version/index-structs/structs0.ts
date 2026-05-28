/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface CesAppVersionSnapshotAgentsAfterAgentCallbacks {
}

export function cesAppVersionSnapshotAgentsAfterAgentCallbacksToTerraform(struct?: CesAppVersionSnapshotAgentsAfterAgentCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAgentsAfterAgentCallbacksToHclTerraform(struct?: CesAppVersionSnapshotAgentsAfterAgentCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAgentsAfterAgentCallbacksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAgentsAfterAgentCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAgentsAfterAgentCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class CesAppVersionSnapshotAgentsAfterAgentCallbacksList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAgentsAfterAgentCallbacksOutputReference {
    return new CesAppVersionSnapshotAgentsAfterAgentCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAgentsAfterModelCallbacks {
}

export function cesAppVersionSnapshotAgentsAfterModelCallbacksToTerraform(struct?: CesAppVersionSnapshotAgentsAfterModelCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAgentsAfterModelCallbacksToHclTerraform(struct?: CesAppVersionSnapshotAgentsAfterModelCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAgentsAfterModelCallbacksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAgentsAfterModelCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAgentsAfterModelCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class CesAppVersionSnapshotAgentsAfterModelCallbacksList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAgentsAfterModelCallbacksOutputReference {
    return new CesAppVersionSnapshotAgentsAfterModelCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAgentsAfterToolCallbacks {
}

export function cesAppVersionSnapshotAgentsAfterToolCallbacksToTerraform(struct?: CesAppVersionSnapshotAgentsAfterToolCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAgentsAfterToolCallbacksToHclTerraform(struct?: CesAppVersionSnapshotAgentsAfterToolCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAgentsAfterToolCallbacksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAgentsAfterToolCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAgentsAfterToolCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class CesAppVersionSnapshotAgentsAfterToolCallbacksList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAgentsAfterToolCallbacksOutputReference {
    return new CesAppVersionSnapshotAgentsAfterToolCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAgentsBeforeAgentCallbacks {
}

export function cesAppVersionSnapshotAgentsBeforeAgentCallbacksToTerraform(struct?: CesAppVersionSnapshotAgentsBeforeAgentCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAgentsBeforeAgentCallbacksToHclTerraform(struct?: CesAppVersionSnapshotAgentsBeforeAgentCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAgentsBeforeAgentCallbacksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAgentsBeforeAgentCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAgentsBeforeAgentCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class CesAppVersionSnapshotAgentsBeforeAgentCallbacksList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAgentsBeforeAgentCallbacksOutputReference {
    return new CesAppVersionSnapshotAgentsBeforeAgentCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAgentsBeforeModelCallbacks {
}

export function cesAppVersionSnapshotAgentsBeforeModelCallbacksToTerraform(struct?: CesAppVersionSnapshotAgentsBeforeModelCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAgentsBeforeModelCallbacksToHclTerraform(struct?: CesAppVersionSnapshotAgentsBeforeModelCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAgentsBeforeModelCallbacksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAgentsBeforeModelCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAgentsBeforeModelCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class CesAppVersionSnapshotAgentsBeforeModelCallbacksList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAgentsBeforeModelCallbacksOutputReference {
    return new CesAppVersionSnapshotAgentsBeforeModelCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAgentsBeforeToolCallbacks {
}

export function cesAppVersionSnapshotAgentsBeforeToolCallbacksToTerraform(struct?: CesAppVersionSnapshotAgentsBeforeToolCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAgentsBeforeToolCallbacksToHclTerraform(struct?: CesAppVersionSnapshotAgentsBeforeToolCallbacks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAgentsBeforeToolCallbacksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAgentsBeforeToolCallbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAgentsBeforeToolCallbacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class CesAppVersionSnapshotAgentsBeforeToolCallbacksList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAgentsBeforeToolCallbacksOutputReference {
    return new CesAppVersionSnapshotAgentsBeforeToolCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAgentsLlmAgent {
}

export function cesAppVersionSnapshotAgentsLlmAgentToTerraform(struct?: CesAppVersionSnapshotAgentsLlmAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAgentsLlmAgentToHclTerraform(struct?: CesAppVersionSnapshotAgentsLlmAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAgentsLlmAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAgentsLlmAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAgentsLlmAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class CesAppVersionSnapshotAgentsLlmAgentList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAgentsLlmAgentOutputReference {
    return new CesAppVersionSnapshotAgentsLlmAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAgentsModelSettings {
}

export function cesAppVersionSnapshotAgentsModelSettingsToTerraform(struct?: CesAppVersionSnapshotAgentsModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAgentsModelSettingsToHclTerraform(struct?: CesAppVersionSnapshotAgentsModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAgentsModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAgentsModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAgentsModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class CesAppVersionSnapshotAgentsModelSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAgentsModelSettingsOutputReference {
    return new CesAppVersionSnapshotAgentsModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAgentsRemoteDialogflowAgent {
}

export function cesAppVersionSnapshotAgentsRemoteDialogflowAgentToTerraform(struct?: CesAppVersionSnapshotAgentsRemoteDialogflowAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAgentsRemoteDialogflowAgentToHclTerraform(struct?: CesAppVersionSnapshotAgentsRemoteDialogflowAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAgentsRemoteDialogflowAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAgentsRemoteDialogflowAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAgentsRemoteDialogflowAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent - computed: true, optional: false, required: false
  public get agent() {
    return this.getStringAttribute('agent');
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // flow_id - computed: true, optional: false, required: false
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }

  // input_variable_mapping - computed: true, optional: false, required: false
  private _inputVariableMapping = new cdktn.StringMap(this, "input_variable_mapping");
  public get inputVariableMapping() {
    return this._inputVariableMapping;
  }

  // output_variable_mapping - computed: true, optional: false, required: false
  private _outputVariableMapping = new cdktn.StringMap(this, "output_variable_mapping");
  public get outputVariableMapping() {
    return this._outputVariableMapping;
  }
}

export class CesAppVersionSnapshotAgentsRemoteDialogflowAgentList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAgentsRemoteDialogflowAgentOutputReference {
    return new CesAppVersionSnapshotAgentsRemoteDialogflowAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAgentsToolsets {
}

export function cesAppVersionSnapshotAgentsToolsetsToTerraform(struct?: CesAppVersionSnapshotAgentsToolsets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAgentsToolsetsToHclTerraform(struct?: CesAppVersionSnapshotAgentsToolsets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAgentsToolsetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAgentsToolsets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAgentsToolsets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tool_ids - computed: true, optional: false, required: false
  public get toolIds() {
    return this.getListAttribute('tool_ids');
  }

  // toolset - computed: true, optional: false, required: false
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
}

export class CesAppVersionSnapshotAgentsToolsetsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAgentsToolsetsOutputReference {
    return new CesAppVersionSnapshotAgentsToolsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAgents {
}

export function cesAppVersionSnapshotAgentsToTerraform(struct?: CesAppVersionSnapshotAgents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAgentsToHclTerraform(struct?: CesAppVersionSnapshotAgents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAgentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAgents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_agent_callbacks - computed: true, optional: false, required: false
  private _afterAgentCallbacks = new CesAppVersionSnapshotAgentsAfterAgentCallbacksList(this, "after_agent_callbacks", false);
  public get afterAgentCallbacks() {
    return this._afterAgentCallbacks;
  }

  // after_model_callbacks - computed: true, optional: false, required: false
  private _afterModelCallbacks = new CesAppVersionSnapshotAgentsAfterModelCallbacksList(this, "after_model_callbacks", false);
  public get afterModelCallbacks() {
    return this._afterModelCallbacks;
  }

  // after_tool_callbacks - computed: true, optional: false, required: false
  private _afterToolCallbacks = new CesAppVersionSnapshotAgentsAfterToolCallbacksList(this, "after_tool_callbacks", false);
  public get afterToolCallbacks() {
    return this._afterToolCallbacks;
  }

  // before_agent_callbacks - computed: true, optional: false, required: false
  private _beforeAgentCallbacks = new CesAppVersionSnapshotAgentsBeforeAgentCallbacksList(this, "before_agent_callbacks", false);
  public get beforeAgentCallbacks() {
    return this._beforeAgentCallbacks;
  }

  // before_model_callbacks - computed: true, optional: false, required: false
  private _beforeModelCallbacks = new CesAppVersionSnapshotAgentsBeforeModelCallbacksList(this, "before_model_callbacks", false);
  public get beforeModelCallbacks() {
    return this._beforeModelCallbacks;
  }

  // before_tool_callbacks - computed: true, optional: false, required: false
  private _beforeToolCallbacks = new CesAppVersionSnapshotAgentsBeforeToolCallbacksList(this, "before_tool_callbacks", false);
  public get beforeToolCallbacks() {
    return this._beforeToolCallbacks;
  }

  // child_agents - computed: true, optional: false, required: false
  public get childAgents() {
    return this.getListAttribute('child_agents');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // generated_summary - computed: true, optional: false, required: false
  public get generatedSummary() {
    return this.getStringAttribute('generated_summary');
  }

  // guardrails - computed: true, optional: false, required: false
  public get guardrails() {
    return this.getListAttribute('guardrails');
  }

  // instruction - computed: true, optional: false, required: false
  public get instruction() {
    return this.getStringAttribute('instruction');
  }

  // llm_agent - computed: true, optional: false, required: false
  private _llmAgent = new CesAppVersionSnapshotAgentsLlmAgentList(this, "llm_agent", false);
  public get llmAgent() {
    return this._llmAgent;
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new CesAppVersionSnapshotAgentsModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remote_dialogflow_agent - computed: true, optional: false, required: false
  private _remoteDialogflowAgent = new CesAppVersionSnapshotAgentsRemoteDialogflowAgentList(this, "remote_dialogflow_agent", false);
  public get remoteDialogflowAgent() {
    return this._remoteDialogflowAgent;
  }

  // tools - computed: true, optional: false, required: false
  public get tools() {
    return this.getListAttribute('tools');
  }

  // toolsets - computed: true, optional: false, required: false
  private _toolsets = new CesAppVersionSnapshotAgentsToolsetsList(this, "toolsets", false);
  public get toolsets() {
    return this._toolsets;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class CesAppVersionSnapshotAgentsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAgentsOutputReference {
    return new CesAppVersionSnapshotAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfig {
}

export function cesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigToTerraform(struct?: CesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigToHclTerraform(struct?: CesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcs_uri - computed: true, optional: false, required: false
  public get gcsUri() {
    return this.getStringAttribute('gcs_uri');
  }

  // prebuilt_ambient_sound - computed: true, optional: false, required: false
  public get prebuiltAmbientSound() {
    return this.getStringAttribute('prebuilt_ambient_sound');
  }

  // volume_gain_db - computed: true, optional: false, required: false
  public get volumeGainDb() {
    return this.getNumberAttribute('volume_gain_db');
  }
}

export class CesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigOutputReference {
    return new CesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppAudioProcessingConfigBargeInConfig {
}

export function cesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigToTerraform(struct?: CesAppVersionSnapshotAppAudioProcessingConfigBargeInConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigToHclTerraform(struct?: CesAppVersionSnapshotAppAudioProcessingConfigBargeInConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppAudioProcessingConfigBargeInConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppAudioProcessingConfigBargeInConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // barge_in_awareness - computed: true, optional: false, required: false
  public get bargeInAwareness() {
    return this.getBooleanAttribute('barge_in_awareness');
  }
}

export class CesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigOutputReference {
    return new CesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigs {
}

export function cesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsToTerraform(struct?: CesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsToHclTerraform(struct?: CesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // speaking_rate - computed: true, optional: false, required: false
  public get speakingRate() {
    return this.getNumberAttribute('speaking_rate');
  }

  // voice - computed: true, optional: false, required: false
  public get voice() {
    return this.getStringAttribute('voice');
  }
}

export class CesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference {
    return new CesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppAudioProcessingConfig {
}

export function cesAppVersionSnapshotAppAudioProcessingConfigToTerraform(struct?: CesAppVersionSnapshotAppAudioProcessingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppAudioProcessingConfigToHclTerraform(struct?: CesAppVersionSnapshotAppAudioProcessingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppAudioProcessingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppAudioProcessingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppAudioProcessingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ambient_sound_config - computed: true, optional: false, required: false
  private _ambientSoundConfig = new CesAppVersionSnapshotAppAudioProcessingConfigAmbientSoundConfigList(this, "ambient_sound_config", false);
  public get ambientSoundConfig() {
    return this._ambientSoundConfig;
  }

  // barge_in_config - computed: true, optional: false, required: false
  private _bargeInConfig = new CesAppVersionSnapshotAppAudioProcessingConfigBargeInConfigList(this, "barge_in_config", false);
  public get bargeInConfig() {
    return this._bargeInConfig;
  }

  // inactivity_timeout - computed: true, optional: false, required: false
  public get inactivityTimeout() {
    return this.getStringAttribute('inactivity_timeout');
  }

  // synthesize_speech_configs - computed: true, optional: false, required: false
  private _synthesizeSpeechConfigs = new CesAppVersionSnapshotAppAudioProcessingConfigSynthesizeSpeechConfigsList(this, "synthesize_speech_configs", true);
  public get synthesizeSpeechConfigs() {
    return this._synthesizeSpeechConfigs;
  }
}

export class CesAppVersionSnapshotAppAudioProcessingConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppAudioProcessingConfigOutputReference {
    return new CesAppVersionSnapshotAppAudioProcessingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppClientCertificateSettings {
}

export function cesAppVersionSnapshotAppClientCertificateSettingsToTerraform(struct?: CesAppVersionSnapshotAppClientCertificateSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppClientCertificateSettingsToHclTerraform(struct?: CesAppVersionSnapshotAppClientCertificateSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppClientCertificateSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppClientCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppClientCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // tls_certificate - computed: true, optional: false, required: false
  public get tlsCertificate() {
    return this.getStringAttribute('tls_certificate');
  }
}

export class CesAppVersionSnapshotAppClientCertificateSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppClientCertificateSettingsOutputReference {
    return new CesAppVersionSnapshotAppClientCertificateSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppDataStoreSettingsEngines {
}

export function cesAppVersionSnapshotAppDataStoreSettingsEnginesToTerraform(struct?: CesAppVersionSnapshotAppDataStoreSettingsEngines): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppDataStoreSettingsEnginesToHclTerraform(struct?: CesAppVersionSnapshotAppDataStoreSettingsEngines): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppDataStoreSettingsEnginesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppDataStoreSettingsEngines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppDataStoreSettingsEngines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CesAppVersionSnapshotAppDataStoreSettingsEnginesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppDataStoreSettingsEnginesOutputReference {
    return new CesAppVersionSnapshotAppDataStoreSettingsEnginesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppDataStoreSettings {
}

export function cesAppVersionSnapshotAppDataStoreSettingsToTerraform(struct?: CesAppVersionSnapshotAppDataStoreSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppDataStoreSettingsToHclTerraform(struct?: CesAppVersionSnapshotAppDataStoreSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppDataStoreSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppDataStoreSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppDataStoreSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // engines - computed: true, optional: false, required: false
  private _engines = new CesAppVersionSnapshotAppDataStoreSettingsEnginesList(this, "engines", false);
  public get engines() {
    return this._engines;
  }
}

export class CesAppVersionSnapshotAppDataStoreSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppDataStoreSettingsOutputReference {
    return new CesAppVersionSnapshotAppDataStoreSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppDefaultChannelProfilePersonaProperty {
}

export function cesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyToTerraform(struct?: CesAppVersionSnapshotAppDefaultChannelProfilePersonaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyToHclTerraform(struct?: CesAppVersionSnapshotAppDefaultChannelProfilePersonaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppDefaultChannelProfilePersonaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppDefaultChannelProfilePersonaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // persona - computed: true, optional: false, required: false
  public get persona() {
    return this.getStringAttribute('persona');
  }
}

export class CesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyOutputReference {
    return new CesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfig {
}

export function cesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigToTerraform(struct?: CesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigToHclTerraform(struct?: CesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // modality - computed: true, optional: false, required: false
  public get modality() {
    return this.getStringAttribute('modality');
  }

  // theme - computed: true, optional: false, required: false
  public get theme() {
    return this.getStringAttribute('theme');
  }

  // web_widget_title - computed: true, optional: false, required: false
  public get webWidgetTitle() {
    return this.getStringAttribute('web_widget_title');
  }
}

export class CesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigOutputReference {
    return new CesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppDefaultChannelProfile {
}

export function cesAppVersionSnapshotAppDefaultChannelProfileToTerraform(struct?: CesAppVersionSnapshotAppDefaultChannelProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppDefaultChannelProfileToHclTerraform(struct?: CesAppVersionSnapshotAppDefaultChannelProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppDefaultChannelProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppDefaultChannelProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppDefaultChannelProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_type - computed: true, optional: false, required: false
  public get channelType() {
    return this.getStringAttribute('channel_type');
  }

  // disable_barge_in_control - computed: true, optional: false, required: false
  public get disableBargeInControl() {
    return this.getBooleanAttribute('disable_barge_in_control');
  }

  // disable_dtmf - computed: true, optional: false, required: false
  public get disableDtmf() {
    return this.getBooleanAttribute('disable_dtmf');
  }

  // persona_property - computed: true, optional: false, required: false
  private _personaProperty = new CesAppVersionSnapshotAppDefaultChannelProfilePersonaPropertyList(this, "persona_property", false);
  public get personaProperty() {
    return this._personaProperty;
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // web_widget_config - computed: true, optional: false, required: false
  private _webWidgetConfig = new CesAppVersionSnapshotAppDefaultChannelProfileWebWidgetConfigList(this, "web_widget_config", false);
  public get webWidgetConfig() {
    return this._webWidgetConfig;
  }
}

export class CesAppVersionSnapshotAppDefaultChannelProfileList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppDefaultChannelProfileOutputReference {
    return new CesAppVersionSnapshotAppDefaultChannelProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds {
}

export function cesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsToTerraform(struct?: CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsToHclTerraform(struct?: CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tool_invocation_parameter_correctness_threshold - computed: true, optional: false, required: false
  public get toolInvocationParameterCorrectnessThreshold() {
    return this.getNumberAttribute('tool_invocation_parameter_correctness_threshold');
  }
}

export class CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference {
    return new CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds {
}

export function cesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsToTerraform(struct?: CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsToHclTerraform(struct?: CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // overall_tool_invocation_correctness_threshold - computed: true, optional: false, required: false
  public get overallToolInvocationCorrectnessThreshold() {
    return this.getNumberAttribute('overall_tool_invocation_correctness_threshold');
  }

  // semantic_similarity_success_threshold - computed: true, optional: false, required: false
  public get semanticSimilaritySuccessThreshold() {
    return this.getNumberAttribute('semantic_similarity_success_threshold');
  }
}

export class CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference {
    return new CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds {
}

export function cesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToTerraform(struct?: CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToHclTerraform(struct?: CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expectation_level_metrics_thresholds - computed: true, optional: false, required: false
  private _expectationLevelMetricsThresholds = new CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsList(this, "expectation_level_metrics_thresholds", false);
  public get expectationLevelMetricsThresholds() {
    return this._expectationLevelMetricsThresholds;
  }

  // turn_level_metrics_thresholds - computed: true, optional: false, required: false
  private _turnLevelMetricsThresholds = new CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsList(this, "turn_level_metrics_thresholds", false);
  public get turnLevelMetricsThresholds() {
    return this._turnLevelMetricsThresholds;
  }
}

export class CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference {
    return new CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppEvaluationMetricsThresholds {
}

export function cesAppVersionSnapshotAppEvaluationMetricsThresholdsToTerraform(struct?: CesAppVersionSnapshotAppEvaluationMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppEvaluationMetricsThresholdsToHclTerraform(struct?: CesAppVersionSnapshotAppEvaluationMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppEvaluationMetricsThresholdsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppEvaluationMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppEvaluationMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // golden_evaluation_metrics_thresholds - computed: true, optional: false, required: false
  private _goldenEvaluationMetricsThresholds = new CesAppVersionSnapshotAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsList(this, "golden_evaluation_metrics_thresholds", false);
  public get goldenEvaluationMetricsThresholds() {
    return this._goldenEvaluationMetricsThresholds;
  }
}

export class CesAppVersionSnapshotAppEvaluationMetricsThresholdsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppEvaluationMetricsThresholdsOutputReference {
    return new CesAppVersionSnapshotAppEvaluationMetricsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppLanguageSettings {
}

export function cesAppVersionSnapshotAppLanguageSettingsToTerraform(struct?: CesAppVersionSnapshotAppLanguageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppLanguageSettingsToHclTerraform(struct?: CesAppVersionSnapshotAppLanguageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppLanguageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppLanguageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppLanguageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_language_code - computed: true, optional: false, required: false
  public get defaultLanguageCode() {
    return this.getStringAttribute('default_language_code');
  }

  // enable_multilingual_support - computed: true, optional: false, required: false
  public get enableMultilingualSupport() {
    return this.getBooleanAttribute('enable_multilingual_support');
  }

  // fallback_action - computed: true, optional: false, required: false
  public get fallbackAction() {
    return this.getStringAttribute('fallback_action');
  }

  // supported_language_codes - computed: true, optional: false, required: false
  public get supportedLanguageCodes() {
    return this.getListAttribute('supported_language_codes');
  }
}

export class CesAppVersionSnapshotAppLanguageSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppLanguageSettingsOutputReference {
    return new CesAppVersionSnapshotAppLanguageSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfig {
}

export function cesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigToTerraform(struct?: CesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigToHclTerraform(struct?: CesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcs_bucket - computed: true, optional: false, required: false
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
  }

  // gcs_path_prefix - computed: true, optional: false, required: false
  public get gcsPathPrefix() {
    return this.getStringAttribute('gcs_path_prefix');
  }
}

export class CesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigOutputReference {
    return new CesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettings {
}

export function cesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsToTerraform(struct?: CesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsToHclTerraform(struct?: CesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}

export class CesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsOutputReference {
    return new CesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettings {
}

export function cesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsToTerraform(struct?: CesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsToHclTerraform(struct?: CesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_cloud_logging - computed: true, optional: false, required: false
  public get enableCloudLogging() {
    return this.getBooleanAttribute('enable_cloud_logging');
  }
}

export class CesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsOutputReference {
    return new CesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettings {
}

export function cesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsToTerraform(struct?: CesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsToHclTerraform(struct?: CesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_conversation_logging - computed: true, optional: false, required: false
  public get disableConversationLogging() {
    return this.getBooleanAttribute('disable_conversation_logging');
  }
}

export class CesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsOutputReference {
    return new CesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppLoggingSettingsRedactionConfig {
}

export function cesAppVersionSnapshotAppLoggingSettingsRedactionConfigToTerraform(struct?: CesAppVersionSnapshotAppLoggingSettingsRedactionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppLoggingSettingsRedactionConfigToHclTerraform(struct?: CesAppVersionSnapshotAppLoggingSettingsRedactionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppLoggingSettingsRedactionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppLoggingSettingsRedactionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppLoggingSettingsRedactionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deidentify_template - computed: true, optional: false, required: false
  public get deidentifyTemplate() {
    return this.getStringAttribute('deidentify_template');
  }

  // enable_redaction - computed: true, optional: false, required: false
  public get enableRedaction() {
    return this.getBooleanAttribute('enable_redaction');
  }

  // inspect_template - computed: true, optional: false, required: false
  public get inspectTemplate() {
    return this.getStringAttribute('inspect_template');
  }
}

export class CesAppVersionSnapshotAppLoggingSettingsRedactionConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppLoggingSettingsRedactionConfigOutputReference {
    return new CesAppVersionSnapshotAppLoggingSettingsRedactionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppLoggingSettings {
}

export function cesAppVersionSnapshotAppLoggingSettingsToTerraform(struct?: CesAppVersionSnapshotAppLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppLoggingSettingsToHclTerraform(struct?: CesAppVersionSnapshotAppLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppLoggingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_recording_config - computed: true, optional: false, required: false
  private _audioRecordingConfig = new CesAppVersionSnapshotAppLoggingSettingsAudioRecordingConfigList(this, "audio_recording_config", false);
  public get audioRecordingConfig() {
    return this._audioRecordingConfig;
  }

  // bigquery_export_settings - computed: true, optional: false, required: false
  private _bigqueryExportSettings = new CesAppVersionSnapshotAppLoggingSettingsBigqueryExportSettingsList(this, "bigquery_export_settings", false);
  public get bigqueryExportSettings() {
    return this._bigqueryExportSettings;
  }

  // cloud_logging_settings - computed: true, optional: false, required: false
  private _cloudLoggingSettings = new CesAppVersionSnapshotAppLoggingSettingsCloudLoggingSettingsList(this, "cloud_logging_settings", false);
  public get cloudLoggingSettings() {
    return this._cloudLoggingSettings;
  }

  // conversation_logging_settings - computed: true, optional: false, required: false
  private _conversationLoggingSettings = new CesAppVersionSnapshotAppLoggingSettingsConversationLoggingSettingsList(this, "conversation_logging_settings", false);
  public get conversationLoggingSettings() {
    return this._conversationLoggingSettings;
  }

  // redaction_config - computed: true, optional: false, required: false
  private _redactionConfig = new CesAppVersionSnapshotAppLoggingSettingsRedactionConfigList(this, "redaction_config", false);
  public get redactionConfig() {
    return this._redactionConfig;
  }
}

export class CesAppVersionSnapshotAppLoggingSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppLoggingSettingsOutputReference {
    return new CesAppVersionSnapshotAppLoggingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppModelSettings {
}

export function cesAppVersionSnapshotAppModelSettingsToTerraform(struct?: CesAppVersionSnapshotAppModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppModelSettingsToHclTerraform(struct?: CesAppVersionSnapshotAppModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class CesAppVersionSnapshotAppModelSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppModelSettingsOutputReference {
    return new CesAppVersionSnapshotAppModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppTimeZoneSettings {
}

export function cesAppVersionSnapshotAppTimeZoneSettingsToTerraform(struct?: CesAppVersionSnapshotAppTimeZoneSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppTimeZoneSettingsToHclTerraform(struct?: CesAppVersionSnapshotAppTimeZoneSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppTimeZoneSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppTimeZoneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppTimeZoneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}

export class CesAppVersionSnapshotAppTimeZoneSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppTimeZoneSettingsOutputReference {
    return new CesAppVersionSnapshotAppTimeZoneSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppVariableDeclarationsSchema {
}

export function cesAppVersionSnapshotAppVariableDeclarationsSchemaToTerraform(struct?: CesAppVersionSnapshotAppVariableDeclarationsSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppVariableDeclarationsSchemaToHclTerraform(struct?: CesAppVersionSnapshotAppVariableDeclarationsSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppVariableDeclarationsSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppVariableDeclarationsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppVariableDeclarationsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // any_of - computed: true, optional: false, required: false
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // defs - computed: true, optional: false, required: false
  public get defs() {
    return this.getStringAttribute('defs');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getStringAttribute('items');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // prefix_items - computed: true, optional: false, required: false
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getStringAttribute('properties');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getListAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_items - computed: true, optional: false, required: false
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
}

export class CesAppVersionSnapshotAppVariableDeclarationsSchemaList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppVariableDeclarationsSchemaOutputReference {
    return new CesAppVersionSnapshotAppVariableDeclarationsSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotAppVariableDeclarations {
}

export function cesAppVersionSnapshotAppVariableDeclarationsToTerraform(struct?: CesAppVersionSnapshotAppVariableDeclarations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppVariableDeclarationsToHclTerraform(struct?: CesAppVersionSnapshotAppVariableDeclarations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppVariableDeclarationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotAppVariableDeclarations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotAppVariableDeclarations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new CesAppVersionSnapshotAppVariableDeclarationsSchemaList(this, "schema", false);
  public get schema() {
    return this._schema;
  }
}

export class CesAppVersionSnapshotAppVariableDeclarationsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppVariableDeclarationsOutputReference {
    return new CesAppVersionSnapshotAppVariableDeclarationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotApp {
}

export function cesAppVersionSnapshotAppToTerraform(struct?: CesAppVersionSnapshotApp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotAppToHclTerraform(struct?: CesAppVersionSnapshotApp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotAppOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_processing_config - computed: true, optional: false, required: false
  private _audioProcessingConfig = new CesAppVersionSnapshotAppAudioProcessingConfigList(this, "audio_processing_config", false);
  public get audioProcessingConfig() {
    return this._audioProcessingConfig;
  }

  // client_certificate_settings - computed: true, optional: false, required: false
  private _clientCertificateSettings = new CesAppVersionSnapshotAppClientCertificateSettingsList(this, "client_certificate_settings", false);
  public get clientCertificateSettings() {
    return this._clientCertificateSettings;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_settings - computed: true, optional: false, required: false
  private _dataStoreSettings = new CesAppVersionSnapshotAppDataStoreSettingsList(this, "data_store_settings", false);
  public get dataStoreSettings() {
    return this._dataStoreSettings;
  }

  // default_channel_profile - computed: true, optional: false, required: false
  private _defaultChannelProfile = new CesAppVersionSnapshotAppDefaultChannelProfileList(this, "default_channel_profile", false);
  public get defaultChannelProfile() {
    return this._defaultChannelProfile;
  }

  // deployment_count - computed: true, optional: false, required: false
  public get deploymentCount() {
    return this.getNumberAttribute('deployment_count');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // evaluation_metrics_thresholds - computed: true, optional: false, required: false
  private _evaluationMetricsThresholds = new CesAppVersionSnapshotAppEvaluationMetricsThresholdsList(this, "evaluation_metrics_thresholds", false);
  public get evaluationMetricsThresholds() {
    return this._evaluationMetricsThresholds;
  }

  // global_instruction - computed: true, optional: false, required: false
  public get globalInstruction() {
    return this.getStringAttribute('global_instruction');
  }

  // guardrails - computed: true, optional: false, required: false
  public get guardrails() {
    return this.getListAttribute('guardrails');
  }

  // language_settings - computed: true, optional: false, required: false
  private _languageSettings = new CesAppVersionSnapshotAppLanguageSettingsList(this, "language_settings", false);
  public get languageSettings() {
    return this._languageSettings;
  }

  // logging_settings - computed: true, optional: false, required: false
  private _loggingSettings = new CesAppVersionSnapshotAppLoggingSettingsList(this, "logging_settings", false);
  public get loggingSettings() {
    return this._loggingSettings;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktn.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new CesAppVersionSnapshotAppModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // root_agent - computed: true, optional: false, required: false
  public get rootAgent() {
    return this.getStringAttribute('root_agent');
  }

  // time_zone_settings - computed: true, optional: false, required: false
  private _timeZoneSettings = new CesAppVersionSnapshotAppTimeZoneSettingsList(this, "time_zone_settings", false);
  public get timeZoneSettings() {
    return this._timeZoneSettings;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // variable_declarations - computed: true, optional: false, required: false
  private _variableDeclarations = new CesAppVersionSnapshotAppVariableDeclarationsList(this, "variable_declarations", false);
  public get variableDeclarations() {
    return this._variableDeclarations;
  }
}

export class CesAppVersionSnapshotAppList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotAppOutputReference {
    return new CesAppVersionSnapshotAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotExamplesMessagesChunksAgentTransfer {
}

export function cesAppVersionSnapshotExamplesMessagesChunksAgentTransferToTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksAgentTransfer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotExamplesMessagesChunksAgentTransferToHclTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksAgentTransfer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotExamplesMessagesChunksAgentTransferOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotExamplesMessagesChunksAgentTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotExamplesMessagesChunksAgentTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // target_agent - computed: true, optional: false, required: false
  public get targetAgent() {
    return this.getStringAttribute('target_agent');
  }
}

export class CesAppVersionSnapshotExamplesMessagesChunksAgentTransferList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotExamplesMessagesChunksAgentTransferOutputReference {
    return new CesAppVersionSnapshotExamplesMessagesChunksAgentTransferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotExamplesMessagesChunksImage {
}

export function cesAppVersionSnapshotExamplesMessagesChunksImageToTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotExamplesMessagesChunksImageToHclTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotExamplesMessagesChunksImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotExamplesMessagesChunksImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotExamplesMessagesChunksImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
}

export class CesAppVersionSnapshotExamplesMessagesChunksImageList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotExamplesMessagesChunksImageOutputReference {
    return new CesAppVersionSnapshotExamplesMessagesChunksImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetTool {
}

export function cesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolToTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolToHclTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tool_id - computed: true, optional: false, required: false
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }

  // toolset - computed: true, optional: false, required: false
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
}

export class CesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolOutputReference {
    return new CesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotExamplesMessagesChunksToolCall {
}

export function cesAppVersionSnapshotExamplesMessagesChunksToolCallToTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksToolCall): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotExamplesMessagesChunksToolCallToHclTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksToolCall): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotExamplesMessagesChunksToolCallOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotExamplesMessagesChunksToolCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotExamplesMessagesChunksToolCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getStringAttribute('args');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tool - computed: true, optional: false, required: false
  public get tool() {
    return this.getStringAttribute('tool');
  }

  // toolset_tool - computed: true, optional: false, required: false
  private _toolsetTool = new CesAppVersionSnapshotExamplesMessagesChunksToolCallToolsetToolList(this, "toolset_tool", false);
  public get toolsetTool() {
    return this._toolsetTool;
  }
}

export class CesAppVersionSnapshotExamplesMessagesChunksToolCallList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotExamplesMessagesChunksToolCallOutputReference {
    return new CesAppVersionSnapshotExamplesMessagesChunksToolCallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetTool {
}

export function cesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolToTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolToHclTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tool_id - computed: true, optional: false, required: false
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }

  // toolset - computed: true, optional: false, required: false
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
}

export class CesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolOutputReference {
    return new CesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotExamplesMessagesChunksToolResponse {
}

export function cesAppVersionSnapshotExamplesMessagesChunksToolResponseToTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksToolResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotExamplesMessagesChunksToolResponseToHclTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunksToolResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotExamplesMessagesChunksToolResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotExamplesMessagesChunksToolResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotExamplesMessagesChunksToolResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }

  // tool - computed: true, optional: false, required: false
  public get tool() {
    return this.getStringAttribute('tool');
  }

  // toolset_tool - computed: true, optional: false, required: false
  private _toolsetTool = new CesAppVersionSnapshotExamplesMessagesChunksToolResponseToolsetToolList(this, "toolset_tool", false);
  public get toolsetTool() {
    return this._toolsetTool;
  }
}

export class CesAppVersionSnapshotExamplesMessagesChunksToolResponseList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotExamplesMessagesChunksToolResponseOutputReference {
    return new CesAppVersionSnapshotExamplesMessagesChunksToolResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotExamplesMessagesChunks {
}

export function cesAppVersionSnapshotExamplesMessagesChunksToTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotExamplesMessagesChunksToHclTerraform(struct?: CesAppVersionSnapshotExamplesMessagesChunks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotExamplesMessagesChunksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotExamplesMessagesChunks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotExamplesMessagesChunks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_transfer - computed: true, optional: false, required: false
  private _agentTransfer = new CesAppVersionSnapshotExamplesMessagesChunksAgentTransferList(this, "agent_transfer", false);
  public get agentTransfer() {
    return this._agentTransfer;
  }

  // image - computed: true, optional: false, required: false
  private _image = new CesAppVersionSnapshotExamplesMessagesChunksImageList(this, "image", false);
  public get image() {
    return this._image;
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // tool_call - computed: true, optional: false, required: false
  private _toolCall = new CesAppVersionSnapshotExamplesMessagesChunksToolCallList(this, "tool_call", false);
  public get toolCall() {
    return this._toolCall;
  }

  // tool_response - computed: true, optional: false, required: false
  private _toolResponse = new CesAppVersionSnapshotExamplesMessagesChunksToolResponseList(this, "tool_response", false);
  public get toolResponse() {
    return this._toolResponse;
  }

  // updated_variables - computed: true, optional: false, required: false
  public get updatedVariables() {
    return this.getStringAttribute('updated_variables');
  }
}

export class CesAppVersionSnapshotExamplesMessagesChunksList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotExamplesMessagesChunksOutputReference {
    return new CesAppVersionSnapshotExamplesMessagesChunksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotExamplesMessages {
}

export function cesAppVersionSnapshotExamplesMessagesToTerraform(struct?: CesAppVersionSnapshotExamplesMessages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotExamplesMessagesToHclTerraform(struct?: CesAppVersionSnapshotExamplesMessages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotExamplesMessagesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotExamplesMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotExamplesMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chunks - computed: true, optional: false, required: false
  private _chunks = new CesAppVersionSnapshotExamplesMessagesChunksList(this, "chunks", false);
  public get chunks() {
    return this._chunks;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class CesAppVersionSnapshotExamplesMessagesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotExamplesMessagesOutputReference {
    return new CesAppVersionSnapshotExamplesMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotExamples {
}

export function cesAppVersionSnapshotExamplesToTerraform(struct?: CesAppVersionSnapshotExamples): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotExamplesToHclTerraform(struct?: CesAppVersionSnapshotExamples): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotExamplesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotExamples | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotExamples | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // entry_agent - computed: true, optional: false, required: false
  public get entryAgent() {
    return this.getStringAttribute('entry_agent');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new CesAppVersionSnapshotExamplesMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class CesAppVersionSnapshotExamplesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotExamplesOutputReference {
    return new CesAppVersionSnapshotExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsActionGenerativeAnswer {
}

export function cesAppVersionSnapshotGuardrailsActionGenerativeAnswerToTerraform(struct?: CesAppVersionSnapshotGuardrailsActionGenerativeAnswer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsActionGenerativeAnswerToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsActionGenerativeAnswer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsActionGenerativeAnswerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsActionGenerativeAnswer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsActionGenerativeAnswer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}

export class CesAppVersionSnapshotGuardrailsActionGenerativeAnswerList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsActionGenerativeAnswerOutputReference {
    return new CesAppVersionSnapshotGuardrailsActionGenerativeAnswerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponses {
}

export function cesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesToTerraform(struct?: CesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class CesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesOutputReference {
    return new CesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsActionRespondImmediately {
}

export function cesAppVersionSnapshotGuardrailsActionRespondImmediatelyToTerraform(struct?: CesAppVersionSnapshotGuardrailsActionRespondImmediately): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsActionRespondImmediatelyToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsActionRespondImmediately): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsActionRespondImmediatelyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsActionRespondImmediately | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsActionRespondImmediately | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // responses - computed: true, optional: false, required: false
  private _responses = new CesAppVersionSnapshotGuardrailsActionRespondImmediatelyResponsesList(this, "responses", false);
  public get responses() {
    return this._responses;
  }
}

export class CesAppVersionSnapshotGuardrailsActionRespondImmediatelyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsActionRespondImmediatelyOutputReference {
    return new CesAppVersionSnapshotGuardrailsActionRespondImmediatelyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsActionTransferAgent {
}

export function cesAppVersionSnapshotGuardrailsActionTransferAgentToTerraform(struct?: CesAppVersionSnapshotGuardrailsActionTransferAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsActionTransferAgentToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsActionTransferAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsActionTransferAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsActionTransferAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsActionTransferAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent - computed: true, optional: false, required: false
  public get agent() {
    return this.getStringAttribute('agent');
  }
}

export class CesAppVersionSnapshotGuardrailsActionTransferAgentList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsActionTransferAgentOutputReference {
    return new CesAppVersionSnapshotGuardrailsActionTransferAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsAction {
}

export function cesAppVersionSnapshotGuardrailsActionToTerraform(struct?: CesAppVersionSnapshotGuardrailsAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsActionToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generative_answer - computed: true, optional: false, required: false
  private _generativeAnswer = new CesAppVersionSnapshotGuardrailsActionGenerativeAnswerList(this, "generative_answer", false);
  public get generativeAnswer() {
    return this._generativeAnswer;
  }

  // respond_immediately - computed: true, optional: false, required: false
  private _respondImmediately = new CesAppVersionSnapshotGuardrailsActionRespondImmediatelyList(this, "respond_immediately", false);
  public get respondImmediately() {
    return this._respondImmediately;
  }

  // transfer_agent - computed: true, optional: false, required: false
  private _transferAgent = new CesAppVersionSnapshotGuardrailsActionTransferAgentList(this, "transfer_agent", false);
  public get transferAgent() {
    return this._transferAgent;
  }
}

export class CesAppVersionSnapshotGuardrailsActionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsActionOutputReference {
    return new CesAppVersionSnapshotGuardrailsActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallback {
}

export function cesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackToTerraform(struct?: CesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class CesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackOutputReference {
    return new CesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallback {
}

export function cesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackToTerraform(struct?: CesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class CesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackOutputReference {
    return new CesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallback {
}

export function cesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackToTerraform(struct?: CesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class CesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackOutputReference {
    return new CesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallback {
}

export function cesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackToTerraform(struct?: CesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class CesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackOutputReference {
    return new CesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsCodeCallback {
}

export function cesAppVersionSnapshotGuardrailsCodeCallbackToTerraform(struct?: CesAppVersionSnapshotGuardrailsCodeCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsCodeCallbackToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsCodeCallback): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsCodeCallbackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsCodeCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsCodeCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_agent_callback - computed: true, optional: false, required: false
  private _afterAgentCallback = new CesAppVersionSnapshotGuardrailsCodeCallbackAfterAgentCallbackList(this, "after_agent_callback", false);
  public get afterAgentCallback() {
    return this._afterAgentCallback;
  }

  // after_model_callback - computed: true, optional: false, required: false
  private _afterModelCallback = new CesAppVersionSnapshotGuardrailsCodeCallbackAfterModelCallbackList(this, "after_model_callback", false);
  public get afterModelCallback() {
    return this._afterModelCallback;
  }

  // before_agent_callback - computed: true, optional: false, required: false
  private _beforeAgentCallback = new CesAppVersionSnapshotGuardrailsCodeCallbackBeforeAgentCallbackList(this, "before_agent_callback", false);
  public get beforeAgentCallback() {
    return this._beforeAgentCallback;
  }

  // before_model_callback - computed: true, optional: false, required: false
  private _beforeModelCallback = new CesAppVersionSnapshotGuardrailsCodeCallbackBeforeModelCallbackList(this, "before_model_callback", false);
  public get beforeModelCallback() {
    return this._beforeModelCallback;
  }
}

export class CesAppVersionSnapshotGuardrailsCodeCallbackList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsCodeCallbackOutputReference {
    return new CesAppVersionSnapshotGuardrailsCodeCallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsContentFilter {
}

export function cesAppVersionSnapshotGuardrailsContentFilterToTerraform(struct?: CesAppVersionSnapshotGuardrailsContentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsContentFilterToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsContentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsContentFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsContentFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsContentFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // banned_contents - computed: true, optional: false, required: false
  public get bannedContents() {
    return this.getListAttribute('banned_contents');
  }

  // banned_contents_in_agent_response - computed: true, optional: false, required: false
  public get bannedContentsInAgentResponse() {
    return this.getListAttribute('banned_contents_in_agent_response');
  }

  // banned_contents_in_user_input - computed: true, optional: false, required: false
  public get bannedContentsInUserInput() {
    return this.getListAttribute('banned_contents_in_user_input');
  }

  // disregard_diacritics - computed: true, optional: false, required: false
  public get disregardDiacritics() {
    return this.getBooleanAttribute('disregard_diacritics');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
}

export class CesAppVersionSnapshotGuardrailsContentFilterList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsContentFilterOutputReference {
    return new CesAppVersionSnapshotGuardrailsContentFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsLlmPolicyModelSettings {
}

export function cesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsToTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPolicyModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPolicyModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsLlmPolicyModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsLlmPolicyModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class CesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsOutputReference {
    return new CesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsLlmPolicy {
}

export function cesAppVersionSnapshotGuardrailsLlmPolicyToTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsLlmPolicyToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsLlmPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsLlmPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsLlmPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_open - computed: true, optional: false, required: false
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }

  // max_conversation_messages - computed: true, optional: false, required: false
  public get maxConversationMessages() {
    return this.getNumberAttribute('max_conversation_messages');
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new CesAppVersionSnapshotGuardrailsLlmPolicyModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // policy_scope - computed: true, optional: false, required: false
  public get policyScope() {
    return this.getStringAttribute('policy_scope');
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}

export class CesAppVersionSnapshotGuardrailsLlmPolicyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsLlmPolicyOutputReference {
    return new CesAppVersionSnapshotGuardrailsLlmPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettings {
}

export function cesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsToTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsOutputReference {
    return new CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicy {
}

export function cesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyToTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_open - computed: true, optional: false, required: false
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }

  // max_conversation_messages - computed: true, optional: false, required: false
  public get maxConversationMessages() {
    return this.getNumberAttribute('max_conversation_messages');
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // policy_scope - computed: true, optional: false, required: false
  public get policyScope() {
    return this.getStringAttribute('policy_scope');
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}

export class CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyOutputReference {
    return new CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettings {
}

export function cesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsToTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_prompt_template - computed: true, optional: false, required: false
  public get defaultPromptTemplate() {
    return this.getStringAttribute('default_prompt_template');
  }
}

export class CesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsOutputReference {
    return new CesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsLlmPromptSecurity {
}

export function cesAppVersionSnapshotGuardrailsLlmPromptSecurityToTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPromptSecurity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsLlmPromptSecurityToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsLlmPromptSecurity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsLlmPromptSecurityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsLlmPromptSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsLlmPromptSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_policy - computed: true, optional: false, required: false
  private _customPolicy = new CesAppVersionSnapshotGuardrailsLlmPromptSecurityCustomPolicyList(this, "custom_policy", false);
  public get customPolicy() {
    return this._customPolicy;
  }

  // default_settings - computed: true, optional: false, required: false
  private _defaultSettings = new CesAppVersionSnapshotGuardrailsLlmPromptSecurityDefaultSettingsList(this, "default_settings", false);
  public get defaultSettings() {
    return this._defaultSettings;
  }

  // fail_open - computed: true, optional: false, required: false
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
}

export class CesAppVersionSnapshotGuardrailsLlmPromptSecurityList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsLlmPromptSecurityOutputReference {
    return new CesAppVersionSnapshotGuardrailsLlmPromptSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsModelSafetySafetySettings {
}

export function cesAppVersionSnapshotGuardrailsModelSafetySafetySettingsToTerraform(struct?: CesAppVersionSnapshotGuardrailsModelSafetySafetySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsModelSafetySafetySettingsToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsModelSafetySafetySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsModelSafetySafetySettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsModelSafetySafetySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsModelSafetySafetySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
}

export class CesAppVersionSnapshotGuardrailsModelSafetySafetySettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsModelSafetySafetySettingsOutputReference {
    return new CesAppVersionSnapshotGuardrailsModelSafetySafetySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrailsModelSafety {
}

export function cesAppVersionSnapshotGuardrailsModelSafetyToTerraform(struct?: CesAppVersionSnapshotGuardrailsModelSafety): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsModelSafetyToHclTerraform(struct?: CesAppVersionSnapshotGuardrailsModelSafety): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsModelSafetyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrailsModelSafety | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrailsModelSafety | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // safety_settings - computed: true, optional: false, required: false
  private _safetySettings = new CesAppVersionSnapshotGuardrailsModelSafetySafetySettingsList(this, "safety_settings", false);
  public get safetySettings() {
    return this._safetySettings;
  }
}

export class CesAppVersionSnapshotGuardrailsModelSafetyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsModelSafetyOutputReference {
    return new CesAppVersionSnapshotGuardrailsModelSafetyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotGuardrails {
}

export function cesAppVersionSnapshotGuardrailsToTerraform(struct?: CesAppVersionSnapshotGuardrails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotGuardrailsToHclTerraform(struct?: CesAppVersionSnapshotGuardrails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotGuardrailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotGuardrails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotGuardrails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new CesAppVersionSnapshotGuardrailsActionList(this, "action", false);
  public get action() {
    return this._action;
  }

  // code_callback - computed: true, optional: false, required: false
  private _codeCallback = new CesAppVersionSnapshotGuardrailsCodeCallbackList(this, "code_callback", false);
  public get codeCallback() {
    return this._codeCallback;
  }

  // content_filter - computed: true, optional: false, required: false
  private _contentFilter = new CesAppVersionSnapshotGuardrailsContentFilterList(this, "content_filter", false);
  public get contentFilter() {
    return this._contentFilter;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // llm_policy - computed: true, optional: false, required: false
  private _llmPolicy = new CesAppVersionSnapshotGuardrailsLlmPolicyList(this, "llm_policy", false);
  public get llmPolicy() {
    return this._llmPolicy;
  }

  // llm_prompt_security - computed: true, optional: false, required: false
  private _llmPromptSecurity = new CesAppVersionSnapshotGuardrailsLlmPromptSecurityList(this, "llm_prompt_security", false);
  public get llmPromptSecurity() {
    return this._llmPromptSecurity;
  }

  // model_safety - computed: true, optional: false, required: false
  private _modelSafety = new CesAppVersionSnapshotGuardrailsModelSafetyList(this, "model_safety", false);
  public get modelSafety() {
    return this._modelSafety;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class CesAppVersionSnapshotGuardrailsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotGuardrailsOutputReference {
    return new CesAppVersionSnapshotGuardrailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsClientFunctionParameters {
}

export function cesAppVersionSnapshotToolsClientFunctionParametersToTerraform(struct?: CesAppVersionSnapshotToolsClientFunctionParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsClientFunctionParametersToHclTerraform(struct?: CesAppVersionSnapshotToolsClientFunctionParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsClientFunctionParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsClientFunctionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsClientFunctionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // any_of - computed: true, optional: false, required: false
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // defs - computed: true, optional: false, required: false
  public get defs() {
    return this.getStringAttribute('defs');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getStringAttribute('items');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // prefix_items - computed: true, optional: false, required: false
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getStringAttribute('properties');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getListAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_items - computed: true, optional: false, required: false
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
}

export class CesAppVersionSnapshotToolsClientFunctionParametersList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsClientFunctionParametersOutputReference {
    return new CesAppVersionSnapshotToolsClientFunctionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsClientFunctionResponse {
}

export function cesAppVersionSnapshotToolsClientFunctionResponseToTerraform(struct?: CesAppVersionSnapshotToolsClientFunctionResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsClientFunctionResponseToHclTerraform(struct?: CesAppVersionSnapshotToolsClientFunctionResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsClientFunctionResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsClientFunctionResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsClientFunctionResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // any_of - computed: true, optional: false, required: false
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // defs - computed: true, optional: false, required: false
  public get defs() {
    return this.getStringAttribute('defs');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getStringAttribute('items');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // prefix_items - computed: true, optional: false, required: false
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getStringAttribute('properties');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getListAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_items - computed: true, optional: false, required: false
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
}

export class CesAppVersionSnapshotToolsClientFunctionResponseList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsClientFunctionResponseOutputReference {
    return new CesAppVersionSnapshotToolsClientFunctionResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsClientFunction {
}

export function cesAppVersionSnapshotToolsClientFunctionToTerraform(struct?: CesAppVersionSnapshotToolsClientFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsClientFunctionToHclTerraform(struct?: CesAppVersionSnapshotToolsClientFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsClientFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsClientFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsClientFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new CesAppVersionSnapshotToolsClientFunctionParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // response - computed: true, optional: false, required: false
  private _response = new CesAppVersionSnapshotToolsClientFunctionResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
}

export class CesAppVersionSnapshotToolsClientFunctionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsClientFunctionOutputReference {
    return new CesAppVersionSnapshotToolsClientFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints {
}

export function cesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }

  // boost_amount - computed: true, optional: false, required: false
  public get boostAmount() {
    return this.getNumberAttribute('boost_amount');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec {
}

export function cesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_type - computed: true, optional: false, required: false
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }

  // control_points - computed: true, optional: false, required: false
  private _controlPoints = new CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList(this, "control_points", false);
  public get controlPoints() {
    return this._controlPoints;
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // interpolation_type - computed: true, optional: false, required: false
  public get interpolationType() {
    return this.getStringAttribute('interpolation_type');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecs {
}

export function cesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boost - computed: true, optional: false, required: false
  public get boost() {
    return this.getNumberAttribute('boost');
  }

  // boost_control_spec - computed: true, optional: false, required: false
  private _boostControlSpec = new CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecList(this, "boost_control_spec", false);
  public get boostControlSpec() {
    return this._boostControlSpec;
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpec {
}

export function cesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_boost_specs - computed: true, optional: false, required: false
  private _conditionBoostSpecs = new CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecConditionBoostSpecsList(this, "condition_boost_specs", false);
  public get conditionBoostSpecs() {
    return this._conditionBoostSpecs;
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolBoostSpecs {
}

export function cesAppVersionSnapshotToolsDataStoreToolBoostSpecsToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolBoostSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolBoostSpecsToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolBoostSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolBoostSpecsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolBoostSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolBoostSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_stores - computed: true, optional: false, required: false
  public get dataStores() {
    return this.getListAttribute('data_stores');
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new CesAppVersionSnapshotToolsDataStoreToolBoostSpecsSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolBoostSpecsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolBoostSpecsOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolBoostSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig {
}

export function cesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection - computed: true, optional: false, required: false
  public get collection() {
    return this.getStringAttribute('collection');
  }

  // collection_display_name - computed: true, optional: false, required: false
  public get collectionDisplayName() {
    return this.getStringAttribute('collection_display_name');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStore {
}

export function cesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_config - computed: true, optional: false, required: false
  private _connectorConfig = new CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList(this, "connector_config", false);
  public get connectorConfig() {
    return this._connectorConfig;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // document_processing_mode - computed: true, optional: false, required: false
  public get documentProcessingMode() {
    return this.getStringAttribute('document_processing_mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSources {
}

export function cesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_store - computed: true, optional: false, required: false
  private _dataStore = new CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesDataStoreList(this, "data_store", false);
  public get dataStore() {
    return this._dataStore;
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolEngineSource {
}

export function cesAppVersionSnapshotToolsDataStoreToolEngineSourceToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolEngineSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolEngineSourceToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolEngineSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolEngineSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolEngineSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolEngineSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_store_sources - computed: true, optional: false, required: false
  private _dataStoreSources = new CesAppVersionSnapshotToolsDataStoreToolEngineSourceDataStoreSourcesList(this, "data_store_sources", false);
  public get dataStoreSources() {
    return this._dataStoreSources;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolEngineSourceList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolEngineSourceOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolEngineSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfig {
}

export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // grounding_level - computed: true, optional: false, required: false
  public get groundingLevel() {
    return this.getNumberAttribute('grounding_level');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettings {
}

export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfig {
}

export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettings {
}

export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfig {
}

export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // model_settings - computed: true, optional: false, required: false
  private _modelSettings = new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigModelSettingsList(this, "model_settings", false);
  public get modelSettings() {
    return this._modelSettings;
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreToolModalityConfigs {
}

export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolModalityConfigsToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreToolModalityConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreToolModalityConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreToolModalityConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grounding_config - computed: true, optional: false, required: false
  private _groundingConfig = new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsGroundingConfigList(this, "grounding_config", false);
  public get groundingConfig() {
    return this._groundingConfig;
  }

  // modality_type - computed: true, optional: false, required: false
  public get modalityType() {
    return this.getStringAttribute('modality_type');
  }

  // rewriter_config - computed: true, optional: false, required: false
  private _rewriterConfig = new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsRewriterConfigList(this, "rewriter_config", false);
  public get rewriterConfig() {
    return this._rewriterConfig;
  }

  // summarization_config - computed: true, optional: false, required: false
  private _summarizationConfig = new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsSummarizationConfigList(this, "summarization_config", false);
  public get summarizationConfig() {
    return this._summarizationConfig;
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolModalityConfigsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolModalityConfigsOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsDataStoreTool {
}

export function cesAppVersionSnapshotToolsDataStoreToolToTerraform(struct?: CesAppVersionSnapshotToolsDataStoreTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsDataStoreToolToHclTerraform(struct?: CesAppVersionSnapshotToolsDataStoreTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsDataStoreToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsDataStoreTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsDataStoreTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boost_specs - computed: true, optional: false, required: false
  private _boostSpecs = new CesAppVersionSnapshotToolsDataStoreToolBoostSpecsList(this, "boost_specs", false);
  public get boostSpecs() {
    return this._boostSpecs;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // engine_source - computed: true, optional: false, required: false
  private _engineSource = new CesAppVersionSnapshotToolsDataStoreToolEngineSourceList(this, "engine_source", false);
  public get engineSource() {
    return this._engineSource;
  }

  // max_results - computed: true, optional: false, required: false
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }

  // modality_configs - computed: true, optional: false, required: false
  private _modalityConfigs = new CesAppVersionSnapshotToolsDataStoreToolModalityConfigsList(this, "modality_configs", false);
  public get modalityConfigs() {
    return this._modalityConfigs;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class CesAppVersionSnapshotToolsDataStoreToolList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsDataStoreToolOutputReference {
    return new CesAppVersionSnapshotToolsDataStoreToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsGoogleSearchTool {
}

export function cesAppVersionSnapshotToolsGoogleSearchToolToTerraform(struct?: CesAppVersionSnapshotToolsGoogleSearchTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsGoogleSearchToolToHclTerraform(struct?: CesAppVersionSnapshotToolsGoogleSearchTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsGoogleSearchToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsGoogleSearchTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsGoogleSearchTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclude_domains - computed: true, optional: false, required: false
  public get excludeDomains() {
    return this.getListAttribute('exclude_domains');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class CesAppVersionSnapshotToolsGoogleSearchToolList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsGoogleSearchToolOutputReference {
    return new CesAppVersionSnapshotToolsGoogleSearchToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfig {
}

export function cesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigToTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_secret_version - computed: true, optional: false, required: false
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // request_location - computed: true, optional: false, required: false
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
}

export class CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigOutputReference {
    return new CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfig {
}

export function cesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigToTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_version - computed: true, optional: false, required: false
  public get clientSecretVersion() {
    return this.getStringAttribute('client_secret_version');
  }

  // oauth_grant_type - computed: true, optional: false, required: false
  public get oauthGrantType() {
    return this.getStringAttribute('oauth_grant_type');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}

export class CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigOutputReference {
    return new CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfig {
}

export function cesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigToTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
}

export class CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference {
    return new CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig {
}

export function cesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference {
    return new CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsOpenApiToolApiAuthentication {
}

export function cesAppVersionSnapshotToolsOpenApiToolApiAuthenticationToTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolApiAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsOpenApiToolApiAuthenticationToHclTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolApiAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsOpenApiToolApiAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsOpenApiToolApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_config - computed: true, optional: false, required: false
  private _apiKeyConfig = new CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigList(this, "api_key_config", false);
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }

  // oauth_config - computed: true, optional: false, required: false
  private _oauthConfig = new CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigList(this, "oauth_config", false);
  public get oauthConfig() {
    return this._oauthConfig;
  }

  // service_account_auth_config - computed: true, optional: false, required: false
  private _serviceAccountAuthConfig = new CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigList(this, "service_account_auth_config", false);
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }

  // service_agent_id_token_auth_config - computed: true, optional: false, required: false
  private _serviceAgentIdTokenAuthConfig = new CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList(this, "service_agent_id_token_auth_config", false);
  public get serviceAgentIdTokenAuthConfig() {
    return this._serviceAgentIdTokenAuthConfig;
  }
}

export class CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOutputReference {
    return new CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfig {
}

export function cesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigToTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class CesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigOutputReference {
    return new CesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCerts {
}

export function cesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsToTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCerts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsToHclTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCerts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class CesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsOutputReference {
    return new CesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsOpenApiToolTlsConfig {
}

export function cesAppVersionSnapshotToolsOpenApiToolTlsConfigToTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsOpenApiToolTlsConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsOpenApiToolTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsOpenApiToolTlsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsOpenApiToolTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsOpenApiToolTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs - computed: true, optional: false, required: false
  private _caCerts = new CesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
}

export class CesAppVersionSnapshotToolsOpenApiToolTlsConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsOpenApiToolTlsConfigOutputReference {
    return new CesAppVersionSnapshotToolsOpenApiToolTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsOpenApiTool {
}

export function cesAppVersionSnapshotToolsOpenApiToolToTerraform(struct?: CesAppVersionSnapshotToolsOpenApiTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsOpenApiToolToHclTerraform(struct?: CesAppVersionSnapshotToolsOpenApiTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsOpenApiToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsOpenApiTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsOpenApiTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_authentication - computed: true, optional: false, required: false
  private _apiAuthentication = new CesAppVersionSnapshotToolsOpenApiToolApiAuthenticationList(this, "api_authentication", false);
  public get apiAuthentication() {
    return this._apiAuthentication;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ignore_unknown_fields - computed: true, optional: false, required: false
  public get ignoreUnknownFields() {
    return this.getBooleanAttribute('ignore_unknown_fields');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_api_schema - computed: true, optional: false, required: false
  public get openApiSchema() {
    return this.getStringAttribute('open_api_schema');
  }

  // service_directory_config - computed: true, optional: false, required: false
  private _serviceDirectoryConfig = new CesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigList(this, "service_directory_config", false);
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new CesAppVersionSnapshotToolsOpenApiToolTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class CesAppVersionSnapshotToolsOpenApiToolList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsOpenApiToolOutputReference {
    return new CesAppVersionSnapshotToolsOpenApiToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsPythonFunction {
}

export function cesAppVersionSnapshotToolsPythonFunctionToTerraform(struct?: CesAppVersionSnapshotToolsPythonFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsPythonFunctionToHclTerraform(struct?: CesAppVersionSnapshotToolsPythonFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsPythonFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsPythonFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsPythonFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class CesAppVersionSnapshotToolsPythonFunctionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsPythonFunctionOutputReference {
    return new CesAppVersionSnapshotToolsPythonFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsSystemTool {
}

export function cesAppVersionSnapshotToolsSystemToolToTerraform(struct?: CesAppVersionSnapshotToolsSystemTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsSystemToolToHclTerraform(struct?: CesAppVersionSnapshotToolsSystemTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsSystemToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsSystemTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsSystemTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class CesAppVersionSnapshotToolsSystemToolList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsSystemToolOutputReference {
    return new CesAppVersionSnapshotToolsSystemToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotTools {
}

export function cesAppVersionSnapshotToolsToTerraform(struct?: CesAppVersionSnapshotTools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsToHclTerraform(struct?: CesAppVersionSnapshotTools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotTools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotTools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_function - computed: true, optional: false, required: false
  private _clientFunction = new CesAppVersionSnapshotToolsClientFunctionList(this, "client_function", false);
  public get clientFunction() {
    return this._clientFunction;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_tool - computed: true, optional: false, required: false
  private _dataStoreTool = new CesAppVersionSnapshotToolsDataStoreToolList(this, "data_store_tool", false);
  public get dataStoreTool() {
    return this._dataStoreTool;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // execution_type - computed: true, optional: false, required: false
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }

  // generated_summary - computed: true, optional: false, required: false
  public get generatedSummary() {
    return this.getStringAttribute('generated_summary');
  }

  // google_search_tool - computed: true, optional: false, required: false
  private _googleSearchTool = new CesAppVersionSnapshotToolsGoogleSearchToolList(this, "google_search_tool", false);
  public get googleSearchTool() {
    return this._googleSearchTool;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_api_tool - computed: true, optional: false, required: false
  private _openApiTool = new CesAppVersionSnapshotToolsOpenApiToolList(this, "open_api_tool", false);
  public get openApiTool() {
    return this._openApiTool;
  }

  // python_function - computed: true, optional: false, required: false
  private _pythonFunction = new CesAppVersionSnapshotToolsPythonFunctionList(this, "python_function", false);
  public get pythonFunction() {
    return this._pythonFunction;
  }

  // system_tool - computed: true, optional: false, required: false
  private _systemTool = new CesAppVersionSnapshotToolsSystemToolList(this, "system_tool", false);
  public get systemTool() {
    return this._systemTool;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class CesAppVersionSnapshotToolsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsOutputReference {
    return new CesAppVersionSnapshotToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfig {
}

export function cesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigToTerraform(struct?: CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_secret_version - computed: true, optional: false, required: false
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // request_location - computed: true, optional: false, required: false
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
}

export class CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference {
    return new CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfig {
}

export function cesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigToTerraform(struct?: CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigToHclTerraform(struct?: CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

export class CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference {
    return new CesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
