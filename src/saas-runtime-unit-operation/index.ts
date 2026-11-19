/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SaasRuntimeUnitOperationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Annotations is an unstructured key-value map stored with a resource that
  * may be set by external tools to store and retrieve arbitrary metadata.
  * They are not queryable and should be preserved when modifying objects.
  * 
  * More info: https://kubernetes.io/docs/user-guide/annotations
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#annotations SaasRuntimeUnitOperation#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deletion_policy SaasRuntimeUnitOperation#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels on the resource, which can be used for categorization.
  * similar to Kubernetes resource labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#labels SaasRuntimeUnitOperation#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#location SaasRuntimeUnitOperation#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}
  */
  readonly project?: string;
  /**
  * The Unit a given UnitOperation will act upon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit SaasRuntimeUnitOperation#unit}
  */
  readonly unit: string;
  /**
  * The ID value for the new unit operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit_operation_id SaasRuntimeUnitOperation#unit_operation_id}
  */
  readonly unitOperationId: string;
  /**
  * If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED)
  * before completing the apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#wait_for_completion SaasRuntimeUnitOperation#wait_for_completion}
  */
  readonly waitForCompletion?: boolean | cdktn.IResolvable;
  /**
  * deprovision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deprovision SaasRuntimeUnitOperation#deprovision}
  */
  readonly deprovision?: SaasRuntimeUnitOperationDeprovision;
  /**
  * provision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#provision SaasRuntimeUnitOperation#provision}
  */
  readonly provision?: SaasRuntimeUnitOperationProvision;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#timeouts SaasRuntimeUnitOperation#timeouts}
  */
  readonly timeouts?: SaasRuntimeUnitOperationTimeouts;
  /**
  * upgrade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#upgrade SaasRuntimeUnitOperation#upgrade}
  */
  readonly upgrade?: SaasRuntimeUnitOperationUpgrade;
}
export interface SaasRuntimeUnitOperationConditions {
}

