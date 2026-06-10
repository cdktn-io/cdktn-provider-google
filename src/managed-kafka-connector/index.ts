/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ManagedKafkaConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#configs ManagedKafkaConnector#configs}
  */
  readonly configs?: { [key: string]: string };
  /**
  * The connect cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#connect_cluster ManagedKafkaConnector#connect_cluster}
  */
  readonly connectCluster: string;
  /**
  * The ID to use for the connector, which will become the final component of the connector's name. This value is structured like: 'my-connector-id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#connector_id ManagedKafkaConnector#connector_id}
  */
  readonly connectorId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#deletion_policy ManagedKafkaConnector#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#location ManagedKafkaConnector#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}
  */
  readonly project?: string;
  /**
  * task_restart_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#task_restart_policy ManagedKafkaConnector#task_restart_policy}
  */
  readonly taskRestartPolicy?: ManagedKafkaConnectorTaskRestartPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#timeouts ManagedKafkaConnector#timeouts}
  */
  readonly timeouts?: ManagedKafkaConnectorTimeouts;
}
export interface ManagedKafkaConnectorTaskRestartPolicy {
  /**
  * The maximum amount of time to wait before retrying a failed task. This sets an upper bound for the backoff delay.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#maximum_backoff ManagedKafkaConnector#maximum_backoff}
  */
  readonly maximumBackoff?: string;
  /**
  * The minimum amount of time to wait before retrying a failed task. This sets a lower bound for the backoff delay.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#minimum_backoff ManagedKafkaConnector#minimum_backoff}
  */
  readonly minimumBackoff?: string;
}

export function managedKafkaConnectorTaskRestartPolicyToTerraform(struct?: ManagedKafkaConnectorTaskRestartPolicyOutputReference | ManagedKafkaConnectorTaskRestartPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_backoff: cdktn.stringToTerraform(struct!.maximumBackoff),
    minimum_backoff: cdktn.stringToTerraform(struct!.minimumBackoff),
  }
}


export function managedKafkaConnectorTaskRestartPolicyToHclTerraform(struct?: ManagedKafkaConnectorTaskRestartPolicyOutputReference | ManagedKafkaConnectorTaskRestartPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_backoff: {
      value: cdktn.stringToHclTerraform(struct!.maximumBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_backoff: {
      value: cdktn.stringToHclTerraform(struct!.minimumBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedKafkaConnectorTaskRestartPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedKafkaConnectorTaskRestartPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBackoff = this._maximumBackoff;
    }
    if (this._minimumBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBackoff = this._minimumBackoff;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKafkaConnectorTaskRestartPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumBackoff = undefined;
      this._minimumBackoff = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumBackoff = value.maximumBackoff;
      this._minimumBackoff = value.minimumBackoff;
    }
  }

  // maximum_backoff - computed: false, optional: true, required: false
  private _maximumBackoff?: string; 
  public get maximumBackoff() {
    return this.getStringAttribute('maximum_backoff');
  }
  public set maximumBackoff(value: string) {
    this._maximumBackoff = value;
  }
  public resetMaximumBackoff() {
    this._maximumBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBackoffInput() {
    return this._maximumBackoff;
  }

  // minimum_backoff - computed: false, optional: true, required: false
  private _minimumBackoff?: string; 
  public get minimumBackoff() {
    return this.getStringAttribute('minimum_backoff');
  }
  public set minimumBackoff(value: string) {
    this._minimumBackoff = value;
  }
  public resetMinimumBackoff() {
    this._minimumBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBackoffInput() {
    return this._minimumBackoff;
  }
}
export interface ManagedKafkaConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#create ManagedKafkaConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#delete ManagedKafkaConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#update ManagedKafkaConnector#update}
  */
  readonly update?: string;
}

export function managedKafkaConnectorTimeoutsToTerraform(struct?: ManagedKafkaConnectorTimeouts | cdktn.IResolvable): any {
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


export function managedKafkaConnectorTimeoutsToHclTerraform(struct?: ManagedKafkaConnectorTimeouts | cdktn.IResolvable): any {
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

export class ManagedKafkaConnectorTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagedKafkaConnectorTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ManagedKafkaConnectorTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector google_managed_kafka_connector}
*/
export class ManagedKafkaConnector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_managed_kafka_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ManagedKafkaConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedKafkaConnector to import
  * @param importFromId The id of the existing ManagedKafkaConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedKafkaConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_managed_kafka_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/managed_kafka_connector google_managed_kafka_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedKafkaConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedKafkaConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_managed_kafka_connector',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.36.0',
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
    this._configs = config.configs;
    this._connectCluster = config.connectCluster;
    this._connectorId = config.connectorId;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._taskRestartPolicy.internalValue = config.taskRestartPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configs - computed: false, optional: true, required: false
  private _configs?: { [key: string]: string }; 
  public get configs() {
    return this.getStringMapAttribute('configs');
  }
  public set configs(value: { [key: string]: string }) {
    this._configs = value;
  }
  public resetConfigs() {
    this._configs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs;
  }

  // connect_cluster - computed: false, optional: false, required: true
  private _connectCluster?: string; 
  public get connectCluster() {
    return this.getStringAttribute('connect_cluster');
  }
  public set connectCluster(value: string) {
    this._connectCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectClusterInput() {
    return this._connectCluster;
  }

  // connector_id - computed: false, optional: false, required: true
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // task_restart_policy - computed: false, optional: true, required: false
  private _taskRestartPolicy = new ManagedKafkaConnectorTaskRestartPolicyOutputReference(this, "task_restart_policy");
  public get taskRestartPolicy() {
    return this._taskRestartPolicy;
  }
  public putTaskRestartPolicy(value: ManagedKafkaConnectorTaskRestartPolicy) {
    this._taskRestartPolicy.internalValue = value;
  }
  public resetTaskRestartPolicy() {
    this._taskRestartPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRestartPolicyInput() {
    return this._taskRestartPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManagedKafkaConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagedKafkaConnectorTimeouts) {
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
      configs: cdktn.hashMapper(cdktn.stringToTerraform)(this._configs),
      connect_cluster: cdktn.stringToTerraform(this._connectCluster),
      connector_id: cdktn.stringToTerraform(this._connectorId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      task_restart_policy: managedKafkaConnectorTaskRestartPolicyToTerraform(this._taskRestartPolicy.internalValue),
      timeouts: managedKafkaConnectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configs: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._configs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connect_cluster: {
        value: cdktn.stringToHclTerraform(this._connectCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_id: {
        value: cdktn.stringToHclTerraform(this._connectorId),
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
      task_restart_policy: {
        value: managedKafkaConnectorTaskRestartPolicyToHclTerraform(this._taskRestartPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedKafkaConnectorTaskRestartPolicyList",
      },
      timeouts: {
        value: managedKafkaConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagedKafkaConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
