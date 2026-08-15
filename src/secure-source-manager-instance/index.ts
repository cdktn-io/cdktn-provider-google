/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecureSourceManagerInstanceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "PREVENT".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#deletion_policy SecureSourceManagerInstance#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#id SecureSourceManagerInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for the Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#instance_id SecureSourceManagerInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#kms_key SecureSourceManagerInstance#kms_key}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKey?: string;
  /**
  * Labels as key value pairs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#labels SecureSourceManagerInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#location SecureSourceManagerInstance#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#project SecureSourceManagerInstance#project}
  */
  readonly project?: string;
  /**
  * private_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#private_config SecureSourceManagerInstance#private_config}
  */
  readonly privateConfig?: SecureSourceManagerInstancePrivateConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#timeouts SecureSourceManagerInstance#timeouts}
  */
  readonly timeouts?: SecureSourceManagerInstanceTimeouts;
  /**
  * workforce_identity_federation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#workforce_identity_federation_config SecureSourceManagerInstance#workforce_identity_federation_config}
  */
  readonly workforceIdentityFederationConfig?: SecureSourceManagerInstanceWorkforceIdentityFederationConfig;
}
export interface SecureSourceManagerInstanceHostConfig {
}

export function secureSourceManagerInstanceHostConfigToTerraform(struct?: SecureSourceManagerInstanceHostConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function secureSourceManagerInstanceHostConfigToHclTerraform(struct?: SecureSourceManagerInstanceHostConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SecureSourceManagerInstanceHostConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecureSourceManagerInstanceHostConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureSourceManagerInstanceHostConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api - computed: true, optional: false, required: false
  public get api() {
    return this.getStringAttribute('api');
  }

  // git_http - computed: true, optional: false, required: false
  public get gitHttp() {
    return this.getStringAttribute('git_http');
  }

  // git_ssh - computed: true, optional: false, required: false
  public get gitSsh() {
    return this.getStringAttribute('git_ssh');
  }

  // html - computed: true, optional: false, required: false
  public get html() {
    return this.getStringAttribute('html');
  }
}

export class SecureSourceManagerInstanceHostConfigList extends cdktn.ComplexList {

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
  public get(index: number): SecureSourceManagerInstanceHostConfigOutputReference {
    return new SecureSourceManagerInstanceHostConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureSourceManagerInstancePrivateConfigCustomHostConfig {
  /**
  * API hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#api SecureSourceManagerInstance#api}
  */
  readonly api: string;
  /**
  * Git HTTP hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#git_http SecureSourceManagerInstance#git_http}
  */
  readonly gitHttp: string;
  /**
  * Git SSH hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#git_ssh SecureSourceManagerInstance#git_ssh}
  */
  readonly gitSsh: string;
  /**
  * HTML hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#html SecureSourceManagerInstance#html}
  */
  readonly html: string;
}

export function secureSourceManagerInstancePrivateConfigCustomHostConfigToTerraform(struct?: SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference | SecureSourceManagerInstancePrivateConfigCustomHostConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api: cdktn.stringToTerraform(struct!.api),
    git_http: cdktn.stringToTerraform(struct!.gitHttp),
    git_ssh: cdktn.stringToTerraform(struct!.gitSsh),
    html: cdktn.stringToTerraform(struct!.html),
  }
}


export function secureSourceManagerInstancePrivateConfigCustomHostConfigToHclTerraform(struct?: SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference | SecureSourceManagerInstancePrivateConfigCustomHostConfig): any {
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
    git_http: {
      value: cdktn.stringToHclTerraform(struct!.gitHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_ssh: {
      value: cdktn.stringToHclTerraform(struct!.gitSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    html: {
      value: cdktn.stringToHclTerraform(struct!.html),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecureSourceManagerInstancePrivateConfigCustomHostConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._gitHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitHttp = this._gitHttp;
    }
    if (this._gitSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSsh = this._gitSsh;
    }
    if (this._html !== undefined) {
      hasAnyValues = true;
      internalValueResult.html = this._html;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureSourceManagerInstancePrivateConfigCustomHostConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._api = undefined;
      this._gitHttp = undefined;
      this._gitSsh = undefined;
      this._html = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._api = value.api;
      this._gitHttp = value.gitHttp;
      this._gitSsh = value.gitSsh;
      this._html = value.html;
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

  // git_http - computed: false, optional: false, required: true
  private _gitHttp?: string; 
  public get gitHttp() {
    return this.getStringAttribute('git_http');
  }
  public set gitHttp(value: string) {
    this._gitHttp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitHttpInput() {
    return this._gitHttp;
  }

  // git_ssh - computed: false, optional: false, required: true
  private _gitSsh?: string; 
  public get gitSsh() {
    return this.getStringAttribute('git_ssh');
  }
  public set gitSsh(value: string) {
    this._gitSsh = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSshInput() {
    return this._gitSsh;
  }

  // html - computed: false, optional: false, required: true
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }
}
export interface SecureSourceManagerInstancePrivateConfig {
  /**
  * CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#ca_pool SecureSourceManagerInstance#ca_pool}
  */
  readonly caPool?: string;
  /**
  * 'Indicate if it's private instance.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#is_private SecureSourceManagerInstance#is_private}
  */
  readonly isPrivate: boolean | cdktn.IResolvable;
  /**
  * Optional. Additional allowed projects for setting up PSC connections.
  * Instance host project is automatically allowed and does not need to be included in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#psc_allowed_projects SecureSourceManagerInstance#psc_allowed_projects}
  */
  readonly pscAllowedProjects?: string[];
  /**
  * custom_host_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#custom_host_config SecureSourceManagerInstance#custom_host_config}
  */
  readonly customHostConfig?: SecureSourceManagerInstancePrivateConfigCustomHostConfig;
}

export function secureSourceManagerInstancePrivateConfigToTerraform(struct?: SecureSourceManagerInstancePrivateConfigOutputReference | SecureSourceManagerInstancePrivateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_pool: cdktn.stringToTerraform(struct!.caPool),
    is_private: cdktn.booleanToTerraform(struct!.isPrivate),
    psc_allowed_projects: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pscAllowedProjects),
    custom_host_config: secureSourceManagerInstancePrivateConfigCustomHostConfigToTerraform(struct!.customHostConfig),
  }
}


export function secureSourceManagerInstancePrivateConfigToHclTerraform(struct?: SecureSourceManagerInstancePrivateConfigOutputReference | SecureSourceManagerInstancePrivateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_pool: {
      value: cdktn.stringToHclTerraform(struct!.caPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_private: {
      value: cdktn.booleanToHclTerraform(struct!.isPrivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    psc_allowed_projects: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pscAllowedProjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_host_config: {
      value: secureSourceManagerInstancePrivateConfigCustomHostConfigToHclTerraform(struct!.customHostConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecureSourceManagerInstancePrivateConfigCustomHostConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureSourceManagerInstancePrivateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecureSourceManagerInstancePrivateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPool = this._caPool;
    }
    if (this._isPrivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrivate = this._isPrivate;
    }
    if (this._pscAllowedProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscAllowedProjects = this._pscAllowedProjects;
    }
    if (this._customHostConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostConfig = this._customHostConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureSourceManagerInstancePrivateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caPool = undefined;
      this._isPrivate = undefined;
      this._pscAllowedProjects = undefined;
      this._customHostConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caPool = value.caPool;
      this._isPrivate = value.isPrivate;
      this._pscAllowedProjects = value.pscAllowedProjects;
      this._customHostConfig.internalValue = value.customHostConfig;
    }
  }

  // ca_pool - computed: false, optional: true, required: false
  private _caPool?: string; 
  public get caPool() {
    return this.getStringAttribute('ca_pool');
  }
  public set caPool(value: string) {
    this._caPool = value;
  }
  public resetCaPool() {
    this._caPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPoolInput() {
    return this._caPool;
  }

  // http_service_attachment - computed: true, optional: false, required: false
  public get httpServiceAttachment() {
    return this.getStringAttribute('http_service_attachment');
  }

  // is_private - computed: false, optional: false, required: true
  private _isPrivate?: boolean | cdktn.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktn.IResolvable) {
    this._isPrivate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
  }

  // psc_allowed_projects - computed: false, optional: true, required: false
  private _pscAllowedProjects?: string[]; 
  public get pscAllowedProjects() {
    return this.getListAttribute('psc_allowed_projects');
  }
  public set pscAllowedProjects(value: string[]) {
    this._pscAllowedProjects = value;
  }
  public resetPscAllowedProjects() {
    this._pscAllowedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscAllowedProjectsInput() {
    return this._pscAllowedProjects;
  }

  // ssh_service_attachment - computed: true, optional: false, required: false
  public get sshServiceAttachment() {
    return this.getStringAttribute('ssh_service_attachment');
  }

  // custom_host_config - computed: false, optional: true, required: false
  private _customHostConfig = new SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference(this, "custom_host_config");
  public get customHostConfig() {
    return this._customHostConfig;
  }
  public putCustomHostConfig(value: SecureSourceManagerInstancePrivateConfigCustomHostConfig) {
    this._customHostConfig.internalValue = value;
  }
  public resetCustomHostConfig() {
    this._customHostConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostConfigInput() {
    return this._customHostConfig.internalValue;
  }
}
export interface SecureSourceManagerInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#create SecureSourceManagerInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#delete SecureSourceManagerInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#update SecureSourceManagerInstance#update}
  */
  readonly update?: string;
}

export function secureSourceManagerInstanceTimeoutsToTerraform(struct?: SecureSourceManagerInstanceTimeouts | cdktn.IResolvable): any {
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


export function secureSourceManagerInstanceTimeoutsToHclTerraform(struct?: SecureSourceManagerInstanceTimeouts | cdktn.IResolvable): any {
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

export class SecureSourceManagerInstanceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecureSourceManagerInstanceTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecureSourceManagerInstanceTimeouts | cdktn.IResolvable | undefined) {
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
export interface SecureSourceManagerInstanceWorkforceIdentityFederationConfig {
  /**
  * 'Whether Workforce Identity Federation is enabled.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#enabled SecureSourceManagerInstance#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function secureSourceManagerInstanceWorkforceIdentityFederationConfigToTerraform(struct?: SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference | SecureSourceManagerInstanceWorkforceIdentityFederationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function secureSourceManagerInstanceWorkforceIdentityFederationConfigToHclTerraform(struct?: SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference | SecureSourceManagerInstanceWorkforceIdentityFederationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecureSourceManagerInstanceWorkforceIdentityFederationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureSourceManagerInstanceWorkforceIdentityFederationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance google_secure_source_manager_instance}
*/
export class SecureSourceManagerInstance extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_secure_source_manager_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecureSourceManagerInstance resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureSourceManagerInstance to import
  * @param importFromId The id of the existing SecureSourceManagerInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureSourceManagerInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_secure_source_manager_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/secure_source_manager_instance google_secure_source_manager_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureSourceManagerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SecureSourceManagerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secure_source_manager_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.44.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._kmsKey = config.kmsKey;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._privateConfig.internalValue = config.privateConfig;
    this._timeouts.internalValue = config.timeouts;
    this._workforceIdentityFederationConfig.internalValue = config.workforceIdentityFederationConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // host_config - computed: true, optional: false, required: false
  private _hostConfig = new SecureSourceManagerInstanceHostConfigList(this, "host_config", false);
  public get hostConfig() {
    return this._hostConfig;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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

  // state_note - computed: true, optional: false, required: false
  public get stateNote() {
    return this.getStringAttribute('state_note');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // private_config - computed: false, optional: true, required: false
  private _privateConfig = new SecureSourceManagerInstancePrivateConfigOutputReference(this, "private_config");
  public get privateConfig() {
    return this._privateConfig;
  }
  public putPrivateConfig(value: SecureSourceManagerInstancePrivateConfig) {
    this._privateConfig.internalValue = value;
  }
  public resetPrivateConfig() {
    this._privateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConfigInput() {
    return this._privateConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecureSourceManagerInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecureSourceManagerInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workforce_identity_federation_config - computed: false, optional: true, required: false
  private _workforceIdentityFederationConfig = new SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference(this, "workforce_identity_federation_config");
  public get workforceIdentityFederationConfig() {
    return this._workforceIdentityFederationConfig;
  }
  public putWorkforceIdentityFederationConfig(value: SecureSourceManagerInstanceWorkforceIdentityFederationConfig) {
    this._workforceIdentityFederationConfig.internalValue = value;
  }
  public resetWorkforceIdentityFederationConfig() {
    this._workforceIdentityFederationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceIdentityFederationConfigInput() {
    return this._workforceIdentityFederationConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      instance_id: cdktn.stringToTerraform(this._instanceId),
      kms_key: cdktn.stringToTerraform(this._kmsKey),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      private_config: secureSourceManagerInstancePrivateConfigToTerraform(this._privateConfig.internalValue),
      timeouts: secureSourceManagerInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      workforce_identity_federation_config: secureSourceManagerInstanceWorkforceIdentityFederationConfigToTerraform(this._workforceIdentityFederationConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      instance_id: {
        value: cdktn.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key: {
        value: cdktn.stringToHclTerraform(this._kmsKey),
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
      private_config: {
        value: secureSourceManagerInstancePrivateConfigToHclTerraform(this._privateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecureSourceManagerInstancePrivateConfigList",
      },
      timeouts: {
        value: secureSourceManagerInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecureSourceManagerInstanceTimeouts",
      },
      workforce_identity_federation_config: {
        value: secureSourceManagerInstanceWorkforceIdentityFederationConfigToHclTerraform(this._workforceIdentityFederationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecureSourceManagerInstanceWorkforceIdentityFederationConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
