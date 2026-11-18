/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DesignCenterApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_id DesignCenterApplication#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deletion_policy DesignCenterApplication#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Deployment project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_project DesignCenterApplication#deployment_project}
  */
  readonly deploymentProject?: string;
  /**
  * Deployment region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_region DesignCenterApplication#deployment_region}
  */
  readonly deploymentRegion?: string;
  /**
  * Description of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#description DesignCenterApplication#description}
  */
  readonly description?: string;
  /**
  * Display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#id DesignCenterApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#location DesignCenterApplication#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project DesignCenterApplication#project}
  */
  readonly project?: string;
  /**
  * Service account for deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account DesignCenterApplication#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The space for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#space DesignCenterApplication#space}
  */
  readonly space: string;
  /**
  * app_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#app_parameters DesignCenterApplication#app_parameters}
  */
  readonly appParameters?: DesignCenterApplicationAppParameters[] | cdktn.IResolvable;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#attributes DesignCenterApplication#attributes}
  */
  readonly attributes?: DesignCenterApplicationAttributes;
  /**
  * component_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#component_parameters DesignCenterApplication#component_parameters}
  */
  readonly componentParameters?: DesignCenterApplicationComponentParameters[] | cdktn.IResolvable;
  /**
  * composite_application_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#composite_application_parameters DesignCenterApplication#composite_application_parameters}
  */
  readonly compositeApplicationParameters?: DesignCenterApplicationCompositeApplicationParameters;
  /**
  * connection_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#connection_configs DesignCenterApplication#connection_configs}
  */
  readonly connectionConfigs?: DesignCenterApplicationConnectionConfigs[] | cdktn.IResolvable;
  /**
  * deployment_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_target DesignCenterApplication#deployment_target}
  */
  readonly deploymentTarget?: DesignCenterApplicationDeploymentTarget;
  /**
  * roles_apis_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#roles_apis_config DesignCenterApplication#roles_apis_config}
  */
  readonly rolesApisConfig?: DesignCenterApplicationRolesApisConfig[] | cdktn.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#scope DesignCenterApplication#scope}
  */
  readonly scope: DesignCenterApplicationScope;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#source DesignCenterApplication#source}
  */
  readonly source: DesignCenterApplicationSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#timeouts DesignCenterApplication#timeouts}
  */
  readonly timeouts?: DesignCenterApplicationTimeouts;
}
export interface DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters {
}

