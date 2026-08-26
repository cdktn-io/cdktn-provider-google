/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataformRepositoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/dataform_repository.html.markdown for specifics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#deletion_policy DataformRepository#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. The repository's user-friendly name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#display_name DataformRepository#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#id DataformRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources.
  * It is not possible to add or update the encryption key after the repository is created. Example projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#kms_key_name DataformRepository#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Optional. Repository user labels.
  * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#labels DataformRepository#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The repository's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#name DataformRepository#name}
  */
  readonly name: string;
  /**
  * Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/* /secrets/* /versions/*. The file itself must be in a JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#npmrc_environment_variables_secret_version DataformRepository#npmrc_environment_variables_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly npmrcEnvironmentVariablesSecretVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#project DataformRepository#project}
  */
  readonly project?: string;
  /**
  * A reference to the region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#region DataformRepository#region}
  */
  readonly region?: string;
  /**
  * The service account to run workflow invocations under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#service_account DataformRepository#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * git_remote_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#git_remote_settings DataformRepository#git_remote_settings}
  */
  readonly gitRemoteSettings?: DataformRepositoryGitRemoteSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#timeouts DataformRepository#timeouts}
  */
  readonly timeouts?: DataformRepositoryTimeouts;
  /**
  * workspace_compilation_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#workspace_compilation_overrides DataformRepository#workspace_compilation_overrides}
  */
  readonly workspaceCompilationOverrides?: DataformRepositoryWorkspaceCompilationOverrides;
}
export interface DataformRepositoryGitRemoteSettingsSshAuthenticationConfig {
  /**
  * Content of a public SSH key to verify an identity of a remote Git host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#host_public_key DataformRepository#host_public_key}
  */
  readonly hostPublicKey: string;
  /**
  * The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#user_private_key_secret_version DataformRepository#user_private_key_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userPrivateKeySecretVersion: string;
}

export function dataformRepositoryGitRemoteSettingsSshAuthenticationConfigToTerraform(struct?: DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference | DataformRepositoryGitRemoteSettingsSshAuthenticationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_public_key: cdktn.stringToTerraform(struct!.hostPublicKey),
    user_private_key_secret_version: cdktn.stringToTerraform(struct!.userPrivateKeySecretVersion),
  }
}


export function dataformRepositoryGitRemoteSettingsSshAuthenticationConfigToHclTerraform(struct?: DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference | DataformRepositoryGitRemoteSettingsSshAuthenticationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_public_key: {
      value: cdktn.stringToHclTerraform(struct!.hostPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_private_key_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.userPrivateKeySecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataformRepositoryGitRemoteSettingsSshAuthenticationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPublicKey = this._hostPublicKey;
    }
    if (this._userPrivateKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPrivateKeySecretVersion = this._userPrivateKeySecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataformRepositoryGitRemoteSettingsSshAuthenticationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostPublicKey = undefined;
      this._userPrivateKeySecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostPublicKey = value.hostPublicKey;
      this._userPrivateKeySecretVersion = value.userPrivateKeySecretVersion;
    }
  }

  // host_public_key - computed: false, optional: false, required: true
  private _hostPublicKey?: string; 
  public get hostPublicKey() {
    return this.getStringAttribute('host_public_key');
  }
  public set hostPublicKey(value: string) {
    this._hostPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPublicKeyInput() {
    return this._hostPublicKey;
  }

  // user_private_key_secret_version - computed: false, optional: false, required: true
  private _userPrivateKeySecretVersion?: string; 
  public get userPrivateKeySecretVersion() {
    return this.getStringAttribute('user_private_key_secret_version');
  }
  public set userPrivateKeySecretVersion(value: string) {
    this._userPrivateKeySecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrivateKeySecretVersionInput() {
    return this._userPrivateKeySecretVersion;
  }
}
export interface DataformRepositoryGitRemoteSettings {
  /**
  * The name of the Secret Manager secret version to use as an authentication token for Git operations. This secret is for assigning with HTTPS only(for SSH use 'ssh_authentication_config'). Must be in the format projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#authentication_token_secret_version DataformRepository#authentication_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly authenticationTokenSecretVersion?: string;
  /**
  * The Git remote's default branch name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#default_branch DataformRepository#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * The name of the Developer Connect GitRepositoryLink to use for machine credentials. Must be in the format projects/* /locations/* /connections/* /gitRepositoryLinks/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#git_repository_link DataformRepository#git_repository_link}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly gitRepositoryLink?: string;
  /**
  * The Git remote's URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#url DataformRepository#url}
  */
  readonly url: string;
  /**
  * ssh_authentication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#ssh_authentication_config DataformRepository#ssh_authentication_config}
  */
  readonly sshAuthenticationConfig?: DataformRepositoryGitRemoteSettingsSshAuthenticationConfig;
}

