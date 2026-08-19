/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Cloudfunctions2FunctionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#deletion_policy Cloudfunctions2Function#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User-provided description of a function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#description Cloudfunctions2Function#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#id Cloudfunctions2Function#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.
  * It must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#kms_key_name Cloudfunctions2Function#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * A set of key/value label pairs associated with this Cloud Function.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#labels Cloudfunctions2Function#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of this cloud function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#location Cloudfunctions2Function#location}
  */
  readonly location: string;
  /**
  * A user-defined name of the function. Function names must
  * be unique globally and match pattern 'projects/* /locations/* /functions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#name Cloudfunctions2Function#name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#project Cloudfunctions2Function#project}
  */
  readonly project?: string;
  /**
  * build_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#build_config Cloudfunctions2Function#build_config}
  */
  readonly buildConfig?: Cloudfunctions2FunctionBuildConfig;
  /**
  * event_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#event_trigger Cloudfunctions2Function#event_trigger}
  */
  readonly eventTrigger?: Cloudfunctions2FunctionEventTrigger;
  /**
  * service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#service_config Cloudfunctions2Function#service_config}
  */
  readonly serviceConfig?: Cloudfunctions2FunctionServiceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#timeouts Cloudfunctions2Function#timeouts}
  */
  readonly timeouts?: Cloudfunctions2FunctionTimeouts;
}
export interface Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy {
}

