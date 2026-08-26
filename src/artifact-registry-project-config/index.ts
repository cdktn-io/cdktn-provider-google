/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ArtifactRegistryProjectConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config#id ArtifactRegistryProjectConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the location this config is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config#location ArtifactRegistryProjectConfig#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config#project ArtifactRegistryProjectConfig#project}
  */
  readonly project?: string;
  /**
  * platform_logs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config#platform_logs_config ArtifactRegistryProjectConfig#platform_logs_config}
  */
  readonly platformLogsConfig?: ArtifactRegistryProjectConfigPlatformLogsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config#timeouts ArtifactRegistryProjectConfig#timeouts}
  */
  readonly timeouts?: ArtifactRegistryProjectConfigTimeouts;
}
export interface ArtifactRegistryProjectConfigPlatformLogsConfig {
  /**
  * The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config#logging_state ArtifactRegistryProjectConfig#logging_state}
  */
  readonly loggingState?: string;
  /**
  * The severity level for the logs. Logs will be generated if their
  * severity level is >= than the value of the severity level mentioned here. Possible values: ["DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config#severity_level ArtifactRegistryProjectConfig#severity_level}
  */
  readonly severityLevel?: string;
}

export function artifactRegistryProjectConfigPlatformLogsConfigToTerraform(struct?: ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference | ArtifactRegistryProjectConfigPlatformLogsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    logging_state: cdktn.stringToTerraform(struct!.loggingState),
    severity_level: cdktn.stringToTerraform(struct!.severityLevel),
  }
}


export function artifactRegistryProjectConfigPlatformLogsConfigToHclTerraform(struct?: ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference | ArtifactRegistryProjectConfigPlatformLogsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    logging_state: {
      value: cdktn.stringToHclTerraform(struct!.loggingState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity_level: {
      value: cdktn.stringToHclTerraform(struct!.severityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryProjectConfigPlatformLogsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggingState !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingState = this._loggingState;
    }
    if (this._severityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLevel = this._severityLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryProjectConfigPlatformLogsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loggingState = undefined;
      this._severityLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loggingState = value.loggingState;
      this._severityLevel = value.severityLevel;
    }
  }

  // logging_state - computed: false, optional: true, required: false
  private _loggingState?: string; 
  public get loggingState() {
    return this.getStringAttribute('logging_state');
  }
  public set loggingState(value: string) {
    this._loggingState = value;
  }
  public resetLoggingState() {
    this._loggingState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingStateInput() {
    return this._loggingState;
  }

  // severity_level - computed: false, optional: true, required: false
  private _severityLevel?: string; 
  public get severityLevel() {
    return this.getStringAttribute('severity_level');
  }
  public set severityLevel(value: string) {
    this._severityLevel = value;
  }
  public resetSeverityLevel() {
    this._severityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLevelInput() {
    return this._severityLevel;
  }
}
export interface ArtifactRegistryProjectConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config#create ArtifactRegistryProjectConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config#delete ArtifactRegistryProjectConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config#update ArtifactRegistryProjectConfig#update}
  */
  readonly update?: string;
}

export function artifactRegistryProjectConfigTimeoutsToTerraform(struct?: ArtifactRegistryProjectConfigTimeouts | cdktn.IResolvable): any {
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


export function artifactRegistryProjectConfigTimeoutsToHclTerraform(struct?: ArtifactRegistryProjectConfigTimeouts | cdktn.IResolvable): any {
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

export class ArtifactRegistryProjectConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArtifactRegistryProjectConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArtifactRegistryProjectConfigTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config google_artifact_registry_project_config}
*/
export class ArtifactRegistryProjectConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_artifact_registry_project_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArtifactRegistryProjectConfig to import
  * @param importFromId The id of the existing ArtifactRegistryProjectConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArtifactRegistryProjectConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_artifact_registry_project_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_project_config google_artifact_registry_project_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArtifactRegistryProjectConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ArtifactRegistryProjectConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_artifact_registry_project_config',
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
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._platformLogsConfig.internalValue = config.platformLogsConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // platform_logs_config - computed: false, optional: true, required: false
  private _platformLogsConfig = new ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference(this, "platform_logs_config");
  public get platformLogsConfig() {
    return this._platformLogsConfig;
  }
  public putPlatformLogsConfig(value: ArtifactRegistryProjectConfigPlatformLogsConfig) {
    this._platformLogsConfig.internalValue = value;
  }
  public resetPlatformLogsConfig() {
    this._platformLogsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformLogsConfigInput() {
    return this._platformLogsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ArtifactRegistryProjectConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ArtifactRegistryProjectConfigTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      platform_logs_config: artifactRegistryProjectConfigPlatformLogsConfigToTerraform(this._platformLogsConfig.internalValue),
      timeouts: artifactRegistryProjectConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      platform_logs_config: {
        value: artifactRegistryProjectConfigPlatformLogsConfigToHclTerraform(this._platformLogsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArtifactRegistryProjectConfigPlatformLogsConfigList",
      },
      timeouts: {
        value: artifactRegistryProjectConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArtifactRegistryProjectConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