export function dataformRepositoryGitRemoteSettingsToTerraform(struct?: DataformRepositoryGitRemoteSettingsOutputReference | DataformRepositoryGitRemoteSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_token_secret_version: cdktn.stringToTerraform(struct!.authenticationTokenSecretVersion),
    default_branch: cdktn.stringToTerraform(struct!.defaultBranch),
    git_repository_link: cdktn.stringToTerraform(struct!.gitRepositoryLink),
    url: cdktn.stringToTerraform(struct!.url),
    ssh_authentication_config: dataformRepositoryGitRemoteSettingsSshAuthenticationConfigToTerraform(struct!.sshAuthenticationConfig),
  }
}


export function dataformRepositoryGitRemoteSettingsToHclTerraform(struct?: DataformRepositoryGitRemoteSettingsOutputReference | DataformRepositoryGitRemoteSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_token_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.authenticationTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_branch: {
      value: cdktn.stringToHclTerraform(struct!.defaultBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_repository_link: {
      value: cdktn.stringToHclTerraform(struct!.gitRepositoryLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_authentication_config: {
      value: dataformRepositoryGitRemoteSettingsSshAuthenticationConfigToHclTerraform(struct!.sshAuthenticationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataformRepositoryGitRemoteSettingsSshAuthenticationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataformRepositoryGitRemoteSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataformRepositoryGitRemoteSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTokenSecretVersion = this._authenticationTokenSecretVersion;
    }
    if (this._defaultBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBranch = this._defaultBranch;
    }
    if (this._gitRepositoryLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepositoryLink = this._gitRepositoryLink;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._sshAuthenticationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAuthenticationConfig = this._sshAuthenticationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataformRepositoryGitRemoteSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationTokenSecretVersion = undefined;
      this._defaultBranch = undefined;
      this._gitRepositoryLink = undefined;
      this._url = undefined;
      this._sshAuthenticationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationTokenSecretVersion = value.authenticationTokenSecretVersion;
      this._defaultBranch = value.defaultBranch;
      this._gitRepositoryLink = value.gitRepositoryLink;
      this._url = value.url;
      this._sshAuthenticationConfig.internalValue = value.sshAuthenticationConfig;
    }
  }

  // authentication_token_secret_version - computed: false, optional: true, required: false
  private _authenticationTokenSecretVersion?: string; 
  public get authenticationTokenSecretVersion() {
    return this.getStringAttribute('authentication_token_secret_version');
  }
  public set authenticationTokenSecretVersion(value: string) {
    this._authenticationTokenSecretVersion = value;
  }
  public resetAuthenticationTokenSecretVersion() {
    this._authenticationTokenSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenSecretVersionInput() {
    return this._authenticationTokenSecretVersion;
  }

  // default_branch - computed: false, optional: false, required: true
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // git_repository_link - computed: false, optional: true, required: false
  private _gitRepositoryLink?: string; 
  public get gitRepositoryLink() {
    return this.getStringAttribute('git_repository_link');
  }
  public set gitRepositoryLink(value: string) {
    this._gitRepositoryLink = value;
  }
  public resetGitRepositoryLink() {
    this._gitRepositoryLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryLinkInput() {
    return this._gitRepositoryLink;
  }

  // token_status - computed: true, optional: false, required: false
  public get tokenStatus() {
    return this.getStringAttribute('token_status');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // ssh_authentication_config - computed: false, optional: true, required: false
  private _sshAuthenticationConfig = new DataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference(this, "ssh_authentication_config");
  public get sshAuthenticationConfig() {
    return this._sshAuthenticationConfig;
  }
  public putSshAuthenticationConfig(value: DataformRepositoryGitRemoteSettingsSshAuthenticationConfig) {
    this._sshAuthenticationConfig.internalValue = value;
  }
  public resetSshAuthenticationConfig() {
    this._sshAuthenticationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthenticationConfigInput() {
    return this._sshAuthenticationConfig.internalValue;
  }
}
export interface DataformRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#create DataformRepository#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#delete DataformRepository#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#update DataformRepository#update}
  */
  readonly update?: string;
}

export function dataformRepositoryTimeoutsToTerraform(struct?: DataformRepositoryTimeouts | cdktn.IResolvable): any {
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


export function dataformRepositoryTimeoutsToHclTerraform(struct?: DataformRepositoryTimeouts | cdktn.IResolvable): any {
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

export class DataformRepositoryTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataformRepositoryTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataformRepositoryTimeouts | cdktn.IResolvable | undefined) {
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
export interface DataformRepositoryWorkspaceCompilationOverrides {
  /**
  * The default database (Google Cloud project ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#default_database DataformRepository#default_database}
  */
  readonly defaultDatabase?: string;
  /**
  * The suffix that should be appended to all schema (BigQuery dataset ID) names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#schema_suffix DataformRepository#schema_suffix}
  */
  readonly schemaSuffix?: string;
  /**
  * The prefix that should be prepended to all table names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#table_prefix DataformRepository#table_prefix}
  */
  readonly tablePrefix?: string;
}

export function dataformRepositoryWorkspaceCompilationOverridesToTerraform(struct?: DataformRepositoryWorkspaceCompilationOverridesOutputReference | DataformRepositoryWorkspaceCompilationOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_database: cdktn.stringToTerraform(struct!.defaultDatabase),
    schema_suffix: cdktn.stringToTerraform(struct!.schemaSuffix),
    table_prefix: cdktn.stringToTerraform(struct!.tablePrefix),
  }
}


export function dataformRepositoryWorkspaceCompilationOverridesToHclTerraform(struct?: DataformRepositoryWorkspaceCompilationOverridesOutputReference | DataformRepositoryWorkspaceCompilationOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_database: {
      value: cdktn.stringToHclTerraform(struct!.defaultDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_suffix: {
      value: cdktn.stringToHclTerraform(struct!.schemaSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_prefix: {
      value: cdktn.stringToHclTerraform(struct!.tablePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataformRepositoryWorkspaceCompilationOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataformRepositoryWorkspaceCompilationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDatabase = this._defaultDatabase;
    }
    if (this._schemaSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaSuffix = this._schemaSuffix;
    }
    if (this._tablePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePrefix = this._tablePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataformRepositoryWorkspaceCompilationOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultDatabase = undefined;
      this._schemaSuffix = undefined;
      this._tablePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultDatabase = value.defaultDatabase;
      this._schemaSuffix = value.schemaSuffix;
      this._tablePrefix = value.tablePrefix;
    }
  }

  // default_database - computed: false, optional: true, required: false
  private _defaultDatabase?: string; 
  public get defaultDatabase() {
    return this.getStringAttribute('default_database');
  }
  public set defaultDatabase(value: string) {
    this._defaultDatabase = value;
  }
  public resetDefaultDatabase() {
    this._defaultDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatabaseInput() {
    return this._defaultDatabase;
  }

  // schema_suffix - computed: false, optional: true, required: false
  private _schemaSuffix?: string; 
  public get schemaSuffix() {
    return this.getStringAttribute('schema_suffix');
  }
  public set schemaSuffix(value: string) {
    this._schemaSuffix = value;
  }
  public resetSchemaSuffix() {
    this._schemaSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSuffixInput() {
    return this._schemaSuffix;
  }

  // table_prefix - computed: false, optional: true, required: false
  private _tablePrefix?: string; 
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
  public set tablePrefix(value: string) {
    this._tablePrefix = value;
  }
  public resetTablePrefix() {
    this._tablePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrefixInput() {
    return this._tablePrefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository google_dataform_repository}
*/
export class DataformRepository extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataform_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataformRepository resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataformRepository to import
  * @param importFromId The id of the existing DataformRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataformRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dataform_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataform_repository google_dataform_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataformRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataformRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataform_repository',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._name = config.name;
    this._npmrcEnvironmentVariablesSecretVersion = config.npmrcEnvironmentVariablesSecretVersion;
    this._project = config.project;
    this._region = config.region;
    this._serviceAccount = config.serviceAccount;
    this._gitRemoteSettings.internalValue = config.gitRemoteSettings;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceCompilationOverrides.internalValue = config.workspaceCompilationOverrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // npmrc_environment_variables_secret_version - computed: false, optional: true, required: false
  private _npmrcEnvironmentVariablesSecretVersion?: string; 
  public get npmrcEnvironmentVariablesSecretVersion() {
    return this.getStringAttribute('npmrc_environment_variables_secret_version');
  }
  public set npmrcEnvironmentVariablesSecretVersion(value: string) {
    this._npmrcEnvironmentVariablesSecretVersion = value;
  }
  public resetNpmrcEnvironmentVariablesSecretVersion() {
    this._npmrcEnvironmentVariablesSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npmrcEnvironmentVariablesSecretVersionInput() {
    return this._npmrcEnvironmentVariablesSecretVersion;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // git_remote_settings - computed: false, optional: true, required: false
  private _gitRemoteSettings = new DataformRepositoryGitRemoteSettingsOutputReference(this, "git_remote_settings");
  public get gitRemoteSettings() {
    return this._gitRemoteSettings;
  }
  public putGitRemoteSettings(value: DataformRepositoryGitRemoteSettings) {
    this._gitRemoteSettings.internalValue = value;
  }
  public resetGitRemoteSettings() {
    this._gitRemoteSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRemoteSettingsInput() {
    return this._gitRemoteSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataformRepositoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataformRepositoryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workspace_compilation_overrides - computed: false, optional: true, required: false
  private _workspaceCompilationOverrides = new DataformRepositoryWorkspaceCompilationOverridesOutputReference(this, "workspace_compilation_overrides");
  public get workspaceCompilationOverrides() {
    return this._workspaceCompilationOverrides;
  }
  public putWorkspaceCompilationOverrides(value: DataformRepositoryWorkspaceCompilationOverrides) {
    this._workspaceCompilationOverrides.internalValue = value;
  }
  public resetWorkspaceCompilationOverrides() {
    this._workspaceCompilationOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCompilationOverridesInput() {
    return this._workspaceCompilationOverrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      kms_key_name: cdktn.stringToTerraform(this._kmsKeyName),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      name: cdktn.stringToTerraform(this._name),
      npmrc_environment_variables_secret_version: cdktn.stringToTerraform(this._npmrcEnvironmentVariablesSecretVersion),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      service_account: cdktn.stringToTerraform(this._serviceAccount),
      git_remote_settings: dataformRepositoryGitRemoteSettingsToTerraform(this._gitRemoteSettings.internalValue),
      timeouts: dataformRepositoryTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_compilation_overrides: dataformRepositoryWorkspaceCompilationOverridesToTerraform(this._workspaceCompilationOverrides.internalValue),
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
      kms_key_name: {
        value: cdktn.stringToHclTerraform(this._kmsKeyName),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      npmrc_environment_variables_secret_version: {
        value: cdktn.stringToHclTerraform(this._npmrcEnvironmentVariablesSecretVersion),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
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
      git_remote_settings: {
        value: dataformRepositoryGitRemoteSettingsToHclTerraform(this._gitRemoteSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataformRepositoryGitRemoteSettingsList",
      },
      timeouts: {
        value: dataformRepositoryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataformRepositoryTimeouts",
      },
      workspace_compilation_overrides: {
        value: dataformRepositoryWorkspaceCompilationOverridesToHclTerraform(this._workspaceCompilationOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataformRepositoryWorkspaceCompilationOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