export function designCenterApplicationDeploymentMetadataComponentOutputParametersParametersToTerraform(struct?: DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function designCenterApplicationDeploymentMetadataComponentOutputParametersParametersToHclTerraform(struct?: DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList extends cdktn.ComplexList {

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
  public get(index: number): DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference {
    return new DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationDeploymentMetadataComponentOutputParameters {
}

export function designCenterApplicationDeploymentMetadataComponentOutputParametersToTerraform(struct?: DesignCenterApplicationDeploymentMetadataComponentOutputParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function designCenterApplicationDeploymentMetadataComponentOutputParametersToHclTerraform(struct?: DesignCenterApplicationDeploymentMetadataComponentOutputParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationDeploymentMetadataComponentOutputParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationDeploymentMetadataComponentOutputParameters | undefined) {
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

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
}

export class DesignCenterApplicationDeploymentMetadataComponentOutputParametersList extends cdktn.ComplexList {

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
  public get(index: number): DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference {
    return new DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationDeploymentMetadataError {
}

export function designCenterApplicationDeploymentMetadataErrorToTerraform(struct?: DesignCenterApplicationDeploymentMetadataError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function designCenterApplicationDeploymentMetadataErrorToHclTerraform(struct?: DesignCenterApplicationDeploymentMetadataError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DesignCenterApplicationDeploymentMetadataErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationDeploymentMetadataError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationDeploymentMetadataError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DesignCenterApplicationDeploymentMetadataErrorList extends cdktn.ComplexList {

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
  public get(index: number): DesignCenterApplicationDeploymentMetadataErrorOutputReference {
    return new DesignCenterApplicationDeploymentMetadataErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationDeploymentMetadata {
}

export function designCenterApplicationDeploymentMetadataToTerraform(struct?: DesignCenterApplicationDeploymentMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function designCenterApplicationDeploymentMetadataToHclTerraform(struct?: DesignCenterApplicationDeploymentMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DesignCenterApplicationDeploymentMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationDeploymentMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationDeploymentMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // component_output_parameters - computed: true, optional: false, required: false
  private _componentOutputParameters = new DesignCenterApplicationDeploymentMetadataComponentOutputParametersList(this, "component_output_parameters", false);
  public get componentOutputParameters() {
    return this._componentOutputParameters;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DesignCenterApplicationDeploymentMetadataErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // retry_attempts - computed: true, optional: false, required: false
  public get retryAttempts() {
    return this.getNumberAttribute('retry_attempts');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // worker_pool - computed: true, optional: false, required: false
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
}

export class DesignCenterApplicationDeploymentMetadataList extends cdktn.ComplexList {

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
  public get(index: number): DesignCenterApplicationDeploymentMetadataOutputReference {
    return new DesignCenterApplicationDeploymentMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationAppParameters {
  /**
  * The key of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}
  */
  readonly key: string;
  /**
  * The value of the parameter, as a JSON-encoded string. Use
  * 'jsonencode()' to set it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}
  */
  readonly value?: string;
}

export function designCenterApplicationAppParametersToTerraform(struct?: DesignCenterApplicationAppParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function designCenterApplicationAppParametersToHclTerraform(struct?: DesignCenterApplicationAppParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationAppParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationAppParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationAppParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class DesignCenterApplicationAppParametersList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationAppParameters[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationAppParametersOutputReference {
    return new DesignCenterApplicationAppParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationAttributesBusinessOwners {
  /**
  * Contact's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}
  */
  readonly email: string;
}

export function designCenterApplicationAttributesBusinessOwnersToTerraform(struct?: DesignCenterApplicationAttributesBusinessOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function designCenterApplicationAttributesBusinessOwnersToHclTerraform(struct?: DesignCenterApplicationAttributesBusinessOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationAttributesBusinessOwnersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationAttributesBusinessOwners | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationAttributesBusinessOwners | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._email = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._email = value.email;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class DesignCenterApplicationAttributesBusinessOwnersList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationAttributesBusinessOwners[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationAttributesBusinessOwnersOutputReference {
    return new DesignCenterApplicationAttributesBusinessOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationAttributesCriticality {
  /**
  * Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH',
  * 'MEDIUM' and 'LOW'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}
  */
  readonly type: string;
}

export function designCenterApplicationAttributesCriticalityToTerraform(struct?: DesignCenterApplicationAttributesCriticalityOutputReference | DesignCenterApplicationAttributesCriticality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function designCenterApplicationAttributesCriticalityToHclTerraform(struct?: DesignCenterApplicationAttributesCriticalityOutputReference | DesignCenterApplicationAttributesCriticality): any {
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

export class DesignCenterApplicationAttributesCriticalityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesignCenterApplicationAttributesCriticality | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationAttributesCriticality | undefined) {
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
export interface DesignCenterApplicationAttributesDeveloperOwners {
  /**
  * Contact's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}
  */
  readonly email: string;
}

export function designCenterApplicationAttributesDeveloperOwnersToTerraform(struct?: DesignCenterApplicationAttributesDeveloperOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function designCenterApplicationAttributesDeveloperOwnersToHclTerraform(struct?: DesignCenterApplicationAttributesDeveloperOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationAttributesDeveloperOwnersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationAttributesDeveloperOwners | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationAttributesDeveloperOwners | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._email = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._email = value.email;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class DesignCenterApplicationAttributesDeveloperOwnersList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationAttributesDeveloperOwners[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationAttributesDeveloperOwnersOutputReference {
    return new DesignCenterApplicationAttributesDeveloperOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationAttributesEnvironment {
  /**
  * Environment type. Possible values are 'PRODUCTION', 'STAGING',
  * 'TEST' and 'DEVELOPMENT'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}
  */
  readonly type: string;
}

export function designCenterApplicationAttributesEnvironmentToTerraform(struct?: DesignCenterApplicationAttributesEnvironmentOutputReference | DesignCenterApplicationAttributesEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function designCenterApplicationAttributesEnvironmentToHclTerraform(struct?: DesignCenterApplicationAttributesEnvironmentOutputReference | DesignCenterApplicationAttributesEnvironment): any {
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

export class DesignCenterApplicationAttributesEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesignCenterApplicationAttributesEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationAttributesEnvironment | undefined) {
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
export interface DesignCenterApplicationAttributesOperatorOwners {
  /**
  * Contact's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}
  */
  readonly email: string;
}

export function designCenterApplicationAttributesOperatorOwnersToTerraform(struct?: DesignCenterApplicationAttributesOperatorOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function designCenterApplicationAttributesOperatorOwnersToHclTerraform(struct?: DesignCenterApplicationAttributesOperatorOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationAttributesOperatorOwnersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationAttributesOperatorOwners | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationAttributesOperatorOwners | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._email = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._email = value.email;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class DesignCenterApplicationAttributesOperatorOwnersList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationAttributesOperatorOwners[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationAttributesOperatorOwnersOutputReference {
    return new DesignCenterApplicationAttributesOperatorOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationAttributes {
  /**
  * business_owners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#business_owners DesignCenterApplication#business_owners}
  */
  readonly businessOwners?: DesignCenterApplicationAttributesBusinessOwners[] | cdktn.IResolvable;
  /**
  * criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#criticality DesignCenterApplication#criticality}
  */
  readonly criticality?: DesignCenterApplicationAttributesCriticality;
  /**
  * developer_owners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#developer_owners DesignCenterApplication#developer_owners}
  */
  readonly developerOwners?: DesignCenterApplicationAttributesDeveloperOwners[] | cdktn.IResolvable;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#environment DesignCenterApplication#environment}
  */
  readonly environment?: DesignCenterApplicationAttributesEnvironment;
  /**
  * operator_owners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#operator_owners DesignCenterApplication#operator_owners}
  */
  readonly operatorOwners?: DesignCenterApplicationAttributesOperatorOwners[] | cdktn.IResolvable;
}

export function designCenterApplicationAttributesToTerraform(struct?: DesignCenterApplicationAttributesOutputReference | DesignCenterApplicationAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    business_owners: cdktn.listMapper(designCenterApplicationAttributesBusinessOwnersToTerraform, true)(struct!.businessOwners),
    criticality: designCenterApplicationAttributesCriticalityToTerraform(struct!.criticality),
    developer_owners: cdktn.listMapper(designCenterApplicationAttributesDeveloperOwnersToTerraform, true)(struct!.developerOwners),
    environment: designCenterApplicationAttributesEnvironmentToTerraform(struct!.environment),
    operator_owners: cdktn.listMapper(designCenterApplicationAttributesOperatorOwnersToTerraform, true)(struct!.operatorOwners),
  }
}


export function designCenterApplicationAttributesToHclTerraform(struct?: DesignCenterApplicationAttributesOutputReference | DesignCenterApplicationAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    business_owners: {
      value: cdktn.listMapperHcl(designCenterApplicationAttributesBusinessOwnersToHclTerraform, true)(struct!.businessOwners),
      isBlock: true,
      type: "list",
      storageClassType: "DesignCenterApplicationAttributesBusinessOwnersList",
    },
    criticality: {
      value: designCenterApplicationAttributesCriticalityToHclTerraform(struct!.criticality),
      isBlock: true,
      type: "list",
      storageClassType: "DesignCenterApplicationAttributesCriticalityList",
    },
    developer_owners: {
      value: cdktn.listMapperHcl(designCenterApplicationAttributesDeveloperOwnersToHclTerraform, true)(struct!.developerOwners),
      isBlock: true,
      type: "list",
      storageClassType: "DesignCenterApplicationAttributesDeveloperOwnersList",
    },
    environment: {
      value: designCenterApplicationAttributesEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "DesignCenterApplicationAttributesEnvironmentList",
    },
    operator_owners: {
      value: cdktn.listMapperHcl(designCenterApplicationAttributesOperatorOwnersToHclTerraform, true)(struct!.operatorOwners),
      isBlock: true,
      type: "list",
      storageClassType: "DesignCenterApplicationAttributesOperatorOwnersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesignCenterApplicationAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._businessOwners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessOwners = this._businessOwners?.internalValue;
    }
    if (this._criticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticality = this._criticality?.internalValue;
    }
    if (this._developerOwners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerOwners = this._developerOwners?.internalValue;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._operatorOwners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorOwners = this._operatorOwners?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._businessOwners.internalValue = undefined;
      this._criticality.internalValue = undefined;
      this._developerOwners.internalValue = undefined;
      this._environment.internalValue = undefined;
      this._operatorOwners.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._businessOwners.internalValue = value.businessOwners;
      this._criticality.internalValue = value.criticality;
      this._developerOwners.internalValue = value.developerOwners;
      this._environment.internalValue = value.environment;
      this._operatorOwners.internalValue = value.operatorOwners;
    }
  }

  // business_owners - computed: false, optional: true, required: false
  private _businessOwners = new DesignCenterApplicationAttributesBusinessOwnersList(this, "business_owners", false);
  public get businessOwners() {
    return this._businessOwners;
  }
  public putBusinessOwners(value: DesignCenterApplicationAttributesBusinessOwners[] | cdktn.IResolvable) {
    this._businessOwners.internalValue = value;
  }
  public resetBusinessOwners() {
    this._businessOwners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessOwnersInput() {
    return this._businessOwners.internalValue;
  }

  // criticality - computed: false, optional: true, required: false
  private _criticality = new DesignCenterApplicationAttributesCriticalityOutputReference(this, "criticality");
  public get criticality() {
    return this._criticality;
  }
  public putCriticality(value: DesignCenterApplicationAttributesCriticality) {
    this._criticality.internalValue = value;
  }
  public resetCriticality() {
    this._criticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality.internalValue;
  }

  // developer_owners - computed: false, optional: true, required: false
  private _developerOwners = new DesignCenterApplicationAttributesDeveloperOwnersList(this, "developer_owners", false);
  public get developerOwners() {
    return this._developerOwners;
  }
  public putDeveloperOwners(value: DesignCenterApplicationAttributesDeveloperOwners[] | cdktn.IResolvable) {
    this._developerOwners.internalValue = value;
  }
  public resetDeveloperOwners() {
    this._developerOwners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerOwnersInput() {
    return this._developerOwners.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new DesignCenterApplicationAttributesEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DesignCenterApplicationAttributesEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // operator_owners - computed: false, optional: true, required: false
  private _operatorOwners = new DesignCenterApplicationAttributesOperatorOwnersList(this, "operator_owners", false);
  public get operatorOwners() {
    return this._operatorOwners;
  }
  public putOperatorOwners(value: DesignCenterApplicationAttributesOperatorOwners[] | cdktn.IResolvable) {
    this._operatorOwners.internalValue = value;
  }
  public resetOperatorOwners() {
    this._operatorOwners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorOwnersInput() {
    return this._operatorOwners.internalValue;
  }
}
export interface DesignCenterApplicationComponentParametersParameters {
  /**
  * The key of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}
  */
  readonly key: string;
  /**
  * The value of the parameter, as a JSON-encoded string. Use
  * 'jsonencode()' to set it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}
  */
  readonly value?: string;
}

export function designCenterApplicationComponentParametersParametersToTerraform(struct?: DesignCenterApplicationComponentParametersParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function designCenterApplicationComponentParametersParametersToHclTerraform(struct?: DesignCenterApplicationComponentParametersParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationComponentParametersParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationComponentParametersParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationComponentParametersParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class DesignCenterApplicationComponentParametersParametersList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationComponentParametersParameters[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationComponentParametersParametersOutputReference {
    return new DesignCenterApplicationComponentParametersParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationComponentParameters {
  /**
  * The URI of the component that the parameters belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#component DesignCenterApplication#component}
  */
  readonly component: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#parameters DesignCenterApplication#parameters}
  */
  readonly parameters?: DesignCenterApplicationComponentParametersParameters[] | cdktn.IResolvable;
}

export function designCenterApplicationComponentParametersToTerraform(struct?: DesignCenterApplicationComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    component: cdktn.stringToTerraform(struct!.component),
    parameters: cdktn.listMapper(designCenterApplicationComponentParametersParametersToTerraform, true)(struct!.parameters),
  }
}


export function designCenterApplicationComponentParametersToHclTerraform(struct?: DesignCenterApplicationComponentParameters | cdktn.IResolvable): any {
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
    parameters: {
      value: cdktn.listMapperHcl(designCenterApplicationComponentParametersParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DesignCenterApplicationComponentParametersParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationComponentParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationComponentParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationComponentParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._parameters.internalValue = value.parameters;
    }
  }

  // component - computed: false, optional: false, required: true
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DesignCenterApplicationComponentParametersParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DesignCenterApplicationComponentParametersParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class DesignCenterApplicationComponentParametersList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationComponentParameters[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationComponentParametersOutputReference {
    return new DesignCenterApplicationComponentParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationCompositeApplicationParameters {
  /**
  * A map from a component URI to the service account that deploys the
  * component. Keys use the format
  * 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}'
  * and values use the format
  * 'projects/{project}/serviceAccounts/{email_address}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account_map DesignCenterApplication#service_account_map}
  */
  readonly serviceAccountMap?: { [key: string]: string };
}

export function designCenterApplicationCompositeApplicationParametersToTerraform(struct?: DesignCenterApplicationCompositeApplicationParametersOutputReference | DesignCenterApplicationCompositeApplicationParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_account_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.serviceAccountMap),
  }
}


export function designCenterApplicationCompositeApplicationParametersToHclTerraform(struct?: DesignCenterApplicationCompositeApplicationParametersOutputReference | DesignCenterApplicationCompositeApplicationParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_account_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.serviceAccountMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationCompositeApplicationParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesignCenterApplicationCompositeApplicationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountMap = this._serviceAccountMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationCompositeApplicationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccountMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccountMap = value.serviceAccountMap;
    }
  }

  // service_account_map - computed: false, optional: true, required: false
  private _serviceAccountMap?: { [key: string]: string }; 
  public get serviceAccountMap() {
    return this.getStringMapAttribute('service_account_map');
  }
  public set serviceAccountMap(value: { [key: string]: string }) {
    this._serviceAccountMap = value;
  }
  public resetServiceAccountMap() {
    this._serviceAccountMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountMapInput() {
    return this._serviceAccountMap;
  }
}
export interface DesignCenterApplicationConnectionConfigsDestinationComponentParameters {
  /**
  * The key of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}
  */
  readonly key: string;
  /**
  * The value of the parameter, as a JSON-encoded string. Use
  * 'jsonencode()' to set it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}
  */
  readonly value?: string;
}

export function designCenterApplicationConnectionConfigsDestinationComponentParametersToTerraform(struct?: DesignCenterApplicationConnectionConfigsDestinationComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function designCenterApplicationConnectionConfigsDestinationComponentParametersToHclTerraform(struct?: DesignCenterApplicationConnectionConfigsDestinationComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationConnectionConfigsDestinationComponentParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationConnectionConfigsDestinationComponentParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class DesignCenterApplicationConnectionConfigsDestinationComponentParametersList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationConnectionConfigsDestinationComponentParameters[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference {
    return new DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationConnectionConfigsSourceComponentParameters {
  /**
  * The key of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}
  */
  readonly key: string;
  /**
  * The value of the parameter, as a JSON-encoded string. Use
  * 'jsonencode()' to set it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}
  */
  readonly value?: string;
}

export function designCenterApplicationConnectionConfigsSourceComponentParametersToTerraform(struct?: DesignCenterApplicationConnectionConfigsSourceComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function designCenterApplicationConnectionConfigsSourceComponentParametersToHclTerraform(struct?: DesignCenterApplicationConnectionConfigsSourceComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationConnectionConfigsSourceComponentParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationConnectionConfigsSourceComponentParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class DesignCenterApplicationConnectionConfigsSourceComponentParametersList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationConnectionConfigsSourceComponentParameters[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference {
    return new DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationConnectionConfigs {
  /**
  * The URI of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#connection_uri DesignCenterApplication#connection_uri}
  */
  readonly connectionUri: string;
  /**
  * destination_component_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#destination_component_parameters DesignCenterApplication#destination_component_parameters}
  */
  readonly destinationComponentParameters?: DesignCenterApplicationConnectionConfigsDestinationComponentParameters[] | cdktn.IResolvable;
  /**
  * source_component_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#source_component_parameters DesignCenterApplication#source_component_parameters}
  */
  readonly sourceComponentParameters?: DesignCenterApplicationConnectionConfigsSourceComponentParameters[] | cdktn.IResolvable;
}

export function designCenterApplicationConnectionConfigsToTerraform(struct?: DesignCenterApplicationConnectionConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_uri: cdktn.stringToTerraform(struct!.connectionUri),
    destination_component_parameters: cdktn.listMapper(designCenterApplicationConnectionConfigsDestinationComponentParametersToTerraform, true)(struct!.destinationComponentParameters),
    source_component_parameters: cdktn.listMapper(designCenterApplicationConnectionConfigsSourceComponentParametersToTerraform, true)(struct!.sourceComponentParameters),
  }
}


export function designCenterApplicationConnectionConfigsToHclTerraform(struct?: DesignCenterApplicationConnectionConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_uri: {
      value: cdktn.stringToHclTerraform(struct!.connectionUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_component_parameters: {
      value: cdktn.listMapperHcl(designCenterApplicationConnectionConfigsDestinationComponentParametersToHclTerraform, true)(struct!.destinationComponentParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DesignCenterApplicationConnectionConfigsDestinationComponentParametersList",
    },
    source_component_parameters: {
      value: cdktn.listMapperHcl(designCenterApplicationConnectionConfigsSourceComponentParametersToHclTerraform, true)(struct!.sourceComponentParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DesignCenterApplicationConnectionConfigsSourceComponentParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationConnectionConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationConnectionConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUri = this._connectionUri;
    }
    if (this._destinationComponentParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationComponentParameters = this._destinationComponentParameters?.internalValue;
    }
    if (this._sourceComponentParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceComponentParameters = this._sourceComponentParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationConnectionConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionUri = undefined;
      this._destinationComponentParameters.internalValue = undefined;
      this._sourceComponentParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionUri = value.connectionUri;
      this._destinationComponentParameters.internalValue = value.destinationComponentParameters;
      this._sourceComponentParameters.internalValue = value.sourceComponentParameters;
    }
  }

  // connection_uri - computed: false, optional: false, required: true
  private _connectionUri?: string; 
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }
  public set connectionUri(value: string) {
    this._connectionUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUriInput() {
    return this._connectionUri;
  }

  // destination_component_parameters - computed: false, optional: true, required: false
  private _destinationComponentParameters = new DesignCenterApplicationConnectionConfigsDestinationComponentParametersList(this, "destination_component_parameters", false);
  public get destinationComponentParameters() {
    return this._destinationComponentParameters;
  }
  public putDestinationComponentParameters(value: DesignCenterApplicationConnectionConfigsDestinationComponentParameters[] | cdktn.IResolvable) {
    this._destinationComponentParameters.internalValue = value;
  }
  public resetDestinationComponentParameters() {
    this._destinationComponentParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationComponentParametersInput() {
    return this._destinationComponentParameters.internalValue;
  }

  // source_component_parameters - computed: false, optional: true, required: false
  private _sourceComponentParameters = new DesignCenterApplicationConnectionConfigsSourceComponentParametersList(this, "source_component_parameters", false);
  public get sourceComponentParameters() {
    return this._sourceComponentParameters;
  }
  public putSourceComponentParameters(value: DesignCenterApplicationConnectionConfigsSourceComponentParameters[] | cdktn.IResolvable) {
    this._sourceComponentParameters.internalValue = value;
  }
  public resetSourceComponentParameters() {
    this._sourceComponentParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceComponentParametersInput() {
    return this._sourceComponentParameters.internalValue;
  }
}

export class DesignCenterApplicationConnectionConfigsList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationConnectionConfigs[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationConnectionConfigsOutputReference {
    return new DesignCenterApplicationConnectionConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationDeploymentTargetGkeDeploymentTarget {
  /**
  * The self link of the cluster where the GKE based application is
  * deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#cluster_self_link DesignCenterApplication#cluster_self_link}
  */
  readonly clusterSelfLink: string;
  /**
  * The Kubernetes service account in the namespace, such as
  * 'default'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account DesignCenterApplication#kubernetes_service_account}
  */
  readonly kubernetesServiceAccount: string;
  /**
  * Whether to create the Kubernetes service account. If 'true', the
  * service account is created in the namespace. If 'false', the
  * service account must already exist in the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account_creation DesignCenterApplication#kubernetes_service_account_creation}
  */
  readonly kubernetesServiceAccountCreation?: boolean | cdktn.IResolvable;
  /**
  * The namespace where the application is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#namespace DesignCenterApplication#namespace}
  */
  readonly namespace: string;
}

export function designCenterApplicationDeploymentTargetGkeDeploymentTargetToTerraform(struct?: DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference | DesignCenterApplicationDeploymentTargetGkeDeploymentTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_self_link: cdktn.stringToTerraform(struct!.clusterSelfLink),
    kubernetes_service_account: cdktn.stringToTerraform(struct!.kubernetesServiceAccount),
    kubernetes_service_account_creation: cdktn.booleanToTerraform(struct!.kubernetesServiceAccountCreation),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function designCenterApplicationDeploymentTargetGkeDeploymentTargetToHclTerraform(struct?: DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference | DesignCenterApplicationDeploymentTargetGkeDeploymentTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_self_link: {
      value: cdktn.stringToHclTerraform(struct!.clusterSelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_service_account: {
      value: cdktn.stringToHclTerraform(struct!.kubernetesServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_service_account_creation: {
      value: cdktn.booleanToHclTerraform(struct!.kubernetesServiceAccountCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesignCenterApplicationDeploymentTargetGkeDeploymentTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterSelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSelfLink = this._clusterSelfLink;
    }
    if (this._kubernetesServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesServiceAccount = this._kubernetesServiceAccount;
    }
    if (this._kubernetesServiceAccountCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesServiceAccountCreation = this._kubernetesServiceAccountCreation;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterSelfLink = undefined;
      this._kubernetesServiceAccount = undefined;
      this._kubernetesServiceAccountCreation = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterSelfLink = value.clusterSelfLink;
      this._kubernetesServiceAccount = value.kubernetesServiceAccount;
      this._kubernetesServiceAccountCreation = value.kubernetesServiceAccountCreation;
      this._namespace = value.namespace;
    }
  }

  // cluster_self_link - computed: false, optional: false, required: true
  private _clusterSelfLink?: string; 
  public get clusterSelfLink() {
    return this.getStringAttribute('cluster_self_link');
  }
  public set clusterSelfLink(value: string) {
    this._clusterSelfLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSelfLinkInput() {
    return this._clusterSelfLink;
  }

  // kubernetes_service_account - computed: false, optional: false, required: true
  private _kubernetesServiceAccount?: string; 
  public get kubernetesServiceAccount() {
    return this.getStringAttribute('kubernetes_service_account');
  }
  public set kubernetesServiceAccount(value: string) {
    this._kubernetesServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesServiceAccountInput() {
    return this._kubernetesServiceAccount;
  }

  // kubernetes_service_account_creation - computed: false, optional: true, required: false
  private _kubernetesServiceAccountCreation?: boolean | cdktn.IResolvable; 
  public get kubernetesServiceAccountCreation() {
    return this.getBooleanAttribute('kubernetes_service_account_creation');
  }
  public set kubernetesServiceAccountCreation(value: boolean | cdktn.IResolvable) {
    this._kubernetesServiceAccountCreation = value;
  }
  public resetKubernetesServiceAccountCreation() {
    this._kubernetesServiceAccountCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesServiceAccountCreationInput() {
    return this._kubernetesServiceAccountCreation;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DesignCenterApplicationDeploymentTarget {
  /**
  * gke_deployment_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#gke_deployment_target DesignCenterApplication#gke_deployment_target}
  */
  readonly gkeDeploymentTarget?: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget;
}

export function designCenterApplicationDeploymentTargetToTerraform(struct?: DesignCenterApplicationDeploymentTargetOutputReference | DesignCenterApplicationDeploymentTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gke_deployment_target: designCenterApplicationDeploymentTargetGkeDeploymentTargetToTerraform(struct!.gkeDeploymentTarget),
  }
}


export function designCenterApplicationDeploymentTargetToHclTerraform(struct?: DesignCenterApplicationDeploymentTargetOutputReference | DesignCenterApplicationDeploymentTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gke_deployment_target: {
      value: designCenterApplicationDeploymentTargetGkeDeploymentTargetToHclTerraform(struct!.gkeDeploymentTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DesignCenterApplicationDeploymentTargetGkeDeploymentTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationDeploymentTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesignCenterApplicationDeploymentTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gkeDeploymentTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeDeploymentTarget = this._gkeDeploymentTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationDeploymentTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gkeDeploymentTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gkeDeploymentTarget.internalValue = value.gkeDeploymentTarget;
    }
  }

  // gke_deployment_target - computed: false, optional: true, required: false
  private _gkeDeploymentTarget = new DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference(this, "gke_deployment_target");
  public get gkeDeploymentTarget() {
    return this._gkeDeploymentTarget;
  }
  public putGkeDeploymentTarget(value: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget) {
    this._gkeDeploymentTarget.internalValue = value;
  }
  public resetGkeDeploymentTarget() {
    this._gkeDeploymentTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeDeploymentTargetInput() {
    return this._gkeDeploymentTarget.internalValue;
  }
}
export interface DesignCenterApplicationRolesApisConfigApis {
  /**
  * API name, such as 'compute.googleapis.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#api DesignCenterApplication#api}
  */
  readonly api: string;
}

export function designCenterApplicationRolesApisConfigApisToTerraform(struct?: DesignCenterApplicationRolesApisConfigApis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api: cdktn.stringToTerraform(struct!.api),
  }
}


export function designCenterApplicationRolesApisConfigApisToHclTerraform(struct?: DesignCenterApplicationRolesApisConfigApis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api: {
      value: cdktn.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationRolesApisConfigApisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationRolesApisConfigApis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationRolesApisConfigApis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._api = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._api = value.api;
    }
  }

  // api - computed: false, optional: false, required: true
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // system_provided - computed: true, optional: false, required: false
  public get systemProvided() {
    return this.getBooleanAttribute('system_provided');
  }
}

export class DesignCenterApplicationRolesApisConfigApisList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationRolesApisConfigApis[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationRolesApisConfigApisOutputReference {
    return new DesignCenterApplicationRolesApisConfigApisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationRolesApisConfigRoles {
  /**
  * IAM role name, such as 'roles/editor'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#role DesignCenterApplication#role}
  */
  readonly role: string;
}

export function designCenterApplicationRolesApisConfigRolesToTerraform(struct?: DesignCenterApplicationRolesApisConfigRoles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role: cdktn.stringToTerraform(struct!.role),
  }
}


export function designCenterApplicationRolesApisConfigRolesToHclTerraform(struct?: DesignCenterApplicationRolesApisConfigRoles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationRolesApisConfigRolesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationRolesApisConfigRoles | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationRolesApisConfigRoles | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // system_provided - computed: true, optional: false, required: false
  public get systemProvided() {
    return this.getBooleanAttribute('system_provided');
  }
}

export class DesignCenterApplicationRolesApisConfigRolesList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationRolesApisConfigRoles[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationRolesApisConfigRolesOutputReference {
    return new DesignCenterApplicationRolesApisConfigRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationRolesApisConfig {
  /**
  * The project ID to which these configurations apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project_id DesignCenterApplication#project_id}
  */
  readonly projectId: string;
  /**
  * apis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#apis DesignCenterApplication#apis}
  */
  readonly apis?: DesignCenterApplicationRolesApisConfigApis[] | cdktn.IResolvable;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#roles DesignCenterApplication#roles}
  */
  readonly roles?: DesignCenterApplicationRolesApisConfigRoles[] | cdktn.IResolvable;
}

export function designCenterApplicationRolesApisConfigToTerraform(struct?: DesignCenterApplicationRolesApisConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project_id: cdktn.stringToTerraform(struct!.projectId),
    apis: cdktn.listMapper(designCenterApplicationRolesApisConfigApisToTerraform, true)(struct!.apis),
    roles: cdktn.listMapper(designCenterApplicationRolesApisConfigRolesToTerraform, true)(struct!.roles),
  }
}


export function designCenterApplicationRolesApisConfigToHclTerraform(struct?: DesignCenterApplicationRolesApisConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apis: {
      value: cdktn.listMapperHcl(designCenterApplicationRolesApisConfigApisToHclTerraform, true)(struct!.apis),
      isBlock: true,
      type: "list",
      storageClassType: "DesignCenterApplicationRolesApisConfigApisList",
    },
    roles: {
      value: cdktn.listMapperHcl(designCenterApplicationRolesApisConfigRolesToHclTerraform, true)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DesignCenterApplicationRolesApisConfigRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationRolesApisConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DesignCenterApplicationRolesApisConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._apis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apis = this._apis?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationRolesApisConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._apis.internalValue = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._apis.internalValue = value.apis;
      this._roles.internalValue = value.roles;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // apis - computed: false, optional: true, required: false
  private _apis = new DesignCenterApplicationRolesApisConfigApisList(this, "apis", false);
  public get apis() {
    return this._apis;
  }
  public putApis(value: DesignCenterApplicationRolesApisConfigApis[] | cdktn.IResolvable) {
    this._apis.internalValue = value;
  }
  public resetApis() {
    this._apis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apisInput() {
    return this._apis.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new DesignCenterApplicationRolesApisConfigRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DesignCenterApplicationRolesApisConfigRoles[] | cdktn.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}

export class DesignCenterApplicationRolesApisConfigList extends cdktn.ComplexList {
  public internalValue? : DesignCenterApplicationRolesApisConfig[] | cdktn.IResolvable

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
  public get(index: number): DesignCenterApplicationRolesApisConfigOutputReference {
    return new DesignCenterApplicationRolesApisConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DesignCenterApplicationScope {
  /**
  * Scope type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}
  */
  readonly type?: string;
}

export function designCenterApplicationScopeToTerraform(struct?: DesignCenterApplicationScopeOutputReference | DesignCenterApplicationScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function designCenterApplicationScopeToHclTerraform(struct?: DesignCenterApplicationScopeOutputReference | DesignCenterApplicationScope): any {
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

export class DesignCenterApplicationScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesignCenterApplicationScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
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
}
export interface DesignCenterApplicationSource {
  /**
  * Application template revision URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_template_revision DesignCenterApplication#application_template_revision}
  */
  readonly applicationTemplateRevision?: string;
}

export function designCenterApplicationSourceToTerraform(struct?: DesignCenterApplicationSourceOutputReference | DesignCenterApplicationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_template_revision: cdktn.stringToTerraform(struct!.applicationTemplateRevision),
  }
}


export function designCenterApplicationSourceToHclTerraform(struct?: DesignCenterApplicationSourceOutputReference | DesignCenterApplicationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_template_revision: {
      value: cdktn.stringToHclTerraform(struct!.applicationTemplateRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesignCenterApplicationSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesignCenterApplicationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationTemplateRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationTemplateRevision = this._applicationTemplateRevision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesignCenterApplicationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationTemplateRevision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationTemplateRevision = value.applicationTemplateRevision;
    }
  }

  // application_template_revision - computed: false, optional: true, required: false
  private _applicationTemplateRevision?: string; 
  public get applicationTemplateRevision() {
    return this.getStringAttribute('application_template_revision');
  }
  public set applicationTemplateRevision(value: string) {
    this._applicationTemplateRevision = value;
  }
  public resetApplicationTemplateRevision() {
    this._applicationTemplateRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTemplateRevisionInput() {
    return this._applicationTemplateRevision;
  }
}
export interface DesignCenterApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#create DesignCenterApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#delete DesignCenterApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#update DesignCenterApplication#update}
  */
  readonly update?: string;
}

export function designCenterApplicationTimeoutsToTerraform(struct?: DesignCenterApplicationTimeouts | cdktn.IResolvable): any {
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


export function designCenterApplicationTimeoutsToHclTerraform(struct?: DesignCenterApplicationTimeouts | cdktn.IResolvable): any {
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

export class DesignCenterApplicationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DesignCenterApplicationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DesignCenterApplicationTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application google_design_center_application}
*/
export class DesignCenterApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_design_center_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DesignCenterApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DesignCenterApplication to import
  * @param importFromId The id of the existing DesignCenterApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DesignCenterApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_design_center_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application google_design_center_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DesignCenterApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DesignCenterApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_design_center_application',
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
    this._applicationId = config.applicationId;
    this._deletionPolicy = config.deletionPolicy;
    this._deploymentProject = config.deploymentProject;
    this._deploymentRegion = config.deploymentRegion;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._space = config.space;
    this._appParameters.internalValue = config.appParameters;
    this._attributes.internalValue = config.attributes;
    this._componentParameters.internalValue = config.componentParameters;
    this._compositeApplicationParameters.internalValue = config.compositeApplicationParameters;
    this._connectionConfigs.internalValue = config.connectionConfigs;
    this._deploymentTarget.internalValue = config.deploymentTarget;
    this._rolesApisConfig.internalValue = config.rolesApisConfig;
    this._scope.internalValue = config.scope;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apphub_application - computed: true, optional: false, required: false
  public get apphubApplication() {
    return this.getStringAttribute('apphub_application');
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // deployment_metadata - computed: true, optional: false, required: false
  private _deploymentMetadata = new DesignCenterApplicationDeploymentMetadataList(this, "deployment_metadata", false);
  public get deploymentMetadata() {
    return this._deploymentMetadata;
  }

  // deployment_project - computed: false, optional: true, required: false
  private _deploymentProject?: string; 
  public get deploymentProject() {
    return this.getStringAttribute('deployment_project');
  }
  public set deploymentProject(value: string) {
    this._deploymentProject = value;
  }
  public resetDeploymentProject() {
    this._deploymentProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentProjectInput() {
    return this._deploymentProject;
  }

  // deployment_region - computed: false, optional: true, required: false
  private _deploymentRegion?: string; 
  public get deploymentRegion() {
    return this.getStringAttribute('deployment_region');
  }
  public set deploymentRegion(value: string) {
    this._deploymentRegion = value;
  }
  public resetDeploymentRegion() {
    this._deploymentRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentRegionInput() {
    return this._deploymentRegion;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // app_parameters - computed: false, optional: true, required: false
  private _appParameters = new DesignCenterApplicationAppParametersList(this, "app_parameters", false);
  public get appParameters() {
    return this._appParameters;
  }
  public putAppParameters(value: DesignCenterApplicationAppParameters[] | cdktn.IResolvable) {
    this._appParameters.internalValue = value;
  }
  public resetAppParameters() {
    this._appParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appParametersInput() {
    return this._appParameters.internalValue;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DesignCenterApplicationAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DesignCenterApplicationAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // component_parameters - computed: false, optional: true, required: false
  private _componentParameters = new DesignCenterApplicationComponentParametersList(this, "component_parameters", false);
  public get componentParameters() {
    return this._componentParameters;
  }
  public putComponentParameters(value: DesignCenterApplicationComponentParameters[] | cdktn.IResolvable) {
    this._componentParameters.internalValue = value;
  }
  public resetComponentParameters() {
    this._componentParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentParametersInput() {
    return this._componentParameters.internalValue;
  }

  // composite_application_parameters - computed: false, optional: true, required: false
  private _compositeApplicationParameters = new DesignCenterApplicationCompositeApplicationParametersOutputReference(this, "composite_application_parameters");
  public get compositeApplicationParameters() {
    return this._compositeApplicationParameters;
  }
  public putCompositeApplicationParameters(value: DesignCenterApplicationCompositeApplicationParameters) {
    this._compositeApplicationParameters.internalValue = value;
  }
  public resetCompositeApplicationParameters() {
    this._compositeApplicationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeApplicationParametersInput() {
    return this._compositeApplicationParameters.internalValue;
  }

  // connection_configs - computed: false, optional: true, required: false
  private _connectionConfigs = new DesignCenterApplicationConnectionConfigsList(this, "connection_configs", false);
  public get connectionConfigs() {
    return this._connectionConfigs;
  }
  public putConnectionConfigs(value: DesignCenterApplicationConnectionConfigs[] | cdktn.IResolvable) {
    this._connectionConfigs.internalValue = value;
  }
  public resetConnectionConfigs() {
    this._connectionConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigsInput() {
    return this._connectionConfigs.internalValue;
  }

  // deployment_target - computed: false, optional: true, required: false
  private _deploymentTarget = new DesignCenterApplicationDeploymentTargetOutputReference(this, "deployment_target");
  public get deploymentTarget() {
    return this._deploymentTarget;
  }
  public putDeploymentTarget(value: DesignCenterApplicationDeploymentTarget) {
    this._deploymentTarget.internalValue = value;
  }
  public resetDeploymentTarget() {
    this._deploymentTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTargetInput() {
    return this._deploymentTarget.internalValue;
  }

  // roles_apis_config - computed: false, optional: true, required: false
  private _rolesApisConfig = new DesignCenterApplicationRolesApisConfigList(this, "roles_apis_config", false);
  public get rolesApisConfig() {
    return this._rolesApisConfig;
  }
  public putRolesApisConfig(value: DesignCenterApplicationRolesApisConfig[] | cdktn.IResolvable) {
    this._rolesApisConfig.internalValue = value;
  }
  public resetRolesApisConfig() {
    this._rolesApisConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesApisConfigInput() {
    return this._rolesApisConfig.internalValue;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new DesignCenterApplicationScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DesignCenterApplicationScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new DesignCenterApplicationSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DesignCenterApplicationSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DesignCenterApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DesignCenterApplicationTimeouts) {
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
      application_id: cdktn.stringToTerraform(this._applicationId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      deployment_project: cdktn.stringToTerraform(this._deploymentProject),
      deployment_region: cdktn.stringToTerraform(this._deploymentRegion),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      service_account: cdktn.stringToTerraform(this._serviceAccount),
      space: cdktn.stringToTerraform(this._space),
      app_parameters: cdktn.listMapper(designCenterApplicationAppParametersToTerraform, true)(this._appParameters.internalValue),
      attributes: designCenterApplicationAttributesToTerraform(this._attributes.internalValue),
      component_parameters: cdktn.listMapper(designCenterApplicationComponentParametersToTerraform, true)(this._componentParameters.internalValue),
      composite_application_parameters: designCenterApplicationCompositeApplicationParametersToTerraform(this._compositeApplicationParameters.internalValue),
      connection_configs: cdktn.listMapper(designCenterApplicationConnectionConfigsToTerraform, true)(this._connectionConfigs.internalValue),
      deployment_target: designCenterApplicationDeploymentTargetToTerraform(this._deploymentTarget.internalValue),
      roles_apis_config: cdktn.listMapper(designCenterApplicationRolesApisConfigToTerraform, true)(this._rolesApisConfig.internalValue),
      scope: designCenterApplicationScopeToTerraform(this._scope.internalValue),
      source: designCenterApplicationSourceToTerraform(this._source.internalValue),
      timeouts: designCenterApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktn.stringToHclTerraform(this._applicationId),
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
      deployment_project: {
        value: cdktn.stringToHclTerraform(this._deploymentProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_region: {
        value: cdktn.stringToHclTerraform(this._deploymentRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
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
      service_account: {
        value: cdktn.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: cdktn.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_parameters: {
        value: cdktn.listMapperHcl(designCenterApplicationAppParametersToHclTerraform, true)(this._appParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesignCenterApplicationAppParametersList",
      },
      attributes: {
        value: designCenterApplicationAttributesToHclTerraform(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesignCenterApplicationAttributesList",
      },
      component_parameters: {
        value: cdktn.listMapperHcl(designCenterApplicationComponentParametersToHclTerraform, true)(this._componentParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesignCenterApplicationComponentParametersList",
      },
      composite_application_parameters: {
        value: designCenterApplicationCompositeApplicationParametersToHclTerraform(this._compositeApplicationParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesignCenterApplicationCompositeApplicationParametersList",
      },
      connection_configs: {
        value: cdktn.listMapperHcl(designCenterApplicationConnectionConfigsToHclTerraform, true)(this._connectionConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesignCenterApplicationConnectionConfigsList",
      },
      deployment_target: {
        value: designCenterApplicationDeploymentTargetToHclTerraform(this._deploymentTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesignCenterApplicationDeploymentTargetList",
      },
      roles_apis_config: {
        value: cdktn.listMapperHcl(designCenterApplicationRolesApisConfigToHclTerraform, true)(this._rolesApisConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesignCenterApplicationRolesApisConfigList",
      },
      scope: {
        value: designCenterApplicationScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesignCenterApplicationScopeList",
      },
      source: {
        value: designCenterApplicationSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesignCenterApplicationSourceList",
      },
      timeouts: {
        value: designCenterApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DesignCenterApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
