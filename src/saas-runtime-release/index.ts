/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SaasRuntimeReleaseConfig extends cdktn.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#annotations SaasRuntimeRelease#annotations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#deletion_policy SaasRuntimeRelease#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#id SaasRuntimeRelease#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#labels SaasRuntimeRelease#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#location SaasRuntimeRelease#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#project SaasRuntimeRelease#project}
  */
  readonly project?: string;
  /**
  * The ID value for the new release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#release_id SaasRuntimeRelease#release_id}
  */
  readonly releaseId: string;
  /**
  * Reference to the UnitKind this Release corresponds to (required and
  * immutable once created).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#unit_kind SaasRuntimeRelease#unit_kind}
  */
  readonly unitKind: string;
  /**
  * blueprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#blueprint SaasRuntimeRelease#blueprint}
  */
  readonly blueprint?: SaasRuntimeReleaseBlueprint;
  /**
  * input_variable_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#input_variable_defaults SaasRuntimeRelease#input_variable_defaults}
  */
  readonly inputVariableDefaults?: SaasRuntimeReleaseInputVariableDefaults[] | cdktn.IResolvable;
  /**
  * release_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#release_requirements SaasRuntimeRelease#release_requirements}
  */
  readonly releaseRequirements?: SaasRuntimeReleaseReleaseRequirements;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#timeouts SaasRuntimeRelease#timeouts}
  */
  readonly timeouts?: SaasRuntimeReleaseTimeouts;
}
export interface SaasRuntimeReleaseApplicationTemplateComponentCompositeRef {
}

