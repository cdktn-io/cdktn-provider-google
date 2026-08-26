/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ClouddeployCustomTargetTypeConfig extends cdktn.TerraformMetaArguments {
  /**
  * User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#annotations ClouddeployCustomTargetType#annotations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#deletion_policy ClouddeployCustomTargetType#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description of the 'CustomTargetType'. Max length is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#description ClouddeployCustomTargetType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#id ClouddeployCustomTargetType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#labels ClouddeployCustomTargetType#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#location ClouddeployCustomTargetType#location}
  */
  readonly location: string;
  /**
  * Name of the 'CustomTargetType'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#name ClouddeployCustomTargetType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#project ClouddeployCustomTargetType#project}
  */
  readonly project?: string;
  /**
  * custom_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#custom_actions ClouddeployCustomTargetType#custom_actions}
  */
  readonly customActions?: ClouddeployCustomTargetTypeCustomActions;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#tasks ClouddeployCustomTargetType#tasks}
  */
  readonly tasks?: ClouddeployCustomTargetTypeTasks;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#timeouts ClouddeployCustomTargetType#timeouts}
  */
  readonly timeouts?: ClouddeployCustomTargetTypeTimeouts;
}
export interface ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit {
  /**
  * Relative path from the repository root to the Skaffold file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#path ClouddeployCustomTargetType#path}
  */
  readonly path?: string;
  /**
  * Git ref the package should be cloned from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#ref ClouddeployCustomTargetType#ref}
  */
  readonly ref?: string;
  /**
  * Git repository the package should be cloned from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#repo ClouddeployCustomTargetType#repo}
  */
  readonly repo: string;
}

