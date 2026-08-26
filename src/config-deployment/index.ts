/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConfigDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Optional. Arbitrary key-value metadata storage.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#annotations ConfigDeployment#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Location for Cloud Build logs and artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#artifacts_gcs_bucket ConfigDeployment#artifacts_gcs_bucket}
  */
  readonly artifactsGcsBucket?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#deletion_policy ConfigDeployment#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * If true, deletes the deployment and its nested resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#force_destroy ConfigDeployment#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#id ConfigDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, attempts to automatically import resources on 409 conflict.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#import_existing_resources ConfigDeployment#import_existing_resources}
  */
  readonly importExistingResources?: boolean | cdktn.IResolvable;
  /**
  * Optional. User-defined metadata for the deployment.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#labels ConfigDeployment#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#location ConfigDeployment#location}
  */
  readonly location: string;
  /**
  * The user-specified ID of the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#name ConfigDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#project ConfigDeployment#project}
  */
  readonly project?: string;
  /**
  * Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#quota_validation ConfigDeployment#quota_validation}
  */
  readonly quotaValidation?: string;
  /**
  * Required. User-specified Service Account (SA) credentials to be used when actuating resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#service_account ConfigDeployment#service_account}
  */
  readonly serviceAccount: string;
  /**
  * Optional constraint on the Terraform version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#tf_version_constraint ConfigDeployment#tf_version_constraint}
  */
  readonly tfVersionConstraint?: string;
  /**
  * Custom Cloud Build worker pool resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#worker_pool ConfigDeployment#worker_pool}
  */
  readonly workerPool?: string;
  /**
  * terraform_blueprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#terraform_blueprint ConfigDeployment#terraform_blueprint}
  */
  readonly terraformBlueprint: ConfigDeploymentTerraformBlueprint;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#timeouts ConfigDeployment#timeouts}
  */
  readonly timeouts?: ConfigDeploymentTimeouts;
}
export interface ConfigDeploymentTerraformBlueprintGitSource {
  /**
  * Subdirectory within the repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#directory ConfigDeployment#directory}
  */
  readonly directory?: string;
  /**
  * Git reference (branch or tag).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#ref ConfigDeployment#ref}
  */
  readonly ref?: string;
  /**
  * Repository URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#repo ConfigDeployment#repo}
  */
  readonly repo: string;
}

