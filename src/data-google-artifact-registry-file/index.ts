/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleArtifactRegistryFileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file#file_id DataGoogleArtifactRegistryFile#file_id}
  */
  readonly fileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file#id DataGoogleArtifactRegistryFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file#location DataGoogleArtifactRegistryFile#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file#output_path DataGoogleArtifactRegistryFile#output_path}
  */
  readonly outputPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file#overwrite DataGoogleArtifactRegistryFile#overwrite}
  */
  readonly overwrite?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file#project DataGoogleArtifactRegistryFile#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file#repository_id DataGoogleArtifactRegistryFile#repository_id}
  */
  readonly repositoryId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file#timeouts DataGoogleArtifactRegistryFile#timeouts}
  */
  readonly timeouts?: DataGoogleArtifactRegistryFileTimeouts;
}
export interface DataGoogleArtifactRegistryFileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file#read DataGoogleArtifactRegistryFile#read}
  */
  readonly read?: string;
}

export function dataGoogleArtifactRegistryFileTimeoutsToTerraform(struct?: DataGoogleArtifactRegistryFileTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function dataGoogleArtifactRegistryFileTimeoutsToHclTerraform(struct?: DataGoogleArtifactRegistryFileTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGoogleArtifactRegistryFileTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGoogleArtifactRegistryFileTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryFileTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file google_artifact_registry_file}
*/
export class DataGoogleArtifactRegistryFile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_artifact_registry_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleArtifactRegistryFile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleArtifactRegistryFile to import
  * @param importFromId The id of the existing DataGoogleArtifactRegistryFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleArtifactRegistryFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_artifact_registry_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_file google_artifact_registry_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleArtifactRegistryFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleArtifactRegistryFileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_artifact_registry_file',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
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
    this._fileId = config.fileId;
    this._id = config.id;
    this._location = config.location;
    this._outputPath = config.outputPath;
    this._overwrite = config.overwrite;
    this._project = config.project;
    this._repositoryId = config.repositoryId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // file_id - computed: false, optional: false, required: true
  private _fileId?: string; 
  public get fileId() {
    return this.getStringAttribute('file_id');
  }
  public set fileId(value: string) {
    this._fileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdInput() {
    return this._fileId;
  }

  // hashes - computed: true, optional: false, required: false
  private _hashes = new cdktn.StringMap(this, "hashes");
  public get hashes() {
    return this._hashes;
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

  // output_base64sha256 - computed: true, optional: false, required: false
  public get outputBase64Sha256() {
    return this.getStringAttribute('output_base64sha256');
  }

  // output_path - computed: false, optional: false, required: true
  private _outputPath?: string; 
  public get outputPath() {
    return this.getStringAttribute('output_path');
  }
  public set outputPath(value: string) {
    this._outputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPathInput() {
    return this._outputPath;
  }

  // output_sha256 - computed: true, optional: false, required: false
  public get outputSha256() {
    return this.getStringAttribute('output_sha256');
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktn.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktn.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
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

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // size_bytes - computed: true, optional: false, required: false
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataGoogleArtifactRegistryFileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataGoogleArtifactRegistryFileTimeouts) {
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
      file_id: cdktn.stringToTerraform(this._fileId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      output_path: cdktn.stringToTerraform(this._outputPath),
      overwrite: cdktn.booleanToTerraform(this._overwrite),
      project: cdktn.stringToTerraform(this._project),
      repository_id: cdktn.stringToTerraform(this._repositoryId),
      timeouts: dataGoogleArtifactRegistryFileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_id: {
        value: cdktn.stringToHclTerraform(this._fileId),
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
      output_path: {
        value: cdktn.stringToHclTerraform(this._outputPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite: {
        value: cdktn.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktn.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataGoogleArtifactRegistryFileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataGoogleArtifactRegistryFileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