export function clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitToTerraform(struct?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference | ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    ref: cdktn.stringToTerraform(struct!.ref),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitToHclTerraform(struct?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference | ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktn.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktn.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._ref = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._ref = value.ref;
      this._repo = value.repo;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo {
  /**
  * Relative path from the repository root to the Skaffold file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#path ClouddeployCustomTargetType#path}
  */
  readonly path?: string;
  /**
  * Branch or tag to use when cloning the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#ref ClouddeployCustomTargetType#ref}
  */
  readonly ref?: string;
  /**
  * Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#repository ClouddeployCustomTargetType#repository}
  */
  readonly repository: string;
}

export function clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoToTerraform(struct?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference | ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    ref: cdktn.stringToTerraform(struct!.ref),
    repository: cdktn.stringToTerraform(struct!.repository),
  }
}


export function clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoToHclTerraform(struct?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference | ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktn.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktn.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._ref = undefined;
      this._repository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._ref = value.ref;
      this._repository = value.repository;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}
export interface ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage {
  /**
  * Relative path from the source to the Skaffold file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#path ClouddeployCustomTargetType#path}
  */
  readonly path?: string;
  /**
  * Cloud Storage source paths to copy recursively. For example, providing 'gs://my-bucket/dir/configs/*' will result in Skaffold copying all files within the 'dir/configs' directory in the bucket 'my-bucket'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#source ClouddeployCustomTargetType#source}
  */
  readonly source: string;
}

export function clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageToTerraform(struct?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference | ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageToHclTerraform(struct?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference | ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._source = value.source;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules {
  /**
  * The Skaffold Config modules to use from the specified source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#configs ClouddeployCustomTargetType#configs}
  */
  readonly configs?: string[];
  /**
  * git block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#git ClouddeployCustomTargetType#git}
  */
  readonly git?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit;
  /**
  * google_cloud_build_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#google_cloud_build_repo ClouddeployCustomTargetType#google_cloud_build_repo}
  */
  readonly googleCloudBuildRepo?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo;
  /**
  * google_cloud_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#google_cloud_storage ClouddeployCustomTargetType#google_cloud_storage}
  */
  readonly googleCloudStorage?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage;
}

export function clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesToTerraform(struct?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.configs),
    git: clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitToTerraform(struct!.git),
    google_cloud_build_repo: clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoToTerraform(struct!.googleCloudBuildRepo),
    google_cloud_storage: clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageToTerraform(struct!.googleCloudStorage),
  }
}


export function clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesToHclTerraform(struct?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configs: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.configs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    git: {
      value: clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitToHclTerraform(struct!.git),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitList",
    },
    google_cloud_build_repo: {
      value: clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoToHclTerraform(struct!.googleCloudBuildRepo),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoList",
    },
    google_cloud_storage: {
      value: clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageToHclTerraform(struct!.googleCloudStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configs !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs;
    }
    if (this._git?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.git = this._git?.internalValue;
    }
    if (this._googleCloudBuildRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudBuildRepo = this._googleCloudBuildRepo?.internalValue;
    }
    if (this._googleCloudStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorage = this._googleCloudStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configs = undefined;
      this._git.internalValue = undefined;
      this._googleCloudBuildRepo.internalValue = undefined;
      this._googleCloudStorage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configs = value.configs;
      this._git.internalValue = value.git;
      this._googleCloudBuildRepo.internalValue = value.googleCloudBuildRepo;
      this._googleCloudStorage.internalValue = value.googleCloudStorage;
    }
  }

  // configs - computed: false, optional: true, required: false
  private _configs?: string[]; 
  public get configs() {
    return this.getListAttribute('configs');
  }
  public set configs(value: string[]) {
    this._configs = value;
  }
  public resetConfigs() {
    this._configs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs;
  }

  // git - computed: false, optional: true, required: false
  private _git = new ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference(this, "git");
  public get git() {
    return this._git;
  }
  public putGit(value: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit) {
    this._git.internalValue = value;
  }
  public resetGit() {
    this._git.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitInput() {
    return this._git.internalValue;
  }

  // google_cloud_build_repo - computed: false, optional: true, required: false
  private _googleCloudBuildRepo = new ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference(this, "google_cloud_build_repo");
  public get googleCloudBuildRepo() {
    return this._googleCloudBuildRepo;
  }
  public putGoogleCloudBuildRepo(value: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo) {
    this._googleCloudBuildRepo.internalValue = value;
  }
  public resetGoogleCloudBuildRepo() {
    this._googleCloudBuildRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudBuildRepoInput() {
    return this._googleCloudBuildRepo.internalValue;
  }

  // google_cloud_storage - computed: false, optional: true, required: false
  private _googleCloudStorage = new ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference(this, "google_cloud_storage");
  public get googleCloudStorage() {
    return this._googleCloudStorage;
  }
  public putGoogleCloudStorage(value: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage) {
    this._googleCloudStorage.internalValue = value;
  }
  public resetGoogleCloudStorage() {
    this._googleCloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageInput() {
    return this._googleCloudStorage.internalValue;
  }
}

export class ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList extends cdktn.ComplexList {
  public internalValue? : ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[] | cdktn.IResolvable

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
  public get(index: number): ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference {
    return new ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployCustomTargetTypeCustomActions {
  /**
  * The Skaffold custom action responsible for deploy operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#deploy_action ClouddeployCustomTargetType#deploy_action}
  */
  readonly deployAction: string;
  /**
  * The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via 'skaffold render'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#render_action ClouddeployCustomTargetType#render_action}
  */
  readonly renderAction?: string;
  /**
  * include_skaffold_modules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#include_skaffold_modules ClouddeployCustomTargetType#include_skaffold_modules}
  */
  readonly includeSkaffoldModules?: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[] | cdktn.IResolvable;
}

export function clouddeployCustomTargetTypeCustomActionsToTerraform(struct?: ClouddeployCustomTargetTypeCustomActionsOutputReference | ClouddeployCustomTargetTypeCustomActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deploy_action: cdktn.stringToTerraform(struct!.deployAction),
    render_action: cdktn.stringToTerraform(struct!.renderAction),
    include_skaffold_modules: cdktn.listMapper(clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesToTerraform, true)(struct!.includeSkaffoldModules),
  }
}


export function clouddeployCustomTargetTypeCustomActionsToHclTerraform(struct?: ClouddeployCustomTargetTypeCustomActionsOutputReference | ClouddeployCustomTargetTypeCustomActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deploy_action: {
      value: cdktn.stringToHclTerraform(struct!.deployAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    render_action: {
      value: cdktn.stringToHclTerraform(struct!.renderAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_skaffold_modules: {
      value: cdktn.listMapperHcl(clouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesToHclTerraform, true)(struct!.includeSkaffoldModules),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployCustomTargetTypeCustomActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployCustomTargetTypeCustomActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployAction = this._deployAction;
    }
    if (this._renderAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.renderAction = this._renderAction;
    }
    if (this._includeSkaffoldModules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSkaffoldModules = this._includeSkaffoldModules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployCustomTargetTypeCustomActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deployAction = undefined;
      this._renderAction = undefined;
      this._includeSkaffoldModules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deployAction = value.deployAction;
      this._renderAction = value.renderAction;
      this._includeSkaffoldModules.internalValue = value.includeSkaffoldModules;
    }
  }

  // deploy_action - computed: false, optional: false, required: true
  private _deployAction?: string; 
  public get deployAction() {
    return this.getStringAttribute('deploy_action');
  }
  public set deployAction(value: string) {
    this._deployAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployActionInput() {
    return this._deployAction;
  }

  // render_action - computed: false, optional: true, required: false
  private _renderAction?: string; 
  public get renderAction() {
    return this.getStringAttribute('render_action');
  }
  public set renderAction(value: string) {
    this._renderAction = value;
  }
  public resetRenderAction() {
    this._renderAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderActionInput() {
    return this._renderAction;
  }

  // include_skaffold_modules - computed: false, optional: true, required: false
  private _includeSkaffoldModules = new ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList(this, "include_skaffold_modules", false);
  public get includeSkaffoldModules() {
    return this._includeSkaffoldModules;
  }
  public putIncludeSkaffoldModules(value: ClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules[] | cdktn.IResolvable) {
    this._includeSkaffoldModules.internalValue = value;
  }
  public resetIncludeSkaffoldModules() {
    this._includeSkaffoldModules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSkaffoldModulesInput() {
    return this._includeSkaffoldModules.internalValue;
  }
}
export interface ClouddeployCustomTargetTypeTasksDeployContainer {
  /**
  * Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#args ClouddeployCustomTargetType#args}
  */
  readonly args?: string[];
  /**
  * Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#command ClouddeployCustomTargetType#command}
  */
  readonly command?: string[];
  /**
  * Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#env ClouddeployCustomTargetType#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#image ClouddeployCustomTargetType#image}
  */
  readonly image: string;
}

export function clouddeployCustomTargetTypeTasksDeployContainerToTerraform(struct?: ClouddeployCustomTargetTypeTasksDeployContainerOutputReference | ClouddeployCustomTargetTypeTasksDeployContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function clouddeployCustomTargetTypeTasksDeployContainerToHclTerraform(struct?: ClouddeployCustomTargetTypeTasksDeployContainerOutputReference | ClouddeployCustomTargetTypeTasksDeployContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployCustomTargetTypeTasksDeployContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployCustomTargetTypeTasksDeployContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployCustomTargetTypeTasksDeployContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClouddeployCustomTargetTypeTasksDeploy {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#container ClouddeployCustomTargetType#container}
  */
  readonly container?: ClouddeployCustomTargetTypeTasksDeployContainer;
}

export function clouddeployCustomTargetTypeTasksDeployToTerraform(struct?: ClouddeployCustomTargetTypeTasksDeployOutputReference | ClouddeployCustomTargetTypeTasksDeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container: clouddeployCustomTargetTypeTasksDeployContainerToTerraform(struct!.container),
  }
}


export function clouddeployCustomTargetTypeTasksDeployToHclTerraform(struct?: ClouddeployCustomTargetTypeTasksDeployOutputReference | ClouddeployCustomTargetTypeTasksDeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container: {
      value: clouddeployCustomTargetTypeTasksDeployContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployCustomTargetTypeTasksDeployContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployCustomTargetTypeTasksDeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployCustomTargetTypeTasksDeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployCustomTargetTypeTasksDeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new ClouddeployCustomTargetTypeTasksDeployContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ClouddeployCustomTargetTypeTasksDeployContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}
export interface ClouddeployCustomTargetTypeTasksRenderContainer {
  /**
  * Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#args ClouddeployCustomTargetType#args}
  */
  readonly args?: string[];
  /**
  * Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#command ClouddeployCustomTargetType#command}
  */
  readonly command?: string[];
  /**
  * Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#env ClouddeployCustomTargetType#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#image ClouddeployCustomTargetType#image}
  */
  readonly image: string;
}

export function clouddeployCustomTargetTypeTasksRenderContainerToTerraform(struct?: ClouddeployCustomTargetTypeTasksRenderContainerOutputReference | ClouddeployCustomTargetTypeTasksRenderContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function clouddeployCustomTargetTypeTasksRenderContainerToHclTerraform(struct?: ClouddeployCustomTargetTypeTasksRenderContainerOutputReference | ClouddeployCustomTargetTypeTasksRenderContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployCustomTargetTypeTasksRenderContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployCustomTargetTypeTasksRenderContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployCustomTargetTypeTasksRenderContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClouddeployCustomTargetTypeTasksRender {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#container ClouddeployCustomTargetType#container}
  */
  readonly container?: ClouddeployCustomTargetTypeTasksRenderContainer;
}

export function clouddeployCustomTargetTypeTasksRenderToTerraform(struct?: ClouddeployCustomTargetTypeTasksRenderOutputReference | ClouddeployCustomTargetTypeTasksRender): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container: clouddeployCustomTargetTypeTasksRenderContainerToTerraform(struct!.container),
  }
}


export function clouddeployCustomTargetTypeTasksRenderToHclTerraform(struct?: ClouddeployCustomTargetTypeTasksRenderOutputReference | ClouddeployCustomTargetTypeTasksRender): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container: {
      value: clouddeployCustomTargetTypeTasksRenderContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployCustomTargetTypeTasksRenderContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployCustomTargetTypeTasksRenderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployCustomTargetTypeTasksRender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployCustomTargetTypeTasksRender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new ClouddeployCustomTargetTypeTasksRenderContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ClouddeployCustomTargetTypeTasksRenderContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}
export interface ClouddeployCustomTargetTypeTasks {
  /**
  * deploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#deploy ClouddeployCustomTargetType#deploy}
  */
  readonly deploy: ClouddeployCustomTargetTypeTasksDeploy;
  /**
  * render block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#render ClouddeployCustomTargetType#render}
  */
  readonly render?: ClouddeployCustomTargetTypeTasksRender;
}

export function clouddeployCustomTargetTypeTasksToTerraform(struct?: ClouddeployCustomTargetTypeTasksOutputReference | ClouddeployCustomTargetTypeTasks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deploy: clouddeployCustomTargetTypeTasksDeployToTerraform(struct!.deploy),
    render: clouddeployCustomTargetTypeTasksRenderToTerraform(struct!.render),
  }
}


export function clouddeployCustomTargetTypeTasksToHclTerraform(struct?: ClouddeployCustomTargetTypeTasksOutputReference | ClouddeployCustomTargetTypeTasks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deploy: {
      value: clouddeployCustomTargetTypeTasksDeployToHclTerraform(struct!.deploy),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployCustomTargetTypeTasksDeployList",
    },
    render: {
      value: clouddeployCustomTargetTypeTasksRenderToHclTerraform(struct!.render),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddeployCustomTargetTypeTasksRenderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddeployCustomTargetTypeTasksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployCustomTargetTypeTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploy = this._deploy?.internalValue;
    }
    if (this._render?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.render = this._render?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployCustomTargetTypeTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploy.internalValue = undefined;
      this._render.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploy.internalValue = value.deploy;
      this._render.internalValue = value.render;
    }
  }

  // deploy - computed: false, optional: false, required: true
  private _deploy = new ClouddeployCustomTargetTypeTasksDeployOutputReference(this, "deploy");
  public get deploy() {
    return this._deploy;
  }
  public putDeploy(value: ClouddeployCustomTargetTypeTasksDeploy) {
    this._deploy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy.internalValue;
  }

  // render - computed: false, optional: true, required: false
  private _render = new ClouddeployCustomTargetTypeTasksRenderOutputReference(this, "render");
  public get render() {
    return this._render;
  }
  public putRender(value: ClouddeployCustomTargetTypeTasksRender) {
    this._render.internalValue = value;
  }
  public resetRender() {
    this._render.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderInput() {
    return this._render.internalValue;
  }
}
export interface ClouddeployCustomTargetTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#create ClouddeployCustomTargetType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#delete ClouddeployCustomTargetType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#update ClouddeployCustomTargetType#update}
  */
  readonly update?: string;
}

export function clouddeployCustomTargetTypeTimeoutsToTerraform(struct?: ClouddeployCustomTargetTypeTimeouts | cdktn.IResolvable): any {
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


export function clouddeployCustomTargetTypeTimeoutsToHclTerraform(struct?: ClouddeployCustomTargetTypeTimeouts | cdktn.IResolvable): any {
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

export class ClouddeployCustomTargetTypeTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClouddeployCustomTargetTypeTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ClouddeployCustomTargetTypeTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type google_clouddeploy_custom_target_type}
*/
export class ClouddeployCustomTargetType extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_clouddeploy_custom_target_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ClouddeployCustomTargetType resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClouddeployCustomTargetType to import
  * @param importFromId The id of the existing ClouddeployCustomTargetType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClouddeployCustomTargetType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_clouddeploy_custom_target_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/clouddeploy_custom_target_type google_clouddeploy_custom_target_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClouddeployCustomTargetTypeConfig
  */
  public constructor(scope: Construct, id: string, config: ClouddeployCustomTargetTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_clouddeploy_custom_target_type',
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
    this._annotations = config.annotations;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._customActions.internalValue = config.customActions;
    this._tasks.internalValue = config.tasks;
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

  // custom_target_type_id - computed: true, optional: false, required: false
  public get customTargetTypeId() {
    return this.getStringAttribute('custom_target_type_id');
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_actions - computed: false, optional: true, required: false
  private _customActions = new ClouddeployCustomTargetTypeCustomActionsOutputReference(this, "custom_actions");
  public get customActions() {
    return this._customActions;
  }
  public putCustomActions(value: ClouddeployCustomTargetTypeCustomActions) {
    this._customActions.internalValue = value;
  }
  public resetCustomActions() {
    this._customActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionsInput() {
    return this._customActions.internalValue;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new ClouddeployCustomTargetTypeTasksOutputReference(this, "tasks");
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: ClouddeployCustomTargetTypeTasks) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClouddeployCustomTargetTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClouddeployCustomTargetTypeTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      custom_actions: clouddeployCustomTargetTypeCustomActionsToTerraform(this._customActions.internalValue),
      tasks: clouddeployCustomTargetTypeTasksToTerraform(this._tasks.internalValue),
      timeouts: clouddeployCustomTargetTypeTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      custom_actions: {
        value: clouddeployCustomTargetTypeCustomActionsToHclTerraform(this._customActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddeployCustomTargetTypeCustomActionsList",
      },
      tasks: {
        value: clouddeployCustomTargetTypeTasksToHclTerraform(this._tasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddeployCustomTargetTypeTasksList",
      },
      timeouts: {
        value: clouddeployCustomTargetTypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClouddeployCustomTargetTypeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