export function saasRuntimeReleaseApplicationTemplateComponentCompositeRefToTerraform(struct?: SaasRuntimeReleaseApplicationTemplateComponentCompositeRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function saasRuntimeReleaseApplicationTemplateComponentCompositeRefToHclTerraform(struct?: SaasRuntimeReleaseApplicationTemplateComponentCompositeRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SaasRuntimeReleaseApplicationTemplateComponentCompositeRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeReleaseApplicationTemplateComponentCompositeRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_template - computed: true, optional: false, required: false
  public get applicationTemplate() {
    return this.getStringAttribute('application_template');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // sync_operation - computed: true, optional: false, required: false
  public get syncOperation() {
    return this.getStringAttribute('sync_operation');
  }
}

export class SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList extends cdktn.ComplexList {

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
  public get(index: number): SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference {
    return new SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaasRuntimeReleaseApplicationTemplateComponent {
}

export function saasRuntimeReleaseApplicationTemplateComponentToTerraform(struct?: SaasRuntimeReleaseApplicationTemplateComponent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function saasRuntimeReleaseApplicationTemplateComponentToHclTerraform(struct?: SaasRuntimeReleaseApplicationTemplateComponent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SaasRuntimeReleaseApplicationTemplateComponentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SaasRuntimeReleaseApplicationTemplateComponent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeReleaseApplicationTemplateComponent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // composite_ref - computed: true, optional: false, required: false
  private _compositeRef = new SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList(this, "composite_ref", false);
  public get compositeRef() {
    return this._compositeRef;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }
}

export class SaasRuntimeReleaseApplicationTemplateComponentList extends cdktn.ComplexList {

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
  public get(index: number): SaasRuntimeReleaseApplicationTemplateComponentOutputReference {
    return new SaasRuntimeReleaseApplicationTemplateComponentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaasRuntimeReleaseInputVariables {
}

export function saasRuntimeReleaseInputVariablesToTerraform(struct?: SaasRuntimeReleaseInputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function saasRuntimeReleaseInputVariablesToHclTerraform(struct?: SaasRuntimeReleaseInputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SaasRuntimeReleaseInputVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SaasRuntimeReleaseInputVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeReleaseInputVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // variable - computed: true, optional: false, required: false
  public get variable() {
    return this.getStringAttribute('variable');
  }
}

export class SaasRuntimeReleaseInputVariablesList extends cdktn.ComplexList {

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
  public get(index: number): SaasRuntimeReleaseInputVariablesOutputReference {
    return new SaasRuntimeReleaseInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaasRuntimeReleaseOutputVariables {
}

export function saasRuntimeReleaseOutputVariablesToTerraform(struct?: SaasRuntimeReleaseOutputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function saasRuntimeReleaseOutputVariablesToHclTerraform(struct?: SaasRuntimeReleaseOutputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SaasRuntimeReleaseOutputVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SaasRuntimeReleaseOutputVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeReleaseOutputVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // variable - computed: true, optional: false, required: false
  public get variable() {
    return this.getStringAttribute('variable');
  }
}

export class SaasRuntimeReleaseOutputVariablesList extends cdktn.ComplexList {

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
  public get(index: number): SaasRuntimeReleaseOutputVariablesOutputReference {
    return new SaasRuntimeReleaseOutputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaasRuntimeReleaseBlueprint {
  /**
  * URI to a blueprint used by the Unit (required unless unitKind or release is
  * set).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#package SaasRuntimeRelease#package}
  */
  readonly package?: string;
}

export function saasRuntimeReleaseBlueprintToTerraform(struct?: SaasRuntimeReleaseBlueprintOutputReference | SaasRuntimeReleaseBlueprint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
  }
}


export function saasRuntimeReleaseBlueprintToHclTerraform(struct?: SaasRuntimeReleaseBlueprintOutputReference | SaasRuntimeReleaseBlueprint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    package: {
      value: cdktn.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeReleaseBlueprintOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeReleaseBlueprint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeReleaseBlueprint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._package = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._package = value.package;
    }
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // package - computed: false, optional: true, required: false
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  public resetPackage() {
    this._package = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface SaasRuntimeReleaseInputVariableDefaults {
  /**
  * Name of a supported variable type. Supported types are STRING, INT, BOOL. Possible values: ["TYPE_UNSPECIFIED", "STRING", "INT", "BOOL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#type SaasRuntimeRelease#type}
  */
  readonly type?: string;
  /**
  * String encoded value for the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#value SaasRuntimeRelease#value}
  */
  readonly value?: string;
  /**
  * Name of the variable from actuation configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#variable SaasRuntimeRelease#variable}
  */
  readonly variable: string;
}

export function saasRuntimeReleaseInputVariableDefaultsToTerraform(struct?: SaasRuntimeReleaseInputVariableDefaults | cdktn.IResolvable): any {
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


export function saasRuntimeReleaseInputVariableDefaultsToHclTerraform(struct?: SaasRuntimeReleaseInputVariableDefaults | cdktn.IResolvable): any {
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

export class SaasRuntimeReleaseInputVariableDefaultsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SaasRuntimeReleaseInputVariableDefaults | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SaasRuntimeReleaseInputVariableDefaults | cdktn.IResolvable | undefined) {
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

export class SaasRuntimeReleaseInputVariableDefaultsList extends cdktn.ComplexList {
  public internalValue? : SaasRuntimeReleaseInputVariableDefaults[] | cdktn.IResolvable

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
  public get(index: number): SaasRuntimeReleaseInputVariableDefaultsOutputReference {
    return new SaasRuntimeReleaseInputVariableDefaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaasRuntimeReleaseReleaseRequirements {
  /**
  * A list of releases from which a unit can be upgraded to this one
  * (optional). If left empty no constraints will be applied. When provided,
  * unit upgrade requests to this release will check and enforce this
  * constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#upgradeable_from_releases SaasRuntimeRelease#upgradeable_from_releases}
  */
  readonly upgradeableFromReleases?: string[];
}

export function saasRuntimeReleaseReleaseRequirementsToTerraform(struct?: SaasRuntimeReleaseReleaseRequirementsOutputReference | SaasRuntimeReleaseReleaseRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    upgradeable_from_releases: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.upgradeableFromReleases),
  }
}


export function saasRuntimeReleaseReleaseRequirementsToHclTerraform(struct?: SaasRuntimeReleaseReleaseRequirementsOutputReference | SaasRuntimeReleaseReleaseRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    upgradeable_from_releases: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.upgradeableFromReleases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeReleaseReleaseRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeReleaseReleaseRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upgradeableFromReleases !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeableFromReleases = this._upgradeableFromReleases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeReleaseReleaseRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._upgradeableFromReleases = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._upgradeableFromReleases = value.upgradeableFromReleases;
    }
  }

  // upgradeable_from_releases - computed: false, optional: true, required: false
  private _upgradeableFromReleases?: string[]; 
  public get upgradeableFromReleases() {
    return this.getListAttribute('upgradeable_from_releases');
  }
  public set upgradeableFromReleases(value: string[]) {
    this._upgradeableFromReleases = value;
  }
  public resetUpgradeableFromReleases() {
    this._upgradeableFromReleases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeableFromReleasesInput() {
    return this._upgradeableFromReleases;
  }
}
export interface SaasRuntimeReleaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#create SaasRuntimeRelease#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#delete SaasRuntimeRelease#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#update SaasRuntimeRelease#update}
  */
  readonly update?: string;
}

export function saasRuntimeReleaseTimeoutsToTerraform(struct?: SaasRuntimeReleaseTimeouts | cdktn.IResolvable): any {
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


export function saasRuntimeReleaseTimeoutsToHclTerraform(struct?: SaasRuntimeReleaseTimeouts | cdktn.IResolvable): any {
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

export class SaasRuntimeReleaseTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SaasRuntimeReleaseTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SaasRuntimeReleaseTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release google_saas_runtime_release}
*/
export class SaasRuntimeRelease extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_saas_runtime_release";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SaasRuntimeRelease resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SaasRuntimeRelease to import
  * @param importFromId The id of the existing SaasRuntimeRelease that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SaasRuntimeRelease to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_saas_runtime_release", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release google_saas_runtime_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SaasRuntimeReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: SaasRuntimeReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'google_saas_runtime_release',
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
    this._releaseId = config.releaseId;
    this._unitKind = config.unitKind;
    this._blueprint.internalValue = config.blueprint;
    this._inputVariableDefaults.internalValue = config.inputVariableDefaults;
    this._releaseRequirements.internalValue = config.releaseRequirements;
    this._timeouts.internalValue = config.timeouts;
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

  // application_template_component - computed: true, optional: false, required: false
  private _applicationTemplateComponent = new SaasRuntimeReleaseApplicationTemplateComponentList(this, "application_template_component", false);
  public get applicationTemplateComponent() {
    return this._applicationTemplateComponent;
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

  // input_variables - computed: true, optional: false, required: false
  private _inputVariables = new SaasRuntimeReleaseInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
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

  // output_variables - computed: true, optional: false, required: false
  private _outputVariables = new SaasRuntimeReleaseOutputVariablesList(this, "output_variables", false);
  public get outputVariables() {
    return this._outputVariables;
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

  // release_id - computed: false, optional: false, required: true
  private _releaseId?: string; 
  public get releaseId() {
    return this.getStringAttribute('release_id');
  }
  public set releaseId(value: string) {
    this._releaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseIdInput() {
    return this._releaseId;
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

  // unit_kind - computed: false, optional: false, required: true
  private _unitKind?: string; 
  public get unitKind() {
    return this.getStringAttribute('unit_kind');
  }
  public set unitKind(value: string) {
    this._unitKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitKindInput() {
    return this._unitKind;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // blueprint - computed: false, optional: true, required: false
  private _blueprint = new SaasRuntimeReleaseBlueprintOutputReference(this, "blueprint");
  public get blueprint() {
    return this._blueprint;
  }
  public putBlueprint(value: SaasRuntimeReleaseBlueprint) {
    this._blueprint.internalValue = value;
  }
  public resetBlueprint() {
    this._blueprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint.internalValue;
  }

  // input_variable_defaults - computed: false, optional: true, required: false
  private _inputVariableDefaults = new SaasRuntimeReleaseInputVariableDefaultsList(this, "input_variable_defaults", false);
  public get inputVariableDefaults() {
    return this._inputVariableDefaults;
  }
  public putInputVariableDefaults(value: SaasRuntimeReleaseInputVariableDefaults[] | cdktn.IResolvable) {
    this._inputVariableDefaults.internalValue = value;
  }
  public resetInputVariableDefaults() {
    this._inputVariableDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariableDefaultsInput() {
    return this._inputVariableDefaults.internalValue;
  }

  // release_requirements - computed: false, optional: true, required: false
  private _releaseRequirements = new SaasRuntimeReleaseReleaseRequirementsOutputReference(this, "release_requirements");
  public get releaseRequirements() {
    return this._releaseRequirements;
  }
  public putReleaseRequirements(value: SaasRuntimeReleaseReleaseRequirements) {
    this._releaseRequirements.internalValue = value;
  }
  public resetReleaseRequirements() {
    this._releaseRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseRequirementsInput() {
    return this._releaseRequirements.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SaasRuntimeReleaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SaasRuntimeReleaseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      release_id: cdktn.stringToTerraform(this._releaseId),
      unit_kind: cdktn.stringToTerraform(this._unitKind),
      blueprint: saasRuntimeReleaseBlueprintToTerraform(this._blueprint.internalValue),
      input_variable_defaults: cdktn.listMapper(saasRuntimeReleaseInputVariableDefaultsToTerraform, true)(this._inputVariableDefaults.internalValue),
      release_requirements: saasRuntimeReleaseReleaseRequirementsToTerraform(this._releaseRequirements.internalValue),
      timeouts: saasRuntimeReleaseTimeoutsToTerraform(this._timeouts.internalValue),
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
      release_id: {
        value: cdktn.stringToHclTerraform(this._releaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_kind: {
        value: cdktn.stringToHclTerraform(this._unitKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blueprint: {
        value: saasRuntimeReleaseBlueprintToHclTerraform(this._blueprint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeReleaseBlueprintList",
      },
      input_variable_defaults: {
        value: cdktn.listMapperHcl(saasRuntimeReleaseInputVariableDefaultsToHclTerraform, true)(this._inputVariableDefaults.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeReleaseInputVariableDefaultsList",
      },
      release_requirements: {
        value: saasRuntimeReleaseReleaseRequirementsToHclTerraform(this._releaseRequirements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeReleaseReleaseRequirementsList",
      },
      timeouts: {
        value: saasRuntimeReleaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SaasRuntimeReleaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