export function cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyToTerraform(struct?: Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference | Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyToHclTerraform(struct?: Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference | Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy {
}

export function cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyToTerraform(struct?: Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference | Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyToHclTerraform(struct?: Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference | Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
}
export interface Cloudfunctions2FunctionBuildConfigSourceRepoSource {
  /**
  * Regex matching branches to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#branch_name Cloudfunctions2Function#branch_name}
  */
  readonly branchName?: string;
  /**
  * Regex matching tags to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#commit_sha Cloudfunctions2Function#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * Directory, relative to the source root, in which to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#dir Cloudfunctions2Function#dir}
  */
  readonly dir?: string;
  /**
  * Only trigger a build if the revision regex does
  * NOT match the revision regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#invert_regex Cloudfunctions2Function#invert_regex}
  */
  readonly invertRegex?: boolean | cdktn.IResolvable;
  /**
  * ID of the project that owns the Cloud Source Repository. If omitted, the
  * project ID requesting the build is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the Cloud Source Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#repo_name Cloudfunctions2Function#repo_name}
  */
  readonly repoName?: string;
  /**
  * Regex matching tags to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#tag_name Cloudfunctions2Function#tag_name}
  */
  readonly tagName?: string;
}

export function cloudfunctions2FunctionBuildConfigSourceRepoSourceToTerraform(struct?: Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference | Cloudfunctions2FunctionBuildConfigSourceRepoSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    branch_name: cdktn.stringToTerraform(struct!.branchName),
    commit_sha: cdktn.stringToTerraform(struct!.commitSha),
    dir: cdktn.stringToTerraform(struct!.dir),
    invert_regex: cdktn.booleanToTerraform(struct!.invertRegex),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    repo_name: cdktn.stringToTerraform(struct!.repoName),
    tag_name: cdktn.stringToTerraform(struct!.tagName),
  }
}


export function cloudfunctions2FunctionBuildConfigSourceRepoSourceToHclTerraform(struct?: Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference | Cloudfunctions2FunctionBuildConfigSourceRepoSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    branch_name: {
      value: cdktn.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_sha: {
      value: cdktn.stringToHclTerraform(struct!.commitSha),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dir: {
      value: cdktn.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_regex: {
      value: cdktn.booleanToHclTerraform(struct!.invertRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_name: {
      value: cdktn.stringToHclTerraform(struct!.repoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktn.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cloudfunctions2FunctionBuildConfigSourceRepoSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._commitSha !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitSha = this._commitSha;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionBuildConfigSourceRepoSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchName = undefined;
      this._commitSha = undefined;
      this._dir = undefined;
      this._invertRegex = undefined;
      this._projectId = undefined;
      this._repoName = undefined;
      this._tagName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchName = value.branchName;
      this._commitSha = value.commitSha;
      this._dir = value.dir;
      this._invertRegex = value.invertRegex;
      this._projectId = value.projectId;
      this._repoName = value.repoName;
      this._tagName = value.tagName;
    }
  }

  // branch_name - computed: false, optional: true, required: false
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  public resetBranchName() {
    this._branchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // commit_sha - computed: false, optional: true, required: false
  private _commitSha?: string; 
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }
  public set commitSha(value: string) {
    this._commitSha = value;
  }
  public resetCommitSha() {
    this._commitSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitShaInput() {
    return this._commitSha;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktn.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }
  public set invertRegex(value: boolean | cdktn.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // tag_name - computed: false, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}
export interface Cloudfunctions2FunctionBuildConfigSourceStorageSource {
  /**
  * Google Cloud Storage bucket containing the source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#bucket Cloudfunctions2Function#bucket}
  */
  readonly bucket?: string;
  /**
  * Google Cloud Storage generation for the object. If the generation
  * is omitted, the latest generation will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#generation Cloudfunctions2Function#generation}
  */
  readonly generation?: number;
  /**
  * Google Cloud Storage object containing the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#object Cloudfunctions2Function#object}
  */
  readonly object?: string;
}

export function cloudfunctions2FunctionBuildConfigSourceStorageSourceToTerraform(struct?: Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference | Cloudfunctions2FunctionBuildConfigSourceStorageSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    generation: cdktn.numberToTerraform(struct!.generation),
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function cloudfunctions2FunctionBuildConfigSourceStorageSourceToHclTerraform(struct?: Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference | Cloudfunctions2FunctionBuildConfigSourceStorageSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation: {
      value: cdktn.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cloudfunctions2FunctionBuildConfigSourceStorageSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionBuildConfigSourceStorageSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: true, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface Cloudfunctions2FunctionBuildConfigSource {
  /**
  * repo_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#repo_source Cloudfunctions2Function#repo_source}
  */
  readonly repoSource?: Cloudfunctions2FunctionBuildConfigSourceRepoSource;
  /**
  * storage_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#storage_source Cloudfunctions2Function#storage_source}
  */
  readonly storageSource?: Cloudfunctions2FunctionBuildConfigSourceStorageSource;
}

export function cloudfunctions2FunctionBuildConfigSourceToTerraform(struct?: Cloudfunctions2FunctionBuildConfigSourceOutputReference | Cloudfunctions2FunctionBuildConfigSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repo_source: cloudfunctions2FunctionBuildConfigSourceRepoSourceToTerraform(struct!.repoSource),
    storage_source: cloudfunctions2FunctionBuildConfigSourceStorageSourceToTerraform(struct!.storageSource),
  }
}


export function cloudfunctions2FunctionBuildConfigSourceToHclTerraform(struct?: Cloudfunctions2FunctionBuildConfigSourceOutputReference | Cloudfunctions2FunctionBuildConfigSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repo_source: {
      value: cloudfunctions2FunctionBuildConfigSourceRepoSourceToHclTerraform(struct!.repoSource),
      isBlock: true,
      type: "list",
      storageClassType: "Cloudfunctions2FunctionBuildConfigSourceRepoSourceList",
    },
    storage_source: {
      value: cloudfunctions2FunctionBuildConfigSourceStorageSourceToHclTerraform(struct!.storageSource),
      isBlock: true,
      type: "list",
      storageClassType: "Cloudfunctions2FunctionBuildConfigSourceStorageSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cloudfunctions2FunctionBuildConfigSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cloudfunctions2FunctionBuildConfigSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repoSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoSource = this._repoSource?.internalValue;
    }
    if (this._storageSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSource = this._storageSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionBuildConfigSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repoSource.internalValue = undefined;
      this._storageSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repoSource.internalValue = value.repoSource;
      this._storageSource.internalValue = value.storageSource;
    }
  }

  // repo_source - computed: false, optional: true, required: false
  private _repoSource = new Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference(this, "repo_source");
  public get repoSource() {
    return this._repoSource;
  }
  public putRepoSource(value: Cloudfunctions2FunctionBuildConfigSourceRepoSource) {
    this._repoSource.internalValue = value;
  }
  public resetRepoSource() {
    this._repoSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoSourceInput() {
    return this._repoSource.internalValue;
  }

  // storage_source - computed: false, optional: true, required: false
  private _storageSource = new Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference(this, "storage_source");
  public get storageSource() {
    return this._storageSource;
  }
  public putStorageSource(value: Cloudfunctions2FunctionBuildConfigSourceStorageSource) {
    this._storageSource.internalValue = value;
  }
  public resetStorageSource() {
    this._storageSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSourceInput() {
    return this._storageSource.internalValue;
  }
}
export interface Cloudfunctions2FunctionBuildConfig {
  /**
  * User managed repository created in Artifact Registry optionally with a customer managed encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#docker_repository Cloudfunctions2Function#docker_repository}
  */
  readonly dockerRepository?: string;
  /**
  * The name of the function (as defined in source code) that will be executed.
  * Defaults to the resource name suffix, if not specified. For backward
  * compatibility, if function with given name is not found, then the system
  * will try to use function named "function". For Node.js this is name of a
  * function exported by the module specified in source_location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#entry_point Cloudfunctions2Function#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * User-provided build-time environment variables for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#environment_variables Cloudfunctions2Function#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * The runtime in which to run the function. Required when deploying a new
  * function, optional when updating an existing function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#runtime Cloudfunctions2Function#runtime}
  */
  readonly runtime?: string;
  /**
  * The fully-qualified name of the service account to be used for building the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#service_account Cloudfunctions2Function#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#worker_pool Cloudfunctions2Function#worker_pool}
  */
  readonly workerPool?: string;
  /**
  * automatic_update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#automatic_update_policy Cloudfunctions2Function#automatic_update_policy}
  */
  readonly automaticUpdatePolicy?: Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy;
  /**
  * on_deploy_update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#on_deploy_update_policy Cloudfunctions2Function#on_deploy_update_policy}
  */
  readonly onDeployUpdatePolicy?: Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#source Cloudfunctions2Function#source}
  */
  readonly source?: Cloudfunctions2FunctionBuildConfigSource;
}

export function cloudfunctions2FunctionBuildConfigToTerraform(struct?: Cloudfunctions2FunctionBuildConfigOutputReference | Cloudfunctions2FunctionBuildConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    docker_repository: cdktn.stringToTerraform(struct!.dockerRepository),
    entry_point: cdktn.stringToTerraform(struct!.entryPoint),
    environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environmentVariables),
    runtime: cdktn.stringToTerraform(struct!.runtime),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    worker_pool: cdktn.stringToTerraform(struct!.workerPool),
    automatic_update_policy: cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyToTerraform(struct!.automaticUpdatePolicy),
    on_deploy_update_policy: cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyToTerraform(struct!.onDeployUpdatePolicy),
    source: cloudfunctions2FunctionBuildConfigSourceToTerraform(struct!.source),
  }
}


export function cloudfunctions2FunctionBuildConfigToHclTerraform(struct?: Cloudfunctions2FunctionBuildConfigOutputReference | Cloudfunctions2FunctionBuildConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    docker_repository: {
      value: cdktn.stringToHclTerraform(struct!.dockerRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_point: {
      value: cdktn.stringToHclTerraform(struct!.entryPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    runtime: {
      value: cdktn.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool: {
      value: cdktn.stringToHclTerraform(struct!.workerPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automatic_update_policy: {
      value: cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyToHclTerraform(struct!.automaticUpdatePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList",
    },
    on_deploy_update_policy: {
      value: cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyToHclTerraform(struct!.onDeployUpdatePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList",
    },
    source: {
      value: cloudfunctions2FunctionBuildConfigSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "Cloudfunctions2FunctionBuildConfigSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cloudfunctions2FunctionBuildConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cloudfunctions2FunctionBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRepository = this._dockerRepository;
    }
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._workerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPool = this._workerPool;
    }
    if (this._automaticUpdatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUpdatePolicy = this._automaticUpdatePolicy?.internalValue;
    }
    if (this._onDeployUpdatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDeployUpdatePolicy = this._onDeployUpdatePolicy?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dockerRepository = undefined;
      this._entryPoint = undefined;
      this._environmentVariables = undefined;
      this._runtime = undefined;
      this._serviceAccount = undefined;
      this._workerPool = undefined;
      this._automaticUpdatePolicy.internalValue = undefined;
      this._onDeployUpdatePolicy.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dockerRepository = value.dockerRepository;
      this._entryPoint = value.entryPoint;
      this._environmentVariables = value.environmentVariables;
      this._runtime = value.runtime;
      this._serviceAccount = value.serviceAccount;
      this._workerPool = value.workerPool;
      this._automaticUpdatePolicy.internalValue = value.automaticUpdatePolicy;
      this._onDeployUpdatePolicy.internalValue = value.onDeployUpdatePolicy;
      this._source.internalValue = value.source;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // docker_repository - computed: true, optional: true, required: false
  private _dockerRepository?: string; 
  public get dockerRepository() {
    return this.getStringAttribute('docker_repository');
  }
  public set dockerRepository(value: string) {
    this._dockerRepository = value;
  }
  public resetDockerRepository() {
    this._dockerRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRepositoryInput() {
    return this._dockerRepository;
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // service_account - computed: true, optional: true, required: false
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

  // worker_pool - computed: false, optional: true, required: false
  private _workerPool?: string; 
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
  public set workerPool(value: string) {
    this._workerPool = value;
  }
  public resetWorkerPool() {
    this._workerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolInput() {
    return this._workerPool;
  }

  // automatic_update_policy - computed: false, optional: true, required: false
  private _automaticUpdatePolicy = new Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference(this, "automatic_update_policy");
  public get automaticUpdatePolicy() {
    return this._automaticUpdatePolicy;
  }
  public putAutomaticUpdatePolicy(value: Cloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy) {
    this._automaticUpdatePolicy.internalValue = value;
  }
  public resetAutomaticUpdatePolicy() {
    this._automaticUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpdatePolicyInput() {
    return this._automaticUpdatePolicy.internalValue;
  }

  // on_deploy_update_policy - computed: false, optional: true, required: false
  private _onDeployUpdatePolicy = new Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference(this, "on_deploy_update_policy");
  public get onDeployUpdatePolicy() {
    return this._onDeployUpdatePolicy;
  }
  public putOnDeployUpdatePolicy(value: Cloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy) {
    this._onDeployUpdatePolicy.internalValue = value;
  }
  public resetOnDeployUpdatePolicy() {
    this._onDeployUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeployUpdatePolicyInput() {
    return this._onDeployUpdatePolicy.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new Cloudfunctions2FunctionBuildConfigSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: Cloudfunctions2FunctionBuildConfigSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface Cloudfunctions2FunctionEventTriggerEventFilters {
  /**
  * 'Required. The name of a CloudEvents attribute.
  * Currently, only a subset of attributes are supported for filtering. Use the 'gcloud eventarc providers describe' command to learn more about events and their attributes.
  * Do not filter for the 'type' attribute here, as this is already achieved by the resource's 'event_type' attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#attribute Cloudfunctions2Function#attribute}
  */
  readonly attribute: string;
  /**
  * Optional. The operator used for matching the events with the value of
  * the filter. If not specified, only events that have an exact key-value
  * pair specified in the filter are matched.
  * The only allowed value is 'match-path-pattern'.
  * [See documentation on path patterns here](https://cloud.google.com/eventarc/docs/path-patterns)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#operator Cloudfunctions2Function#operator}
  */
  readonly operator?: string;
  /**
  * Required. The value for the attribute.
  * If the operator field is set as 'match-path-pattern', this value can be a path pattern instead of an exact value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#value Cloudfunctions2Function#value}
  */
  readonly value: string;
}

export function cloudfunctions2FunctionEventTriggerEventFiltersToTerraform(struct?: Cloudfunctions2FunctionEventTriggerEventFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudfunctions2FunctionEventTriggerEventFiltersToHclTerraform(struct?: Cloudfunctions2FunctionEventTriggerEventFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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

export class Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Cloudfunctions2FunctionEventTriggerEventFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionEventTriggerEventFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Cloudfunctions2FunctionEventTriggerEventFiltersList extends cdktn.ComplexList {
  public internalValue? : Cloudfunctions2FunctionEventTriggerEventFilters[] | cdktn.IResolvable

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
  public get(index: number): Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference {
    return new Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cloudfunctions2FunctionEventTrigger {
  /**
  * Required. The type of event to observe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#event_type Cloudfunctions2Function#event_type}
  */
  readonly eventType: string;
  /**
  * The name of a Pub/Sub topic in the same project that will be used
  * as the transport topic for the event delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#pubsub_topic Cloudfunctions2Function#pubsub_topic}
  */
  readonly pubsubTopic?: string;
  /**
  * Describes the retry policy in case of function's execution failure.
  * Retried execution is charged as any other execution. Possible values: ["RETRY_POLICY_UNSPECIFIED", "RETRY_POLICY_DO_NOT_RETRY", "RETRY_POLICY_RETRY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#retry_policy Cloudfunctions2Function#retry_policy}
  */
  readonly retryPolicy?: string;
  /**
  * Optional. The email of the trigger's service account. The service account
  * must have permission to invoke Cloud Run services. If empty, defaults to the
  * Compute Engine default service account: {project_number}-compute@developer.gserviceaccount.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#service_account_email Cloudfunctions2Function#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The region that the trigger will be in. The trigger will only receive
  * events originating in this region. It can be the same
  * region as the function, a different region or multi-region, or the global
  * region. If not provided, defaults to the same region as the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#trigger_region Cloudfunctions2Function#trigger_region}
  */
  readonly triggerRegion?: string;
  /**
  * event_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#event_filters Cloudfunctions2Function#event_filters}
  */
  readonly eventFilters?: Cloudfunctions2FunctionEventTriggerEventFilters[] | cdktn.IResolvable;
}

export function cloudfunctions2FunctionEventTriggerToTerraform(struct?: Cloudfunctions2FunctionEventTriggerOutputReference | Cloudfunctions2FunctionEventTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    pubsub_topic: cdktn.stringToTerraform(struct!.pubsubTopic),
    retry_policy: cdktn.stringToTerraform(struct!.retryPolicy),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    trigger_region: cdktn.stringToTerraform(struct!.triggerRegion),
    event_filters: cdktn.listMapper(cloudfunctions2FunctionEventTriggerEventFiltersToTerraform, true)(struct!.eventFilters),
  }
}


export function cloudfunctions2FunctionEventTriggerToHclTerraform(struct?: Cloudfunctions2FunctionEventTriggerOutputReference | Cloudfunctions2FunctionEventTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pubsub_topic: {
      value: cdktn.stringToHclTerraform(struct!.pubsubTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_policy: {
      value: cdktn.stringToHclTerraform(struct!.retryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_region: {
      value: cdktn.stringToHclTerraform(struct!.triggerRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_filters: {
      value: cdktn.listMapperHcl(cloudfunctions2FunctionEventTriggerEventFiltersToHclTerraform, true)(struct!.eventFilters),
      isBlock: true,
      type: "set",
      storageClassType: "Cloudfunctions2FunctionEventTriggerEventFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cloudfunctions2FunctionEventTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cloudfunctions2FunctionEventTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._pubsubTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubTopic = this._pubsubTopic;
    }
    if (this._retryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._triggerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerRegion = this._triggerRegion;
    }
    if (this._eventFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventFilters = this._eventFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionEventTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
      this._pubsubTopic = undefined;
      this._retryPolicy = undefined;
      this._serviceAccountEmail = undefined;
      this._triggerRegion = undefined;
      this._eventFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
      this._pubsubTopic = value.pubsubTopic;
      this._retryPolicy = value.retryPolicy;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._triggerRegion = value.triggerRegion;
      this._eventFilters.internalValue = value.eventFilters;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // pubsub_topic - computed: true, optional: true, required: false
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  public resetPubsubTopic() {
    this._pubsubTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: string; 
  public get retryPolicy() {
    return this.getStringAttribute('retry_policy');
  }
  public set retryPolicy(value: string) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy;
  }

  // service_account_email - computed: true, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    return this.getStringAttribute('trigger');
  }

  // trigger_region - computed: true, optional: true, required: false
  private _triggerRegion?: string; 
  public get triggerRegion() {
    return this.getStringAttribute('trigger_region');
  }
  public set triggerRegion(value: string) {
    this._triggerRegion = value;
  }
  public resetTriggerRegion() {
    this._triggerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerRegionInput() {
    return this._triggerRegion;
  }

  // event_filters - computed: false, optional: true, required: false
  private _eventFilters = new Cloudfunctions2FunctionEventTriggerEventFiltersList(this, "event_filters", true);
  public get eventFilters() {
    return this._eventFilters;
  }
  public putEventFilters(value: Cloudfunctions2FunctionEventTriggerEventFilters[] | cdktn.IResolvable) {
    this._eventFilters.internalValue = value;
  }
  public resetEventFilters() {
    this._eventFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFiltersInput() {
    return this._eventFilters.internalValue;
  }
}
export interface Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface {
  /**
  * The name of the VPC network to which the function will be connected. Specify either a VPC network or a subnet, or both. If you specify only a network, the subnet uses the same name as the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#network Cloudfunctions2Function#network}
  */
  readonly network?: string;
  /**
  * The name of the VPC subnetwork that the Cloud Function resource will get IPs from. Specify either a VPC network or a subnet, or both. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the subnetwork with the same name with the network will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#subnetwork Cloudfunctions2Function#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * Network tags applied to this Cloud Function resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#tags Cloudfunctions2Function#tags}
  */
  readonly tags?: string[];
}

export function cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceToTerraform(struct?: Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network: cdktn.stringToTerraform(struct!.network),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
  }
}


export function cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceToHclTerraform(struct?: Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktn.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
      this._tags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
      this._tags = value.tags;
    }
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList extends cdktn.ComplexList {
  public internalValue? : Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface[] | cdktn.IResolvable

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
  public get(index: number): Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference {
    return new Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#key Cloudfunctions2Function#key}
  */
  readonly key: string;
  /**
  * Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}
  */
  readonly projectId: string;
  /**
  * Name of the secret in secret manager (not the full resource name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#secret Cloudfunctions2Function#secret}
  */
  readonly secret: string;
  /**
  * Version of the secret (version number or the string 'latest'). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#version Cloudfunctions2Function#version}
  */
  readonly version: string;
}

export function cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesToTerraform(struct?: Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    secret: cdktn.stringToTerraform(struct!.secret),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesToHclTerraform(struct?: Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables | cdktn.IResolvable): any {
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
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._projectId = undefined;
      this._secret = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._projectId = value.projectId;
      this._secret = value.secret;
      this._version = value.version;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList extends cdktn.ComplexList {
  public internalValue? : Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables[] | cdktn.IResolvable

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
  public get(index: number): Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference {
    return new Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cloudfunctions2FunctionServiceConfigSecretVolumesVersions {
  /**
  * Relative path of the file under the mount path where the secret value for this version will be fetched and made available. For example, setting the mountPath as '/etc/secrets' and path as secret_foo would mount the secret value file at /etc/secrets/secret_foo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#path Cloudfunctions2Function#path}
  */
  readonly path: string;
  /**
  * Version of the secret (version number or the string 'latest'). It is preferable to use latest version with secret volumes as secret value changes are reflected immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#version Cloudfunctions2Function#version}
  */
  readonly version: string;
}

export function cloudfunctions2FunctionServiceConfigSecretVolumesVersionsToTerraform(struct?: Cloudfunctions2FunctionServiceConfigSecretVolumesVersions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function cloudfunctions2FunctionServiceConfigSecretVolumesVersionsToHclTerraform(struct?: Cloudfunctions2FunctionServiceConfigSecretVolumesVersions | cdktn.IResolvable): any {
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
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Cloudfunctions2FunctionServiceConfigSecretVolumesVersions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionServiceConfigSecretVolumesVersions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._version = value.version;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList extends cdktn.ComplexList {
  public internalValue? : Cloudfunctions2FunctionServiceConfigSecretVolumesVersions[] | cdktn.IResolvable

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
  public get(index: number): Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference {
    return new Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cloudfunctions2FunctionServiceConfigSecretVolumes {
  /**
  * The path within the container to mount the secret volume. For example, setting the mountPath as /etc/secrets would mount the secret value files under the /etc/secrets directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#mount_path Cloudfunctions2Function#mount_path}
  */
  readonly mountPath: string;
  /**
  * Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}
  */
  readonly projectId: string;
  /**
  * Name of the secret in secret manager (not the full resource name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#secret Cloudfunctions2Function#secret}
  */
  readonly secret: string;
  /**
  * versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#versions Cloudfunctions2Function#versions}
  */
  readonly versions?: Cloudfunctions2FunctionServiceConfigSecretVolumesVersions[] | cdktn.IResolvable;
}

export function cloudfunctions2FunctionServiceConfigSecretVolumesToTerraform(struct?: Cloudfunctions2FunctionServiceConfigSecretVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    secret: cdktn.stringToTerraform(struct!.secret),
    versions: cdktn.listMapper(cloudfunctions2FunctionServiceConfigSecretVolumesVersionsToTerraform, true)(struct!.versions),
  }
}


export function cloudfunctions2FunctionServiceConfigSecretVolumesToHclTerraform(struct?: Cloudfunctions2FunctionServiceConfigSecretVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versions: {
      value: cdktn.listMapperHcl(cloudfunctions2FunctionServiceConfigSecretVolumesVersionsToHclTerraform, true)(struct!.versions),
      isBlock: true,
      type: "list",
      storageClassType: "Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Cloudfunctions2FunctionServiceConfigSecretVolumes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._versions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionServiceConfigSecretVolumes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._projectId = undefined;
      this._secret = undefined;
      this._versions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._projectId = value.projectId;
      this._secret = value.secret;
      this._versions.internalValue = value.versions;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // versions - computed: false, optional: true, required: false
  private _versions = new Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: Cloudfunctions2FunctionServiceConfigSecretVolumesVersions[] | cdktn.IResolvable) {
    this._versions.internalValue = value;
  }
  public resetVersions() {
    this._versions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }
}

export class Cloudfunctions2FunctionServiceConfigSecretVolumesList extends cdktn.ComplexList {
  public internalValue? : Cloudfunctions2FunctionServiceConfigSecretVolumes[] | cdktn.IResolvable

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
  public get(index: number): Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference {
    return new Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cloudfunctions2FunctionServiceConfig {
  /**
  * Whether 100% of traffic is routed to the latest revision. Defaults to true. When false, GCF honors the existing traffic configuration of the underlying Cloud Run service. If that configuration is set to route to LATEST (the default), the new deployment will become LATEST and intercept the traffic. To prevent traffic from shifting, you must manually pin the existing service to a specific revision name in Cloud Run before deploying.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#all_traffic_on_latest_revision Cloudfunctions2Function#all_traffic_on_latest_revision}
  */
  readonly allTrafficOnLatestRevision?: boolean | cdktn.IResolvable;
  /**
  * The number of CPUs used in a single container instance. Default value is calculated from available memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#available_cpu Cloudfunctions2Function#available_cpu}
  */
  readonly availableCpu?: string;
  /**
  * The amount of memory available for a function.
  * Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
  * supplied the value is interpreted as bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#available_memory Cloudfunctions2Function#available_memory}
  */
  readonly availableMemory?: string;
  /**
  * The binary authorization policy to be checked when deploying the Cloud Run service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#binary_authorization_policy Cloudfunctions2Function#binary_authorization_policy}
  */
  readonly binaryAuthorizationPolicy?: string;
  /**
  * Egress settings for direct VPC. If not provided, it defaults to VPC_EGRESS_PRIVATE_RANGES_ONLY. Possible values: ["VPC_EGRESS_ALL_TRAFFIC", "VPC_EGRESS_PRIVATE_RANGES_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#direct_vpc_egress Cloudfunctions2Function#direct_vpc_egress}
  */
  readonly directVpcEgress?: string;
  /**
  * Environment variables that shall be available during function execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#environment_variables Cloudfunctions2Function#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#ingress_settings Cloudfunctions2Function#ingress_settings}
  */
  readonly ingressSettings?: string;
  /**
  * The limit on the maximum number of function instances that may coexist at a
  * given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#max_instance_count Cloudfunctions2Function#max_instance_count}
  */
  readonly maxInstanceCount?: number;
  /**
  * Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#max_instance_request_concurrency Cloudfunctions2Function#max_instance_request_concurrency}
  */
  readonly maxInstanceRequestConcurrency?: number;
  /**
  * The limit on the minimum number of function instances that may coexist at a
  * given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#min_instance_count Cloudfunctions2Function#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * The email of the service account for this function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#service_account_email Cloudfunctions2Function#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The function execution timeout. Execution is considered failed and
  * can be terminated if the function is not completed at the end of the
  * timeout period. Defaults to 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#timeout_seconds Cloudfunctions2Function#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * The Serverless VPC Access connector that this cloud function can connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#vpc_connector Cloudfunctions2Function#vpc_connector}
  */
  readonly vpcConnector?: string;
  /**
  * Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#vpc_connector_egress_settings Cloudfunctions2Function#vpc_connector_egress_settings}
  */
  readonly vpcConnectorEgressSettings?: string;
  /**
  * direct_vpc_network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#direct_vpc_network_interface Cloudfunctions2Function#direct_vpc_network_interface}
  */
  readonly directVpcNetworkInterface?: Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface[] | cdktn.IResolvable;
  /**
  * secret_environment_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#secret_environment_variables Cloudfunctions2Function#secret_environment_variables}
  */
  readonly secretEnvironmentVariables?: Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables[] | cdktn.IResolvable;
  /**
  * secret_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#secret_volumes Cloudfunctions2Function#secret_volumes}
  */
  readonly secretVolumes?: Cloudfunctions2FunctionServiceConfigSecretVolumes[] | cdktn.IResolvable;
}

export function cloudfunctions2FunctionServiceConfigToTerraform(struct?: Cloudfunctions2FunctionServiceConfigOutputReference | Cloudfunctions2FunctionServiceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_traffic_on_latest_revision: cdktn.booleanToTerraform(struct!.allTrafficOnLatestRevision),
    available_cpu: cdktn.stringToTerraform(struct!.availableCpu),
    available_memory: cdktn.stringToTerraform(struct!.availableMemory),
    binary_authorization_policy: cdktn.stringToTerraform(struct!.binaryAuthorizationPolicy),
    direct_vpc_egress: cdktn.stringToTerraform(struct!.directVpcEgress),
    environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environmentVariables),
    ingress_settings: cdktn.stringToTerraform(struct!.ingressSettings),
    max_instance_count: cdktn.numberToTerraform(struct!.maxInstanceCount),
    max_instance_request_concurrency: cdktn.numberToTerraform(struct!.maxInstanceRequestConcurrency),
    min_instance_count: cdktn.numberToTerraform(struct!.minInstanceCount),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    vpc_connector: cdktn.stringToTerraform(struct!.vpcConnector),
    vpc_connector_egress_settings: cdktn.stringToTerraform(struct!.vpcConnectorEgressSettings),
    direct_vpc_network_interface: cdktn.listMapper(cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceToTerraform, true)(struct!.directVpcNetworkInterface),
    secret_environment_variables: cdktn.listMapper(cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesToTerraform, true)(struct!.secretEnvironmentVariables),
    secret_volumes: cdktn.listMapper(cloudfunctions2FunctionServiceConfigSecretVolumesToTerraform, true)(struct!.secretVolumes),
  }
}


export function cloudfunctions2FunctionServiceConfigToHclTerraform(struct?: Cloudfunctions2FunctionServiceConfigOutputReference | Cloudfunctions2FunctionServiceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_traffic_on_latest_revision: {
      value: cdktn.booleanToHclTerraform(struct!.allTrafficOnLatestRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    available_cpu: {
      value: cdktn.stringToHclTerraform(struct!.availableCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    available_memory: {
      value: cdktn.stringToHclTerraform(struct!.availableMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_authorization_policy: {
      value: cdktn.stringToHclTerraform(struct!.binaryAuthorizationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direct_vpc_egress: {
      value: cdktn.stringToHclTerraform(struct!.directVpcEgress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ingress_settings: {
      value: cdktn.stringToHclTerraform(struct!.ingressSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_instance_count: {
      value: cdktn.numberToHclTerraform(struct!.maxInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_instance_request_concurrency: {
      value: cdktn.numberToHclTerraform(struct!.maxInstanceRequestConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instance_count: {
      value: cdktn.numberToHclTerraform(struct!.minInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_connector: {
      value: cdktn.stringToHclTerraform(struct!.vpcConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_connector_egress_settings: {
      value: cdktn.stringToHclTerraform(struct!.vpcConnectorEgressSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direct_vpc_network_interface: {
      value: cdktn.listMapperHcl(cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceToHclTerraform, true)(struct!.directVpcNetworkInterface),
      isBlock: true,
      type: "list",
      storageClassType: "Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList",
    },
    secret_environment_variables: {
      value: cdktn.listMapperHcl(cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesToHclTerraform, true)(struct!.secretEnvironmentVariables),
      isBlock: true,
      type: "list",
      storageClassType: "Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList",
    },
    secret_volumes: {
      value: cdktn.listMapperHcl(cloudfunctions2FunctionServiceConfigSecretVolumesToHclTerraform, true)(struct!.secretVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "Cloudfunctions2FunctionServiceConfigSecretVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cloudfunctions2FunctionServiceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cloudfunctions2FunctionServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allTrafficOnLatestRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTrafficOnLatestRevision = this._allTrafficOnLatestRevision;
    }
    if (this._availableCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableCpu = this._availableCpu;
    }
    if (this._availableMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableMemory = this._availableMemory;
    }
    if (this._binaryAuthorizationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAuthorizationPolicy = this._binaryAuthorizationPolicy;
    }
    if (this._directVpcEgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.directVpcEgress = this._directVpcEgress;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._ingressSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressSettings = this._ingressSettings;
    }
    if (this._maxInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceCount = this._maxInstanceCount;
    }
    if (this._maxInstanceRequestConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceRequestConcurrency = this._maxInstanceRequestConcurrency;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._vpcConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnector = this._vpcConnector;
    }
    if (this._vpcConnectorEgressSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectorEgressSettings = this._vpcConnectorEgressSettings;
    }
    if (this._directVpcNetworkInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directVpcNetworkInterface = this._directVpcNetworkInterface?.internalValue;
    }
    if (this._secretEnvironmentVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEnvironmentVariables = this._secretEnvironmentVariables?.internalValue;
    }
    if (this._secretVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVolumes = this._secretVolumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cloudfunctions2FunctionServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allTrafficOnLatestRevision = undefined;
      this._availableCpu = undefined;
      this._availableMemory = undefined;
      this._binaryAuthorizationPolicy = undefined;
      this._directVpcEgress = undefined;
      this._environmentVariables = undefined;
      this._ingressSettings = undefined;
      this._maxInstanceCount = undefined;
      this._maxInstanceRequestConcurrency = undefined;
      this._minInstanceCount = undefined;
      this._serviceAccountEmail = undefined;
      this._timeoutSeconds = undefined;
      this._vpcConnector = undefined;
      this._vpcConnectorEgressSettings = undefined;
      this._directVpcNetworkInterface.internalValue = undefined;
      this._secretEnvironmentVariables.internalValue = undefined;
      this._secretVolumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allTrafficOnLatestRevision = value.allTrafficOnLatestRevision;
      this._availableCpu = value.availableCpu;
      this._availableMemory = value.availableMemory;
      this._binaryAuthorizationPolicy = value.binaryAuthorizationPolicy;
      this._directVpcEgress = value.directVpcEgress;
      this._environmentVariables = value.environmentVariables;
      this._ingressSettings = value.ingressSettings;
      this._maxInstanceCount = value.maxInstanceCount;
      this._maxInstanceRequestConcurrency = value.maxInstanceRequestConcurrency;
      this._minInstanceCount = value.minInstanceCount;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._timeoutSeconds = value.timeoutSeconds;
      this._vpcConnector = value.vpcConnector;
      this._vpcConnectorEgressSettings = value.vpcConnectorEgressSettings;
      this._directVpcNetworkInterface.internalValue = value.directVpcNetworkInterface;
      this._secretEnvironmentVariables.internalValue = value.secretEnvironmentVariables;
      this._secretVolumes.internalValue = value.secretVolumes;
    }
  }

  // all_traffic_on_latest_revision - computed: false, optional: true, required: false
  private _allTrafficOnLatestRevision?: boolean | cdktn.IResolvable; 
  public get allTrafficOnLatestRevision() {
    return this.getBooleanAttribute('all_traffic_on_latest_revision');
  }
  public set allTrafficOnLatestRevision(value: boolean | cdktn.IResolvable) {
    this._allTrafficOnLatestRevision = value;
  }
  public resetAllTrafficOnLatestRevision() {
    this._allTrafficOnLatestRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTrafficOnLatestRevisionInput() {
    return this._allTrafficOnLatestRevision;
  }

  // available_cpu - computed: true, optional: true, required: false
  private _availableCpu?: string; 
  public get availableCpu() {
    return this.getStringAttribute('available_cpu');
  }
  public set availableCpu(value: string) {
    this._availableCpu = value;
  }
  public resetAvailableCpu() {
    this._availableCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableCpuInput() {
    return this._availableCpu;
  }

  // available_memory - computed: true, optional: true, required: false
  private _availableMemory?: string; 
  public get availableMemory() {
    return this.getStringAttribute('available_memory');
  }
  public set availableMemory(value: string) {
    this._availableMemory = value;
  }
  public resetAvailableMemory() {
    this._availableMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableMemoryInput() {
    return this._availableMemory;
  }

  // binary_authorization_policy - computed: false, optional: true, required: false
  private _binaryAuthorizationPolicy?: string; 
  public get binaryAuthorizationPolicy() {
    return this.getStringAttribute('binary_authorization_policy');
  }
  public set binaryAuthorizationPolicy(value: string) {
    this._binaryAuthorizationPolicy = value;
  }
  public resetBinaryAuthorizationPolicy() {
    this._binaryAuthorizationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationPolicyInput() {
    return this._binaryAuthorizationPolicy;
  }

  // direct_vpc_egress - computed: true, optional: true, required: false
  private _directVpcEgress?: string; 
  public get directVpcEgress() {
    return this.getStringAttribute('direct_vpc_egress');
  }
  public set directVpcEgress(value: string) {
    this._directVpcEgress = value;
  }
  public resetDirectVpcEgress() {
    this._directVpcEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directVpcEgressInput() {
    return this._directVpcEgress;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // gcf_uri - computed: true, optional: false, required: false
  public get gcfUri() {
    return this.getStringAttribute('gcf_uri');
  }

  // ingress_settings - computed: false, optional: true, required: false
  private _ingressSettings?: string; 
  public get ingressSettings() {
    return this.getStringAttribute('ingress_settings');
  }
  public set ingressSettings(value: string) {
    this._ingressSettings = value;
  }
  public resetIngressSettings() {
    this._ingressSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSettingsInput() {
    return this._ingressSettings;
  }

  // max_instance_count - computed: true, optional: true, required: false
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // max_instance_request_concurrency - computed: true, optional: true, required: false
  private _maxInstanceRequestConcurrency?: number; 
  public get maxInstanceRequestConcurrency() {
    return this.getNumberAttribute('max_instance_request_concurrency');
  }
  public set maxInstanceRequestConcurrency(value: number) {
    this._maxInstanceRequestConcurrency = value;
  }
  public resetMaxInstanceRequestConcurrency() {
    this._maxInstanceRequestConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceRequestConcurrencyInput() {
    return this._maxInstanceRequestConcurrency;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_account_email - computed: true, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // vpc_connector - computed: false, optional: true, required: false
  private _vpcConnector?: string; 
  public get vpcConnector() {
    return this.getStringAttribute('vpc_connector');
  }
  public set vpcConnector(value: string) {
    this._vpcConnector = value;
  }
  public resetVpcConnector() {
    this._vpcConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectorInput() {
    return this._vpcConnector;
  }

  // vpc_connector_egress_settings - computed: false, optional: true, required: false
  private _vpcConnectorEgressSettings?: string; 
  public get vpcConnectorEgressSettings() {
    return this.getStringAttribute('vpc_connector_egress_settings');
  }
  public set vpcConnectorEgressSettings(value: string) {
    this._vpcConnectorEgressSettings = value;
  }
  public resetVpcConnectorEgressSettings() {
    this._vpcConnectorEgressSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectorEgressSettingsInput() {
    return this._vpcConnectorEgressSettings;
  }

  // direct_vpc_network_interface - computed: false, optional: true, required: false
  private _directVpcNetworkInterface = new Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList(this, "direct_vpc_network_interface", false);
  public get directVpcNetworkInterface() {
    return this._directVpcNetworkInterface;
  }
  public putDirectVpcNetworkInterface(value: Cloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface[] | cdktn.IResolvable) {
    this._directVpcNetworkInterface.internalValue = value;
  }
  public resetDirectVpcNetworkInterface() {
    this._directVpcNetworkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directVpcNetworkInterfaceInput() {
    return this._directVpcNetworkInterface.internalValue;
  }

  // secret_environment_variables - computed: false, optional: true, required: false
  private _secretEnvironmentVariables = new Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList(this, "secret_environment_variables", false);
  public get secretEnvironmentVariables() {
    return this._secretEnvironmentVariables;
  }
  public putSecretEnvironmentVariables(value: Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables[] | cdktn.IResolvable) {
    this._secretEnvironmentVariables.internalValue = value;
  }
  public resetSecretEnvironmentVariables() {
    this._secretEnvironmentVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvironmentVariablesInput() {
    return this._secretEnvironmentVariables.internalValue;
  }

  // secret_volumes - computed: false, optional: true, required: false
  private _secretVolumes = new Cloudfunctions2FunctionServiceConfigSecretVolumesList(this, "secret_volumes", false);
  public get secretVolumes() {
    return this._secretVolumes;
  }
  public putSecretVolumes(value: Cloudfunctions2FunctionServiceConfigSecretVolumes[] | cdktn.IResolvable) {
    this._secretVolumes.internalValue = value;
  }
  public resetSecretVolumes() {
    this._secretVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVolumesInput() {
    return this._secretVolumes.internalValue;
  }
}
export interface Cloudfunctions2FunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#create Cloudfunctions2Function#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#delete Cloudfunctions2Function#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#update Cloudfunctions2Function#update}
  */
  readonly update?: string;
}

export function cloudfunctions2FunctionTimeoutsToTerraform(struct?: Cloudfunctions2FunctionTimeouts | cdktn.IResolvable): any {
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


export function cloudfunctions2FunctionTimeoutsToHclTerraform(struct?: Cloudfunctions2FunctionTimeouts | cdktn.IResolvable): any {
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

export class Cloudfunctions2FunctionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Cloudfunctions2FunctionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Cloudfunctions2FunctionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function google_cloudfunctions2_function}
*/
export class Cloudfunctions2Function extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloudfunctions2_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Cloudfunctions2Function resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cloudfunctions2Function to import
  * @param importFromId The id of the existing Cloudfunctions2Function that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cloudfunctions2Function to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_cloudfunctions2_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/cloudfunctions2_function google_cloudfunctions2_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cloudfunctions2FunctionConfig
  */
  public constructor(scope: Construct, id: string, config: Cloudfunctions2FunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudfunctions2_function',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.45.0',
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
    this._description = config.description;
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._buildConfig.internalValue = config.buildConfig;
    this._eventTrigger.internalValue = config.eventTrigger;
    this._serviceConfig.internalValue = config.serviceConfig;
    this._timeouts.internalValue = config.timeouts;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // build_config - computed: false, optional: true, required: false
  private _buildConfig = new Cloudfunctions2FunctionBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }
  public putBuildConfig(value: Cloudfunctions2FunctionBuildConfig) {
    this._buildConfig.internalValue = value;
  }
  public resetBuildConfig() {
    this._buildConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildConfigInput() {
    return this._buildConfig.internalValue;
  }

  // event_trigger - computed: false, optional: true, required: false
  private _eventTrigger = new Cloudfunctions2FunctionEventTriggerOutputReference(this, "event_trigger");
  public get eventTrigger() {
    return this._eventTrigger;
  }
  public putEventTrigger(value: Cloudfunctions2FunctionEventTrigger) {
    this._eventTrigger.internalValue = value;
  }
  public resetEventTrigger() {
    this._eventTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerInput() {
    return this._eventTrigger.internalValue;
  }

  // service_config - computed: false, optional: true, required: false
  private _serviceConfig = new Cloudfunctions2FunctionServiceConfigOutputReference(this, "service_config");
  public get serviceConfig() {
    return this._serviceConfig;
  }
  public putServiceConfig(value: Cloudfunctions2FunctionServiceConfig) {
    this._serviceConfig.internalValue = value;
  }
  public resetServiceConfig() {
    this._serviceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigInput() {
    return this._serviceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Cloudfunctions2FunctionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Cloudfunctions2FunctionTimeouts) {
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
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      kms_key_name: cdktn.stringToTerraform(this._kmsKeyName),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      build_config: cloudfunctions2FunctionBuildConfigToTerraform(this._buildConfig.internalValue),
      event_trigger: cloudfunctions2FunctionEventTriggerToTerraform(this._eventTrigger.internalValue),
      service_config: cloudfunctions2FunctionServiceConfigToTerraform(this._serviceConfig.internalValue),
      timeouts: cloudfunctions2FunctionTimeoutsToTerraform(this._timeouts.internalValue),
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
      build_config: {
        value: cloudfunctions2FunctionBuildConfigToHclTerraform(this._buildConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cloudfunctions2FunctionBuildConfigList",
      },
      event_trigger: {
        value: cloudfunctions2FunctionEventTriggerToHclTerraform(this._eventTrigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cloudfunctions2FunctionEventTriggerList",
      },
      service_config: {
        value: cloudfunctions2FunctionServiceConfigToHclTerraform(this._serviceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cloudfunctions2FunctionServiceConfigList",
      },
      timeouts: {
        value: cloudfunctions2FunctionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Cloudfunctions2FunctionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