export function saasRuntimeUnitOperationConditionsToTerraform(struct?: SaasRuntimeUnitOperationConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function saasRuntimeUnitOperationConditionsToHclTerraform(struct?: SaasRuntimeUnitOperationConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SaasRuntimeUnitOperationConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SaasRuntimeUnitOperationConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitOperationConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SaasRuntimeUnitOperationConditionsList extends cdktn.ComplexList {

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
  public get(index: number): SaasRuntimeUnitOperationConditionsOutputReference {
    return new SaasRuntimeUnitOperationConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaasRuntimeUnitOperationDeprovision {
}

export function saasRuntimeUnitOperationDeprovisionToTerraform(struct?: SaasRuntimeUnitOperationDeprovisionOutputReference | SaasRuntimeUnitOperationDeprovision): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function saasRuntimeUnitOperationDeprovisionToHclTerraform(struct?: SaasRuntimeUnitOperationDeprovisionOutputReference | SaasRuntimeUnitOperationDeprovision): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SaasRuntimeUnitOperationDeprovisionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeUnitOperationDeprovision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitOperationDeprovision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SaasRuntimeUnitOperationProvisionInputVariables {
  /**
  * Name of a supported variable type. Supported types are string, int, bool.
  * Possible values:
  * STRING
  * INT
  * BOOL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}
  */
  readonly type?: string;
  /**
  * String encoded value for the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}
  */
  readonly value?: string;
  /**
  * Name of the variable from actuation configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}
  */
  readonly variable: string;
}

export function saasRuntimeUnitOperationProvisionInputVariablesToTerraform(struct?: SaasRuntimeUnitOperationProvisionInputVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
    variable: cdktn.stringToTerraform(struct!.variable),
  }
}


export function saasRuntimeUnitOperationProvisionInputVariablesToHclTerraform(struct?: SaasRuntimeUnitOperationProvisionInputVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktn.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitOperationProvisionInputVariablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SaasRuntimeUnitOperationProvisionInputVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitOperationProvisionInputVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
      this._variable = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
      this._variable = value.variable;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // variable - computed: false, optional: false, required: true
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class SaasRuntimeUnitOperationProvisionInputVariablesList extends cdktn.ComplexList {
  public internalValue? : SaasRuntimeUnitOperationProvisionInputVariables[] | cdktn.IResolvable

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
  public get(index: number): SaasRuntimeUnitOperationProvisionInputVariablesOutputReference {
    return new SaasRuntimeUnitOperationProvisionInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaasRuntimeUnitOperationProvision {
  /**
  * Reference to the Release object to use for the Unit. (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}
  */
  readonly release?: string;
  /**
  * input_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}
  */
  readonly inputVariables?: SaasRuntimeUnitOperationProvisionInputVariables[] | cdktn.IResolvable;
}

export function saasRuntimeUnitOperationProvisionToTerraform(struct?: SaasRuntimeUnitOperationProvisionOutputReference | SaasRuntimeUnitOperationProvision): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    release: cdktn.stringToTerraform(struct!.release),
    input_variables: cdktn.listMapper(saasRuntimeUnitOperationProvisionInputVariablesToTerraform, true)(struct!.inputVariables),
  }
}


export function saasRuntimeUnitOperationProvisionToHclTerraform(struct?: SaasRuntimeUnitOperationProvisionOutputReference | SaasRuntimeUnitOperationProvision): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    release: {
      value: cdktn.stringToHclTerraform(struct!.release),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_variables: {
      value: cdktn.listMapperHcl(saasRuntimeUnitOperationProvisionInputVariablesToHclTerraform, true)(struct!.inputVariables),
      isBlock: true,
      type: "list",
      storageClassType: "SaasRuntimeUnitOperationProvisionInputVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitOperationProvisionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeUnitOperationProvision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._release !== undefined) {
      hasAnyValues = true;
      internalValueResult.release = this._release;
    }
    if (this._inputVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariables = this._inputVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitOperationProvision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._release = undefined;
      this._inputVariables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._release = value.release;
      this._inputVariables.internalValue = value.inputVariables;
    }
  }

  // release - computed: false, optional: true, required: false
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  public resetRelease() {
    this._release = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // input_variables - computed: false, optional: true, required: false
  private _inputVariables = new SaasRuntimeUnitOperationProvisionInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }
  public putInputVariables(value: SaasRuntimeUnitOperationProvisionInputVariables[] | cdktn.IResolvable) {
    this._inputVariables.internalValue = value;
  }
  public resetInputVariables() {
    this._inputVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariablesInput() {
    return this._inputVariables.internalValue;
  }
}
export interface SaasRuntimeUnitOperationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}
  */
  readonly update?: string;
}

export function saasRuntimeUnitOperationTimeoutsToTerraform(struct?: SaasRuntimeUnitOperationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function saasRuntimeUnitOperationTimeoutsToHclTerraform(struct?: SaasRuntimeUnitOperationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitOperationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SaasRuntimeUnitOperationTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitOperationTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface SaasRuntimeUnitOperationUpgradeInputVariables {
  /**
  * Name of a supported variable type. Supported types are string, int, bool.
  * Possible values:
  * STRING
  * INT
  * BOOL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}
  */
  readonly type?: string;
  /**
  * String encoded value for the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}
  */
  readonly value?: string;
  /**
  * Name of the variable from actuation configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}
  */
  readonly variable: string;
}

export function saasRuntimeUnitOperationUpgradeInputVariablesToTerraform(struct?: SaasRuntimeUnitOperationUpgradeInputVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
    variable: cdktn.stringToTerraform(struct!.variable),
  }
}


export function saasRuntimeUnitOperationUpgradeInputVariablesToHclTerraform(struct?: SaasRuntimeUnitOperationUpgradeInputVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktn.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SaasRuntimeUnitOperationUpgradeInputVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitOperationUpgradeInputVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
      this._variable = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
      this._variable = value.variable;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // variable - computed: false, optional: false, required: true
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class SaasRuntimeUnitOperationUpgradeInputVariablesList extends cdktn.ComplexList {
  public internalValue? : SaasRuntimeUnitOperationUpgradeInputVariables[] | cdktn.IResolvable

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
  public get(index: number): SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference {
    return new SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaasRuntimeUnitOperationUpgrade {
  /**
  * Reference to the Release object to use for the Unit. (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}
  */
  readonly release?: string;
  /**
  * input_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}
  */
  readonly inputVariables?: SaasRuntimeUnitOperationUpgradeInputVariables[] | cdktn.IResolvable;
}

export function saasRuntimeUnitOperationUpgradeToTerraform(struct?: SaasRuntimeUnitOperationUpgradeOutputReference | SaasRuntimeUnitOperationUpgrade): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    release: cdktn.stringToTerraform(struct!.release),
    input_variables: cdktn.listMapper(saasRuntimeUnitOperationUpgradeInputVariablesToTerraform, true)(struct!.inputVariables),
  }
}


export function saasRuntimeUnitOperationUpgradeToHclTerraform(struct?: SaasRuntimeUnitOperationUpgradeOutputReference | SaasRuntimeUnitOperationUpgrade): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    release: {
      value: cdktn.stringToHclTerraform(struct!.release),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_variables: {
      value: cdktn.listMapperHcl(saasRuntimeUnitOperationUpgradeInputVariablesToHclTerraform, true)(struct!.inputVariables),
      isBlock: true,
      type: "list",
      storageClassType: "SaasRuntimeUnitOperationUpgradeInputVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitOperationUpgradeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeUnitOperationUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._release !== undefined) {
      hasAnyValues = true;
      internalValueResult.release = this._release;
    }
    if (this._inputVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariables = this._inputVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitOperationUpgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._release = undefined;
      this._inputVariables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._release = value.release;
      this._inputVariables.internalValue = value.inputVariables;
    }
  }

  // release - computed: false, optional: true, required: false
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  public resetRelease() {
    this._release = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // input_variables - computed: false, optional: true, required: false
  private _inputVariables = new SaasRuntimeUnitOperationUpgradeInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }
  public putInputVariables(value: SaasRuntimeUnitOperationUpgradeInputVariables[] | cdktn.IResolvable) {
    this._inputVariables.internalValue = value;
  }
  public resetInputVariables() {
    this._inputVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariablesInput() {
    return this._inputVariables.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation google_saas_runtime_unit_operation}
*/
export class SaasRuntimeUnitOperation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_saas_runtime_unit_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SaasRuntimeUnitOperation to import
  * @param importFromId The id of the existing SaasRuntimeUnitOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SaasRuntimeUnitOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_saas_runtime_unit_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation google_saas_runtime_unit_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SaasRuntimeUnitOperationConfig
  */
  public constructor(scope: Construct, id: string, config: SaasRuntimeUnitOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_saas_runtime_unit_operation',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.12.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._unit = config.unit;
    this._unitOperationId = config.unitOperationId;
    this._waitForCompletion = config.waitForCompletion;
    this._deprovision.internalValue = config.deprovision;
    this._provision.internalValue = config.provision;
    this._timeouts.internalValue = config.timeouts;
    this._upgrade.internalValue = config.upgrade;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new SaasRuntimeUnitOperationConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktn.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // engine_state - computed: true, optional: false, required: false
  public get engineState() {
    return this.getStringAttribute('engine_state');
  }

  // error_category - computed: true, optional: false, required: false
  public get errorCategory() {
    return this.getStringAttribute('error_category');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // unit_operation_id - computed: false, optional: false, required: true
  private _unitOperationId?: string; 
  public get unitOperationId() {
    return this.getStringAttribute('unit_operation_id');
  }
  public set unitOperationId(value: string) {
    this._unitOperationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitOperationIdInput() {
    return this._unitOperationId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // wait_for_completion - computed: false, optional: true, required: false
  private _waitForCompletion?: boolean | cdktn.IResolvable; 
  public get waitForCompletion() {
    return this.getBooleanAttribute('wait_for_completion');
  }
  public set waitForCompletion(value: boolean | cdktn.IResolvable) {
    this._waitForCompletion = value;
  }
  public resetWaitForCompletion() {
    this._waitForCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCompletionInput() {
    return this._waitForCompletion;
  }

  // deprovision - computed: false, optional: true, required: false
  private _deprovision = new SaasRuntimeUnitOperationDeprovisionOutputReference(this, "deprovision");
  public get deprovision() {
    return this._deprovision;
  }
  public putDeprovision(value: SaasRuntimeUnitOperationDeprovision) {
    this._deprovision.internalValue = value;
  }
  public resetDeprovision() {
    this._deprovision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprovisionInput() {
    return this._deprovision.internalValue;
  }

  // provision - computed: false, optional: true, required: false
  private _provision = new SaasRuntimeUnitOperationProvisionOutputReference(this, "provision");
  public get provision() {
    return this._provision;
  }
  public putProvision(value: SaasRuntimeUnitOperationProvision) {
    this._provision.internalValue = value;
  }
  public resetProvision() {
    this._provision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionInput() {
    return this._provision.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SaasRuntimeUnitOperationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SaasRuntimeUnitOperationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade - computed: false, optional: true, required: false
  private _upgrade = new SaasRuntimeUnitOperationUpgradeOutputReference(this, "upgrade");
  public get upgrade() {
    return this._upgrade;
  }
  public putUpgrade(value: SaasRuntimeUnitOperationUpgrade) {
    this._upgrade.internalValue = value;
  }
  public resetUpgrade() {
    this._upgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeInput() {
    return this._upgrade.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktn.hashMapper(cdktn.stringToTerraform)(this._annotations),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      unit: cdktn.stringToTerraform(this._unit),
      unit_operation_id: cdktn.stringToTerraform(this._unitOperationId),
      wait_for_completion: cdktn.booleanToTerraform(this._waitForCompletion),
      deprovision: saasRuntimeUnitOperationDeprovisionToTerraform(this._deprovision.internalValue),
      provision: saasRuntimeUnitOperationProvisionToTerraform(this._provision.internalValue),
      timeouts: saasRuntimeUnitOperationTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade: saasRuntimeUnitOperationUpgradeToTerraform(this._upgrade.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktn.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_operation_id: {
        value: cdktn.stringToHclTerraform(this._unitOperationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_completion: {
        value: cdktn.booleanToHclTerraform(this._waitForCompletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deprovision: {
        value: saasRuntimeUnitOperationDeprovisionToHclTerraform(this._deprovision.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeUnitOperationDeprovisionList",
      },
      provision: {
        value: saasRuntimeUnitOperationProvisionToHclTerraform(this._provision.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeUnitOperationProvisionList",
      },
      timeouts: {
        value: saasRuntimeUnitOperationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SaasRuntimeUnitOperationTimeouts",
      },
      upgrade: {
        value: saasRuntimeUnitOperationUpgradeToHclTerraform(this._upgrade.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeUnitOperationUpgradeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
