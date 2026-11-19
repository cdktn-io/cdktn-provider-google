/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SaasRuntimeUnitKindConfig extends cdktn.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#annotations SaasRuntimeUnitKind#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * A reference to the Release object to use as default for creating new units
  * of this UnitKind.
  * If not specified, a new unit must explicitly reference which release to use
  * for its creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#default_release SaasRuntimeUnitKind#default_release}
  */
  readonly defaultRelease?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#deletion_policy SaasRuntimeUnitKind#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#labels SaasRuntimeUnitKind#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#location SaasRuntimeUnitKind#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}
  */
  readonly project?: string;
  /**
  * A reference to the Saas that defines the product (managed service) that
  * the producer wants to manage with App Lifecycle Manager. Part of the App Lifecycle Manager
  * common data model. Immutable once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#saas SaasRuntimeUnitKind#saas}
  */
  readonly saas: string;
  /**
  * The ID value for the new unit kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind_id SaasRuntimeUnitKind#unit_kind_id}
  */
  readonly unitKindId: string;
  /**
  * app_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#app_params SaasRuntimeUnitKind#app_params}
  */
  readonly appParams?: SaasRuntimeUnitKindAppParams;
  /**
  * application_template_component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template_component SaasRuntimeUnitKind#application_template_component}
  */
  readonly applicationTemplateComponent?: SaasRuntimeUnitKindApplicationTemplateComponent;
  /**
  * dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependencies SaasRuntimeUnitKind#dependencies}
  */
  readonly dependencies?: SaasRuntimeUnitKindDependencies[] | cdktn.IResolvable;
  /**
  * input_variable_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable_mappings SaasRuntimeUnitKind#input_variable_mappings}
  */
  readonly inputVariableMappings?: SaasRuntimeUnitKindInputVariableMappings[] | cdktn.IResolvable;
  /**
  * output_variable_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable_mappings SaasRuntimeUnitKind#output_variable_mappings}
  */
  readonly outputVariableMappings?: SaasRuntimeUnitKindOutputVariableMappings[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#timeouts SaasRuntimeUnitKind#timeouts}
  */
  readonly timeouts?: SaasRuntimeUnitKindTimeouts;
}
export interface SaasRuntimeUnitKindAppParamsScope {
  /**
  * Scope type.
  * Possible values:
  * TYPE_REGIONAL
  * TYPE_GLOBAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#type SaasRuntimeUnitKind#type}
  */
  readonly type: string;
}

export function saasRuntimeUnitKindAppParamsScopeToTerraform(struct?: SaasRuntimeUnitKindAppParamsScopeOutputReference | SaasRuntimeUnitKindAppParamsScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function saasRuntimeUnitKindAppParamsScopeToHclTerraform(struct?: SaasRuntimeUnitKindAppParamsScopeOutputReference | SaasRuntimeUnitKindAppParamsScope): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitKindAppParamsScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeUnitKindAppParamsScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitKindAppParamsScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SaasRuntimeUnitKindAppParams {
  /**
  * Grouping used to construct the name of the App Hub Application.
  * Multiple UnitKinds can specify the same group to use the same
  * Application across their respective Units. Corresponds to the
  * app_boundary_id in the ADC composite ApplicationTemplate. If empty,
  * the service creates no App Hub application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#group SaasRuntimeUnitKind#group}
  */
  readonly group?: string;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#scope SaasRuntimeUnitKind#scope}
  */
  readonly scope?: SaasRuntimeUnitKindAppParamsScope;
}

export function saasRuntimeUnitKindAppParamsToTerraform(struct?: SaasRuntimeUnitKindAppParamsOutputReference | SaasRuntimeUnitKindAppParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group: cdktn.stringToTerraform(struct!.group),
    scope: saasRuntimeUnitKindAppParamsScopeToTerraform(struct!.scope),
  }
}