export function configDeploymentTerraformBlueprintGitSourceToTerraform(struct?: ConfigDeploymentTerraformBlueprintGitSourceOutputReference | ConfigDeploymentTerraformBlueprintGitSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory: cdktn.stringToTerraform(struct!.directory),
    ref: cdktn.stringToTerraform(struct!.ref),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function configDeploymentTerraformBlueprintGitSourceToHclTerraform(struct?: ConfigDeploymentTerraformBlueprintGitSourceOutputReference | ConfigDeploymentTerraformBlueprintGitSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory: {
      value: cdktn.stringToHclTerraform(struct!.directory),
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

export class ConfigDeploymentTerraformBlueprintGitSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigDeploymentTerraformBlueprintGitSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
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

  public set internalValue(value: ConfigDeploymentTerraformBlueprintGitSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directory = undefined;
      this._ref = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directory = value.directory;
      this._ref = value.ref;
      this._repo = value.repo;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
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
export interface ConfigDeploymentTerraformBlueprintInputValues {
  /**
  * The value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#input_value ConfigDeployment#input_value}
  */
  readonly inputValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#variable_name ConfigDeployment#variable_name}
  */
  readonly variableName: string;
}

export function configDeploymentTerraformBlueprintInputValuesToTerraform(struct?: ConfigDeploymentTerraformBlueprintInputValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_value: cdktn.stringToTerraform(struct!.inputValue),
    variable_name: cdktn.stringToTerraform(struct!.variableName),
  }
}


export function configDeploymentTerraformBlueprintInputValuesToHclTerraform(struct?: ConfigDeploymentTerraformBlueprintInputValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_value: {
      value: cdktn.stringToHclTerraform(struct!.inputValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktn.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigDeploymentTerraformBlueprintInputValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigDeploymentTerraformBlueprintInputValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputValue = this._inputValue;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigDeploymentTerraformBlueprintInputValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputValue = undefined;
      this._variableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputValue = value.inputValue;
      this._variableName = value.variableName;
    }
  }

  // input_value - computed: false, optional: false, required: true
  private _inputValue?: string; 
  public get inputValue() {
    return this.getStringAttribute('input_value');
  }
  public set inputValue(value: string) {
    this._inputValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputValueInput() {
    return this._inputValue;
  }

  // variable_name - computed: false, optional: false, required: true
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}

export class ConfigDeploymentTerraformBlueprintInputValuesList extends cdktn.ComplexList {
  public internalValue? : ConfigDeploymentTerraformBlueprintInputValues[] | cdktn.IResolvable

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
  public get(index: number): ConfigDeploymentTerraformBlueprintInputValuesOutputReference {
    return new ConfigDeploymentTerraformBlueprintInputValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigDeploymentTerraformBlueprint {
  /**
  * URI of a GCS object containing the zipped Terraform blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#gcs_source ConfigDeployment#gcs_source}
  */
  readonly gcsSource?: string;
  /**
  * git_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#git_source ConfigDeployment#git_source}
  */
  readonly gitSource?: ConfigDeploymentTerraformBlueprintGitSource;
  /**
  * input_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#input_values ConfigDeployment#input_values}
  */
  readonly inputValues?: ConfigDeploymentTerraformBlueprintInputValues[] | cdktn.IResolvable;
}

export function configDeploymentTerraformBlueprintToTerraform(struct?: ConfigDeploymentTerraformBlueprintOutputReference | ConfigDeploymentTerraformBlueprint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gcs_source: cdktn.stringToTerraform(struct!.gcsSource),
    git_source: configDeploymentTerraformBlueprintGitSourceToTerraform(struct!.gitSource),
    input_values: cdktn.listMapper(configDeploymentTerraformBlueprintInputValuesToTerraform, true)(struct!.inputValues),
  }
}


export function configDeploymentTerraformBlueprintToHclTerraform(struct?: ConfigDeploymentTerraformBlueprintOutputReference | ConfigDeploymentTerraformBlueprint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gcs_source: {
      value: cdktn.stringToHclTerraform(struct!.gcsSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_source: {
      value: configDeploymentTerraformBlueprintGitSourceToHclTerraform(struct!.gitSource),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigDeploymentTerraformBlueprintGitSourceList",
    },
    input_values: {
      value: cdktn.listMapperHcl(configDeploymentTerraformBlueprintInputValuesToHclTerraform, true)(struct!.inputValues),
      isBlock: true,
      type: "set",
      storageClassType: "ConfigDeploymentTerraformBlueprintInputValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigDeploymentTerraformBlueprintOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigDeploymentTerraformBlueprint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcsSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsSource = this._gcsSource;
    }
    if (this._gitSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSource = this._gitSource?.internalValue;
    }
    if (this._inputValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputValues = this._inputValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigDeploymentTerraformBlueprint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcsSource = undefined;
      this._gitSource.internalValue = undefined;
      this._inputValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcsSource = value.gcsSource;
      this._gitSource.internalValue = value.gitSource;
      this._inputValues.internalValue = value.inputValues;
    }
  }

  // gcs_source - computed: false, optional: true, required: false
  private _gcsSource?: string; 
  public get gcsSource() {
    return this.getStringAttribute('gcs_source');
  }
  public set gcsSource(value: string) {
    this._gcsSource = value;
  }
  public resetGcsSource() {
    this._gcsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsSourceInput() {
    return this._gcsSource;
  }

  // git_source - computed: false, optional: true, required: false
  private _gitSource = new ConfigDeploymentTerraformBlueprintGitSourceOutputReference(this, "git_source");
  public get gitSource() {
    return this._gitSource;
  }
  public putGitSource(value: ConfigDeploymentTerraformBlueprintGitSource) {
    this._gitSource.internalValue = value;
  }
  public resetGitSource() {
    this._gitSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSourceInput() {
    return this._gitSource.internalValue;
  }

  // input_values - computed: false, optional: true, required: false
  private _inputValues = new ConfigDeploymentTerraformBlueprintInputValuesList(this, "input_values", true);
  public get inputValues() {
    return this._inputValues;
  }
  public putInputValues(value: ConfigDeploymentTerraformBlueprintInputValues[] | cdktn.IResolvable) {
    this._inputValues.internalValue = value;
  }
  public resetInputValues() {
    this._inputValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputValuesInput() {
    return this._inputValues.internalValue;
  }
}
export interface ConfigDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#create ConfigDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#delete ConfigDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#update ConfigDeployment#update}
  */
  readonly update?: string;
}

export function configDeploymentTimeoutsToTerraform(struct?: ConfigDeploymentTimeouts | cdktn.IResolvable): any {
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


export function configDeploymentTimeoutsToHclTerraform(struct?: ConfigDeploymentTimeouts | cdktn.IResolvable): any {
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

export class ConfigDeploymentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigDeploymentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ConfigDeploymentTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment google_config_deployment}
*/
export class ConfigDeployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_config_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConfigDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigDeployment to import
  * @param importFromId The id of the existing ConfigDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_config_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/config_deployment google_config_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_config_deployment',
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
    this._artifactsGcsBucket = config.artifactsGcsBucket;
    this._deletionPolicy = config.deletionPolicy;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._importExistingResources = config.importExistingResources;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._quotaValidation = config.quotaValidation;
    this._serviceAccount = config.serviceAccount;
    this._tfVersionConstraint = config.tfVersionConstraint;
    this._workerPool = config.workerPool;
    this._terraformBlueprint.internalValue = config.terraformBlueprint;
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

  // artifacts_gcs_bucket - computed: false, optional: true, required: false
  private _artifactsGcsBucket?: string; 
  public get artifactsGcsBucket() {
    return this.getStringAttribute('artifacts_gcs_bucket');
  }
  public set artifactsGcsBucket(value: string) {
    this._artifactsGcsBucket = value;
  }
  public resetArtifactsGcsBucket() {
    this._artifactsGcsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsGcsBucketInput() {
    return this._artifactsGcsBucket;
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // import_existing_resources - computed: false, optional: true, required: false
  private _importExistingResources?: boolean | cdktn.IResolvable; 
  public get importExistingResources() {
    return this.getBooleanAttribute('import_existing_resources');
  }
  public set importExistingResources(value: boolean | cdktn.IResolvable) {
    this._importExistingResources = value;
  }
  public resetImportExistingResources() {
    this._importExistingResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importExistingResourcesInput() {
    return this._importExistingResources;
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

  // latest_revision - computed: true, optional: false, required: false
  public get latestRevision() {
    return this.getStringAttribute('latest_revision');
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

  // quota_validation - computed: false, optional: true, required: false
  private _quotaValidation?: string; 
  public get quotaValidation() {
    return this.getStringAttribute('quota_validation');
  }
  public set quotaValidation(value: string) {
    this._quotaValidation = value;
  }
  public resetQuotaValidation() {
    this._quotaValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaValidationInput() {
    return this._quotaValidation;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
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

  // tf_version_constraint - computed: false, optional: true, required: false
  private _tfVersionConstraint?: string; 
  public get tfVersionConstraint() {
    return this.getStringAttribute('tf_version_constraint');
  }
  public set tfVersionConstraint(value: string) {
    this._tfVersionConstraint = value;
  }
  public resetTfVersionConstraint() {
    this._tfVersionConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfVersionConstraintInput() {
    return this._tfVersionConstraint;
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

  // terraform_blueprint - computed: false, optional: false, required: true
  private _terraformBlueprint = new ConfigDeploymentTerraformBlueprintOutputReference(this, "terraform_blueprint");
  public get terraformBlueprint() {
    return this._terraformBlueprint;
  }
  public putTerraformBlueprint(value: ConfigDeploymentTerraformBlueprint) {
    this._terraformBlueprint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformBlueprintInput() {
    return this._terraformBlueprint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConfigDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConfigDeploymentTimeouts) {
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
      artifacts_gcs_bucket: cdktn.stringToTerraform(this._artifactsGcsBucket),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      id: cdktn.stringToTerraform(this._id),
      import_existing_resources: cdktn.booleanToTerraform(this._importExistingResources),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      quota_validation: cdktn.stringToTerraform(this._quotaValidation),
      service_account: cdktn.stringToTerraform(this._serviceAccount),
      tf_version_constraint: cdktn.stringToTerraform(this._tfVersionConstraint),
      worker_pool: cdktn.stringToTerraform(this._workerPool),
      terraform_blueprint: configDeploymentTerraformBlueprintToTerraform(this._terraformBlueprint.internalValue),
      timeouts: configDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
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
      artifacts_gcs_bucket: {
        value: cdktn.stringToHclTerraform(this._artifactsGcsBucket),
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
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_existing_resources: {
        value: cdktn.booleanToHclTerraform(this._importExistingResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      quota_validation: {
        value: cdktn.stringToHclTerraform(this._quotaValidation),
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
      tf_version_constraint: {
        value: cdktn.stringToHclTerraform(this._tfVersionConstraint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_pool: {
        value: cdktn.stringToHclTerraform(this._workerPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_blueprint: {
        value: configDeploymentTerraformBlueprintToHclTerraform(this._terraformBlueprint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigDeploymentTerraformBlueprintList",
      },
      timeouts: {
        value: configDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