export function saasRuntimeUnitKindAppParamsToHclTerraform(struct?: SaasRuntimeUnitKindAppParamsOutputReference | SaasRuntimeUnitKindAppParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group: {
      value: cdktn.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: saasRuntimeUnitKindAppParamsScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "SaasRuntimeUnitKindAppParamsScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitKindAppParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeUnitKindAppParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitKindAppParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group = undefined;
      this._scope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group = value.group;
      this._scope.internalValue = value.scope;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new SaasRuntimeUnitKindAppParamsScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: SaasRuntimeUnitKindAppParamsScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}
export interface SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef {
  /**
  * Reference to the ApplicationTemplate resource, in the format
  * 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template SaasRuntimeUnitKind#application_template}
  */
  readonly applicationTemplate: string;
  /**
  * Revision of the ApplicationTemplate, as a full resource name
  * prefixed by 'application_template'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}
  */
  readonly revision?: string;
}

export function saasRuntimeUnitKindApplicationTemplateComponentCompositeRefToTerraform(struct?: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference | SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_template: cdktn.stringToTerraform(struct!.applicationTemplate),
    revision: cdktn.stringToTerraform(struct!.revision),
  }
}


export function saasRuntimeUnitKindApplicationTemplateComponentCompositeRefToHclTerraform(struct?: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference | SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_template: {
      value: cdktn.stringToHclTerraform(struct!.applicationTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktn.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationTemplate = this._applicationTemplate;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationTemplate = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationTemplate = value.applicationTemplate;
      this._revision = value.revision;
    }
  }

  // application_template - computed: false, optional: false, required: true
  private _applicationTemplate?: string; 
  public get applicationTemplate() {
    return this.getStringAttribute('application_template');
  }
  public set applicationTemplate(value: string) {
    this._applicationTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTemplateInput() {
    return this._applicationTemplate;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // sync_operation - computed: true, optional: false, required: false
  public get syncOperation() {
    return this.getStringAttribute('sync_operation');
  }
}
export interface SaasRuntimeUnitKindApplicationTemplateComponent {
  /**
  * Name of the component in the composite ApplicationTemplate (the root
  * module ID, e.g. a composite component ID or 'native-components').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#component SaasRuntimeUnitKind#component}
  */
  readonly component?: string;
  /**
  * Revision of the component. If the component does not have a revision,
  * this is the revision of the composite ApplicationTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}
  */
  readonly revision?: string;
  /**
  * composite_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#composite_ref SaasRuntimeUnitKind#composite_ref}
  */
  readonly compositeRef?: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef;
}

export function saasRuntimeUnitKindApplicationTemplateComponentToTerraform(struct?: SaasRuntimeUnitKindApplicationTemplateComponentOutputReference | SaasRuntimeUnitKindApplicationTemplateComponent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    component: cdktn.stringToTerraform(struct!.component),
    revision: cdktn.stringToTerraform(struct!.revision),
    composite_ref: saasRuntimeUnitKindApplicationTemplateComponentCompositeRefToTerraform(struct!.compositeRef),
  }
}


export function saasRuntimeUnitKindApplicationTemplateComponentToHclTerraform(struct?: SaasRuntimeUnitKindApplicationTemplateComponentOutputReference | SaasRuntimeUnitKindApplicationTemplateComponent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    component: {
      value: cdktn.stringToHclTerraform(struct!.component),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktn.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    composite_ref: {
      value: saasRuntimeUnitKindApplicationTemplateComponentCompositeRefToHclTerraform(struct!.compositeRef),
      isBlock: true,
      type: "list",
      storageClassType: "SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitKindApplicationTemplateComponentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeUnitKindApplicationTemplateComponent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._compositeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeRef = this._compositeRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitKindApplicationTemplateComponent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._component = undefined;
      this._revision = undefined;
      this._compositeRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._component = value.component;
      this._revision = value.revision;
      this._compositeRef.internalValue = value.compositeRef;
    }
  }

  // component - computed: false, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // composite_ref - computed: false, optional: true, required: false
  private _compositeRef = new SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference(this, "composite_ref");
  public get compositeRef() {
    return this._compositeRef;
  }
  public putCompositeRef(value: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef) {
    this._compositeRef.internalValue = value;
  }
  public resetCompositeRef() {
    this._compositeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeRefInput() {
    return this._compositeRef.internalValue;
  }
}
export interface SaasRuntimeUnitKindDependencies {
  /**
  * An alias for the dependency. Used for input variable mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#alias SaasRuntimeUnitKind#alias}
  */
  readonly alias: string;
  /**
  * The unit kind of the dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind SaasRuntimeUnitKind#unit_kind}
  */
  readonly unitKind: string;
}

export function saasRuntimeUnitKindDependenciesToTerraform(struct?: SaasRuntimeUnitKindDependencies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    unit_kind: cdktn.stringToTerraform(struct!.unitKind),
  }
}


export function saasRuntimeUnitKindDependenciesToHclTerraform(struct?: SaasRuntimeUnitKindDependencies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_kind: {
      value: cdktn.stringToHclTerraform(struct!.unitKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitKindDependenciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SaasRuntimeUnitKindDependencies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._unitKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitKind = this._unitKind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitKindDependencies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._unitKind = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._unitKind = value.unitKind;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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
}

export class SaasRuntimeUnitKindDependenciesList extends cdktn.ComplexList {
  public internalValue? : SaasRuntimeUnitKindDependencies[] | cdktn.IResolvable

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
  public get(index: number): SaasRuntimeUnitKindDependenciesOutputReference {
    return new SaasRuntimeUnitKindDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaasRuntimeUnitKindInputVariableMappingsFrom {
  /**
  * Alias of the dependency that the outputVariable will pass its value to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}
  */
  readonly dependency: string;
  /**
  * Name of the outputVariable on the dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}
  */
  readonly outputVariable: string;
}

export function saasRuntimeUnitKindInputVariableMappingsFromToTerraform(struct?: SaasRuntimeUnitKindInputVariableMappingsFromOutputReference | SaasRuntimeUnitKindInputVariableMappingsFrom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dependency: cdktn.stringToTerraform(struct!.dependency),
    output_variable: cdktn.stringToTerraform(struct!.outputVariable),
  }
}


export function saasRuntimeUnitKindInputVariableMappingsFromToHclTerraform(struct?: SaasRuntimeUnitKindInputVariableMappingsFromOutputReference | SaasRuntimeUnitKindInputVariableMappingsFrom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dependency: {
      value: cdktn.stringToHclTerraform(struct!.dependency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_variable: {
      value: cdktn.stringToHclTerraform(struct!.outputVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitKindInputVariableMappingsFromOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeUnitKindInputVariableMappingsFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependency = this._dependency;
    }
    if (this._outputVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariable = this._outputVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitKindInputVariableMappingsFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependency = undefined;
      this._outputVariable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependency = value.dependency;
      this._outputVariable = value.outputVariable;
    }
  }

  // dependency - computed: false, optional: false, required: true
  private _dependency?: string; 
  public get dependency() {
    return this.getStringAttribute('dependency');
  }
  public set dependency(value: string) {
    this._dependency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyInput() {
    return this._dependency;
  }

  // output_variable - computed: false, optional: false, required: true
  private _outputVariable?: string; 
  public get outputVariable() {
    return this.getStringAttribute('output_variable');
  }
  public set outputVariable(value: string) {
    this._outputVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableInput() {
    return this._outputVariable;
  }
}
export interface SaasRuntimeUnitKindInputVariableMappingsTo {
  /**
  * Alias of the dependency that the inputVariable will pass its value to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}
  */
  readonly dependency: string;
  /**
  * Tells App Lifecycle Manager if this mapping should be used during lookup or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}
  */
  readonly ignoreForLookup?: boolean | cdktn.IResolvable;
  /**
  * Name of the inputVariable on the dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}
  */
  readonly inputVariable: string;
}

export function saasRuntimeUnitKindInputVariableMappingsToToTerraform(struct?: SaasRuntimeUnitKindInputVariableMappingsToOutputReference | SaasRuntimeUnitKindInputVariableMappingsTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dependency: cdktn.stringToTerraform(struct!.dependency),
    ignore_for_lookup: cdktn.booleanToTerraform(struct!.ignoreForLookup),
    input_variable: cdktn.stringToTerraform(struct!.inputVariable),
  }
}


export function saasRuntimeUnitKindInputVariableMappingsToToHclTerraform(struct?: SaasRuntimeUnitKindInputVariableMappingsToOutputReference | SaasRuntimeUnitKindInputVariableMappingsTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dependency: {
      value: cdktn.stringToHclTerraform(struct!.dependency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_for_lookup: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreForLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_variable: {
      value: cdktn.stringToHclTerraform(struct!.inputVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitKindInputVariableMappingsToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeUnitKindInputVariableMappingsTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependency = this._dependency;
    }
    if (this._ignoreForLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreForLookup = this._ignoreForLookup;
    }
    if (this._inputVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariable = this._inputVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitKindInputVariableMappingsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependency = undefined;
      this._ignoreForLookup = undefined;
      this._inputVariable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependency = value.dependency;
      this._ignoreForLookup = value.ignoreForLookup;
      this._inputVariable = value.inputVariable;
    }
  }

  // dependency - computed: false, optional: false, required: true
  private _dependency?: string; 
  public get dependency() {
    return this.getStringAttribute('dependency');
  }
  public set dependency(value: string) {
    this._dependency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyInput() {
    return this._dependency;
  }

  // ignore_for_lookup - computed: false, optional: true, required: false
  private _ignoreForLookup?: boolean | cdktn.IResolvable; 
  public get ignoreForLookup() {
    return this.getBooleanAttribute('ignore_for_lookup');
  }
  public set ignoreForLookup(value: boolean | cdktn.IResolvable) {
    this._ignoreForLookup = value;
  }
  public resetIgnoreForLookup() {
    this._ignoreForLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreForLookupInput() {
    return this._ignoreForLookup;
  }

  // input_variable - computed: false, optional: false, required: true
  private _inputVariable?: string; 
  public get inputVariable() {
    return this.getStringAttribute('input_variable');
  }
  public set inputVariable(value: string) {
    this._inputVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariableInput() {
    return this._inputVariable;
  }
}
export interface SaasRuntimeUnitKindInputVariableMappings {
  /**
  * name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#variable SaasRuntimeUnitKind#variable}
  */
  readonly variable: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#from SaasRuntimeUnitKind#from}
  */
  readonly from?: SaasRuntimeUnitKindInputVariableMappingsFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#to SaasRuntimeUnitKind#to}
  */
  readonly to?: SaasRuntimeUnitKindInputVariableMappingsTo;
}

export function saasRuntimeUnitKindInputVariableMappingsToTerraform(struct?: SaasRuntimeUnitKindInputVariableMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    variable: cdktn.stringToTerraform(struct!.variable),
    from: saasRuntimeUnitKindInputVariableMappingsFromToTerraform(struct!.from),
    to: saasRuntimeUnitKindInputVariableMappingsToToTerraform(struct!.to),
  }
}


export function saasRuntimeUnitKindInputVariableMappingsToHclTerraform(struct?: SaasRuntimeUnitKindInputVariableMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    variable: {
      value: cdktn.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: saasRuntimeUnitKindInputVariableMappingsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "SaasRuntimeUnitKindInputVariableMappingsFromList",
    },
    to: {
      value: saasRuntimeUnitKindInputVariableMappingsToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "SaasRuntimeUnitKindInputVariableMappingsToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitKindInputVariableMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SaasRuntimeUnitKindInputVariableMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitKindInputVariableMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variable = undefined;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variable = value.variable;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
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

  // from - computed: false, optional: true, required: false
  private _from = new SaasRuntimeUnitKindInputVariableMappingsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: SaasRuntimeUnitKindInputVariableMappingsFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new SaasRuntimeUnitKindInputVariableMappingsToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: SaasRuntimeUnitKindInputVariableMappingsTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class SaasRuntimeUnitKindInputVariableMappingsList extends cdktn.ComplexList {
  public internalValue? : SaasRuntimeUnitKindInputVariableMappings[] | cdktn.IResolvable

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
  public get(index: number): SaasRuntimeUnitKindInputVariableMappingsOutputReference {
    return new SaasRuntimeUnitKindInputVariableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaasRuntimeUnitKindOutputVariableMappingsFrom {
  /**
  * Alias of the dependency that the outputVariable will pass its value to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}
  */
  readonly dependency: string;
  /**
  * Name of the outputVariable on the dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}
  */
  readonly outputVariable: string;
}

export function saasRuntimeUnitKindOutputVariableMappingsFromToTerraform(struct?: SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference | SaasRuntimeUnitKindOutputVariableMappingsFrom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dependency: cdktn.stringToTerraform(struct!.dependency),
    output_variable: cdktn.stringToTerraform(struct!.outputVariable),
  }
}


export function saasRuntimeUnitKindOutputVariableMappingsFromToHclTerraform(struct?: SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference | SaasRuntimeUnitKindOutputVariableMappingsFrom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dependency: {
      value: cdktn.stringToHclTerraform(struct!.dependency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_variable: {
      value: cdktn.stringToHclTerraform(struct!.outputVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeUnitKindOutputVariableMappingsFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependency = this._dependency;
    }
    if (this._outputVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariable = this._outputVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitKindOutputVariableMappingsFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependency = undefined;
      this._outputVariable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependency = value.dependency;
      this._outputVariable = value.outputVariable;
    }
  }

  // dependency - computed: false, optional: false, required: true
  private _dependency?: string; 
  public get dependency() {
    return this.getStringAttribute('dependency');
  }
  public set dependency(value: string) {
    this._dependency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyInput() {
    return this._dependency;
  }

  // output_variable - computed: false, optional: false, required: true
  private _outputVariable?: string; 
  public get outputVariable() {
    return this.getStringAttribute('output_variable');
  }
  public set outputVariable(value: string) {
    this._outputVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableInput() {
    return this._outputVariable;
  }
}
export interface SaasRuntimeUnitKindOutputVariableMappingsTo {
  /**
  * Alias of the dependency that the inputVariable will pass its value to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}
  */
  readonly dependency: string;
  /**
  * Tells App Lifecycle Manager if this mapping should be used during lookup or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}
  */
  readonly ignoreForLookup?: boolean | cdktn.IResolvable;
  /**
  * Name of the inputVariable on the dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}
  */
  readonly inputVariable: string;
}

export function saasRuntimeUnitKindOutputVariableMappingsToToTerraform(struct?: SaasRuntimeUnitKindOutputVariableMappingsToOutputReference | SaasRuntimeUnitKindOutputVariableMappingsTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dependency: cdktn.stringToTerraform(struct!.dependency),
    ignore_for_lookup: cdktn.booleanToTerraform(struct!.ignoreForLookup),
    input_variable: cdktn.stringToTerraform(struct!.inputVariable),
  }
}


export function saasRuntimeUnitKindOutputVariableMappingsToToHclTerraform(struct?: SaasRuntimeUnitKindOutputVariableMappingsToOutputReference | SaasRuntimeUnitKindOutputVariableMappingsTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dependency: {
      value: cdktn.stringToHclTerraform(struct!.dependency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_for_lookup: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreForLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_variable: {
      value: cdktn.stringToHclTerraform(struct!.inputVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitKindOutputVariableMappingsToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaasRuntimeUnitKindOutputVariableMappingsTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependency = this._dependency;
    }
    if (this._ignoreForLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreForLookup = this._ignoreForLookup;
    }
    if (this._inputVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariable = this._inputVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitKindOutputVariableMappingsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependency = undefined;
      this._ignoreForLookup = undefined;
      this._inputVariable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependency = value.dependency;
      this._ignoreForLookup = value.ignoreForLookup;
      this._inputVariable = value.inputVariable;
    }
  }

  // dependency - computed: false, optional: false, required: true
  private _dependency?: string; 
  public get dependency() {
    return this.getStringAttribute('dependency');
  }
  public set dependency(value: string) {
    this._dependency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyInput() {
    return this._dependency;
  }

  // ignore_for_lookup - computed: false, optional: true, required: false
  private _ignoreForLookup?: boolean | cdktn.IResolvable; 
  public get ignoreForLookup() {
    return this.getBooleanAttribute('ignore_for_lookup');
  }
  public set ignoreForLookup(value: boolean | cdktn.IResolvable) {
    this._ignoreForLookup = value;
  }
  public resetIgnoreForLookup() {
    this._ignoreForLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreForLookupInput() {
    return this._ignoreForLookup;
  }

  // input_variable - computed: false, optional: false, required: true
  private _inputVariable?: string; 
  public get inputVariable() {
    return this.getStringAttribute('input_variable');
  }
  public set inputVariable(value: string) {
    this._inputVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariableInput() {
    return this._inputVariable;
  }
}
export interface SaasRuntimeUnitKindOutputVariableMappings {
  /**
  * name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#variable SaasRuntimeUnitKind#variable}
  */
  readonly variable: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#from SaasRuntimeUnitKind#from}
  */
  readonly from?: SaasRuntimeUnitKindOutputVariableMappingsFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#to SaasRuntimeUnitKind#to}
  */
  readonly to?: SaasRuntimeUnitKindOutputVariableMappingsTo;
}

export function saasRuntimeUnitKindOutputVariableMappingsToTerraform(struct?: SaasRuntimeUnitKindOutputVariableMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    variable: cdktn.stringToTerraform(struct!.variable),
    from: saasRuntimeUnitKindOutputVariableMappingsFromToTerraform(struct!.from),
    to: saasRuntimeUnitKindOutputVariableMappingsToToTerraform(struct!.to),
  }
}


export function saasRuntimeUnitKindOutputVariableMappingsToHclTerraform(struct?: SaasRuntimeUnitKindOutputVariableMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    variable: {
      value: cdktn.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: saasRuntimeUnitKindOutputVariableMappingsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "SaasRuntimeUnitKindOutputVariableMappingsFromList",
    },
    to: {
      value: saasRuntimeUnitKindOutputVariableMappingsToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "SaasRuntimeUnitKindOutputVariableMappingsToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasRuntimeUnitKindOutputVariableMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SaasRuntimeUnitKindOutputVariableMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasRuntimeUnitKindOutputVariableMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variable = undefined;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variable = value.variable;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
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

  // from - computed: false, optional: true, required: false
  private _from = new SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: SaasRuntimeUnitKindOutputVariableMappingsFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new SaasRuntimeUnitKindOutputVariableMappingsToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: SaasRuntimeUnitKindOutputVariableMappingsTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class SaasRuntimeUnitKindOutputVariableMappingsList extends cdktn.ComplexList {
  public internalValue? : SaasRuntimeUnitKindOutputVariableMappings[] | cdktn.IResolvable

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
  public get(index: number): SaasRuntimeUnitKindOutputVariableMappingsOutputReference {
    return new SaasRuntimeUnitKindOutputVariableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaasRuntimeUnitKindTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#create SaasRuntimeUnitKind#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#delete SaasRuntimeUnitKind#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#update SaasRuntimeUnitKind#update}
  */
  readonly update?: string;
}

export function saasRuntimeUnitKindTimeoutsToTerraform(struct?: SaasRuntimeUnitKindTimeouts | cdktn.IResolvable): any {
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


export function saasRuntimeUnitKindTimeoutsToHclTerraform(struct?: SaasRuntimeUnitKindTimeouts | cdktn.IResolvable): any {
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

export class SaasRuntimeUnitKindTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SaasRuntimeUnitKindTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SaasRuntimeUnitKindTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind google_saas_runtime_unit_kind}
*/
export class SaasRuntimeUnitKind extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_saas_runtime_unit_kind";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SaasRuntimeUnitKind to import
  * @param importFromId The id of the existing SaasRuntimeUnitKind that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SaasRuntimeUnitKind to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_saas_runtime_unit_kind", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind google_saas_runtime_unit_kind} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SaasRuntimeUnitKindConfig
  */
  public constructor(scope: Construct, id: string, config: SaasRuntimeUnitKindConfig) {
    super(scope, id, {
      terraformResourceType: 'google_saas_runtime_unit_kind',
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
    this._defaultRelease = config.defaultRelease;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._saas = config.saas;
    this._unitKindId = config.unitKindId;
    this._appParams.internalValue = config.appParams;
    this._applicationTemplateComponent.internalValue = config.applicationTemplateComponent;
    this._dependencies.internalValue = config.dependencies;
    this._inputVariableMappings.internalValue = config.inputVariableMappings;
    this._outputVariableMappings.internalValue = config.outputVariableMappings;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // default_release - computed: false, optional: true, required: false
  private _defaultRelease?: string; 
  public get defaultRelease() {
    return this.getStringAttribute('default_release');
  }
  public set defaultRelease(value: string) {
    this._defaultRelease = value;
  }
  public resetDefaultRelease() {
    this._defaultRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReleaseInput() {
    return this._defaultRelease;
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

  // saas - computed: false, optional: false, required: true
  private _saas?: string; 
  public get saas() {
    return this.getStringAttribute('saas');
  }
  public set saas(value: string) {
    this._saas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saasInput() {
    return this._saas;
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

  // unit_kind_id - computed: false, optional: false, required: true
  private _unitKindId?: string; 
  public get unitKindId() {
    return this.getStringAttribute('unit_kind_id');
  }
  public set unitKindId(value: string) {
    this._unitKindId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitKindIdInput() {
    return this._unitKindId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // app_params - computed: false, optional: true, required: false
  private _appParams = new SaasRuntimeUnitKindAppParamsOutputReference(this, "app_params");
  public get appParams() {
    return this._appParams;
  }
  public putAppParams(value: SaasRuntimeUnitKindAppParams) {
    this._appParams.internalValue = value;
  }
  public resetAppParams() {
    this._appParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appParamsInput() {
    return this._appParams.internalValue;
  }

  // application_template_component - computed: false, optional: true, required: false
  private _applicationTemplateComponent = new SaasRuntimeUnitKindApplicationTemplateComponentOutputReference(this, "application_template_component");
  public get applicationTemplateComponent() {
    return this._applicationTemplateComponent;
  }
  public putApplicationTemplateComponent(value: SaasRuntimeUnitKindApplicationTemplateComponent) {
    this._applicationTemplateComponent.internalValue = value;
  }
  public resetApplicationTemplateComponent() {
    this._applicationTemplateComponent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTemplateComponentInput() {
    return this._applicationTemplateComponent.internalValue;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new SaasRuntimeUnitKindDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: SaasRuntimeUnitKindDependencies[] | cdktn.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // input_variable_mappings - computed: false, optional: true, required: false
  private _inputVariableMappings = new SaasRuntimeUnitKindInputVariableMappingsList(this, "input_variable_mappings", false);
  public get inputVariableMappings() {
    return this._inputVariableMappings;
  }
  public putInputVariableMappings(value: SaasRuntimeUnitKindInputVariableMappings[] | cdktn.IResolvable) {
    this._inputVariableMappings.internalValue = value;
  }
  public resetInputVariableMappings() {
    this._inputVariableMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariableMappingsInput() {
    return this._inputVariableMappings.internalValue;
  }

  // output_variable_mappings - computed: false, optional: true, required: false
  private _outputVariableMappings = new SaasRuntimeUnitKindOutputVariableMappingsList(this, "output_variable_mappings", false);
  public get outputVariableMappings() {
    return this._outputVariableMappings;
  }
  public putOutputVariableMappings(value: SaasRuntimeUnitKindOutputVariableMappings[] | cdktn.IResolvable) {
    this._outputVariableMappings.internalValue = value;
  }
  public resetOutputVariableMappings() {
    this._outputVariableMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableMappingsInput() {
    return this._outputVariableMappings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SaasRuntimeUnitKindTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SaasRuntimeUnitKindTimeouts) {
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
      default_release: cdktn.stringToTerraform(this._defaultRelease),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      saas: cdktn.stringToTerraform(this._saas),
      unit_kind_id: cdktn.stringToTerraform(this._unitKindId),
      app_params: saasRuntimeUnitKindAppParamsToTerraform(this._appParams.internalValue),
      application_template_component: saasRuntimeUnitKindApplicationTemplateComponentToTerraform(this._applicationTemplateComponent.internalValue),
      dependencies: cdktn.listMapper(saasRuntimeUnitKindDependenciesToTerraform, true)(this._dependencies.internalValue),
      input_variable_mappings: cdktn.listMapper(saasRuntimeUnitKindInputVariableMappingsToTerraform, true)(this._inputVariableMappings.internalValue),
      output_variable_mappings: cdktn.listMapper(saasRuntimeUnitKindOutputVariableMappingsToTerraform, true)(this._outputVariableMappings.internalValue),
      timeouts: saasRuntimeUnitKindTimeoutsToTerraform(this._timeouts.internalValue),
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
      default_release: {
        value: cdktn.stringToHclTerraform(this._defaultRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      saas: {
        value: cdktn.stringToHclTerraform(this._saas),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_kind_id: {
        value: cdktn.stringToHclTerraform(this._unitKindId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_params: {
        value: saasRuntimeUnitKindAppParamsToHclTerraform(this._appParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeUnitKindAppParamsList",
      },
      application_template_component: {
        value: saasRuntimeUnitKindApplicationTemplateComponentToHclTerraform(this._applicationTemplateComponent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeUnitKindApplicationTemplateComponentList",
      },
      dependencies: {
        value: cdktn.listMapperHcl(saasRuntimeUnitKindDependenciesToHclTerraform, true)(this._dependencies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeUnitKindDependenciesList",
      },
      input_variable_mappings: {
        value: cdktn.listMapperHcl(saasRuntimeUnitKindInputVariableMappingsToHclTerraform, true)(this._inputVariableMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeUnitKindInputVariableMappingsList",
      },
      output_variable_mappings: {
        value: cdktn.listMapperHcl(saasRuntimeUnitKindOutputVariableMappingsToHclTerraform, true)(this._outputVariableMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasRuntimeUnitKindOutputVariableMappingsList",
      },
      timeouts: {
        value: saasRuntimeUnitKindTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SaasRuntimeUnitKindTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
