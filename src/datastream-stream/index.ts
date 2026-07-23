/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { DatastreamStreamBackfillAll, 
datastreamStreamBackfillAllToTerraform, 
datastreamStreamBackfillAllToHclTerraform, 
DatastreamStreamBackfillAllOutputReference, 
DatastreamStreamBackfillNone, 
datastreamStreamBackfillNoneToTerraform, 
datastreamStreamBackfillNoneToHclTerraform, 
DatastreamStreamBackfillNoneOutputReference, 
DatastreamStreamDestinationConfig, 
datastreamStreamDestinationConfigToTerraform, 
datastreamStreamDestinationConfigToHclTerraform, 
DatastreamStreamDestinationConfigOutputReference, 
DatastreamStreamRuleSets, 
datastreamStreamRuleSetsToTerraform, 
datastreamStreamRuleSetsToHclTerraform, 
DatastreamStreamRuleSetsList, 
DatastreamStreamSourceConfig, 
datastreamStreamSourceConfigToTerraform, 
datastreamStreamSourceConfigToHclTerraform, 
DatastreamStreamSourceConfigOutputReference, 
DatastreamStreamTimeouts, 
datastreamStreamTimeoutsToTerraform, 
datastreamStreamTimeoutsToHclTerraform, 
DatastreamStreamTimeoutsOutputReference} from './index-structs/index';
export * from './index-structs/index';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface DatastreamStreamConfig extends cdktn.TerraformMetaArguments {
  /**
  * Create the stream without validating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#create_without_validation DatastreamStream#create_without_validation}
  */
  readonly createWithoutValidation?: boolean | cdktn.IResolvable;
  /**
  * A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data
  * will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#customer_managed_encryption_key DatastreamStream#customer_managed_encryption_key}
  */
  readonly customerManagedEncryptionKey?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#deletion_policy DatastreamStream#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Desired state of the Stream. Set this field to 'RUNNING' to start the stream,
  * 'NOT_STARTED' to create the stream without starting and 'PAUSED' to pause
  * the stream from a 'RUNNING' state.
  * Possible values: NOT_STARTED, RUNNING, PAUSED. Default: NOT_STARTED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#desired_state DatastreamStream#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#display_name DatastreamStream#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#id DatastreamStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#labels DatastreamStream#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location this stream is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#location DatastreamStream#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#project DatastreamStream#project}
  */
  readonly project?: string;
  /**
  * The stream identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#stream_id DatastreamStream#stream_id}
  */
  readonly streamId: string;
  /**
  * backfill_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#backfill_all DatastreamStream#backfill_all}
  */
  readonly backfillAll?: DatastreamStreamBackfillAll;
  /**
  * backfill_none block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#backfill_none DatastreamStream#backfill_none}
  */
  readonly backfillNone?: DatastreamStreamBackfillNone;
  /**
  * destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#destination_config DatastreamStream#destination_config}
  */
  readonly destinationConfig: DatastreamStreamDestinationConfig;
  /**
  * rule_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#rule_sets DatastreamStream#rule_sets}
  */
  readonly ruleSets?: DatastreamStreamRuleSets[] | cdktn.IResolvable;
  /**
  * source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#source_config DatastreamStream#source_config}
  */
  readonly sourceConfig: DatastreamStreamSourceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#timeouts DatastreamStream#timeouts}
  */
  readonly timeouts?: DatastreamStreamTimeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream google_datastream_stream}
*/
export class DatastreamStream extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_datastream_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatastreamStream resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatastreamStream to import
  * @param importFromId The id of the existing DatastreamStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatastreamStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_datastream_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream google_datastream_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatastreamStreamConfig
  */
  public constructor(scope: Construct, id: string, config: DatastreamStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'google_datastream_stream',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.41.0',
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
    this._createWithoutValidation = config.createWithoutValidation;
    this._customerManagedEncryptionKey = config.customerManagedEncryptionKey;
    this._deletionPolicy = config.deletionPolicy;
    this._desiredState = config.desiredState;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._streamId = config.streamId;
    this._backfillAll.internalValue = config.backfillAll;
    this._backfillNone.internalValue = config.backfillNone;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._ruleSets.internalValue = config.ruleSets;
    this._sourceConfig.internalValue = config.sourceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_without_validation - computed: false, optional: true, required: false
  private _createWithoutValidation?: boolean | cdktn.IResolvable; 
  public get createWithoutValidation() {
    return this.getBooleanAttribute('create_without_validation');
  }
  public set createWithoutValidation(value: boolean | cdktn.IResolvable) {
    this._createWithoutValidation = value;
  }
  public resetCreateWithoutValidation() {
    this._createWithoutValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createWithoutValidationInput() {
    return this._createWithoutValidation;
  }

  // customer_managed_encryption_key - computed: false, optional: true, required: false
  private _customerManagedEncryptionKey?: string; 
  public get customerManagedEncryptionKey() {
    return this.getStringAttribute('customer_managed_encryption_key');
  }
  public set customerManagedEncryptionKey(value: string) {
    this._customerManagedEncryptionKey = value;
  }
  public resetCustomerManagedEncryptionKey() {
    this._customerManagedEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedEncryptionKeyInput() {
    return this._customerManagedEncryptionKey;
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

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // stream_id - computed: false, optional: false, required: true
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // backfill_all - computed: false, optional: true, required: false
  private _backfillAll = new DatastreamStreamBackfillAllOutputReference(this, "backfill_all");
  public get backfillAll() {
    return this._backfillAll;
  }
  public putBackfillAll(value: DatastreamStreamBackfillAll) {
    this._backfillAll.internalValue = value;
  }
  public resetBackfillAll() {
    this._backfillAll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillAllInput() {
    return this._backfillAll.internalValue;
  }

  // backfill_none - computed: false, optional: true, required: false
  private _backfillNone = new DatastreamStreamBackfillNoneOutputReference(this, "backfill_none");
  public get backfillNone() {
    return this._backfillNone;
  }
  public putBackfillNone(value: DatastreamStreamBackfillNone) {
    this._backfillNone.internalValue = value;
  }
  public resetBackfillNone() {
    this._backfillNone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillNoneInput() {
    return this._backfillNone.internalValue;
  }

  // destination_config - computed: false, optional: false, required: true
  private _destinationConfig = new DatastreamStreamDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: DatastreamStreamDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // rule_sets - computed: false, optional: true, required: false
  private _ruleSets = new DatastreamStreamRuleSetsList(this, "rule_sets", false);
  public get ruleSets() {
    return this._ruleSets;
  }
  public putRuleSets(value: DatastreamStreamRuleSets[] | cdktn.IResolvable) {
    this._ruleSets.internalValue = value;
  }
  public resetRuleSets() {
    this._ruleSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetsInput() {
    return this._ruleSets.internalValue;
  }

  // source_config - computed: false, optional: false, required: true
  private _sourceConfig = new DatastreamStreamSourceConfigOutputReference(this, "source_config");
  public get sourceConfig() {
    return this._sourceConfig;
  }
  public putSourceConfig(value: DatastreamStreamSourceConfig) {
    this._sourceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigInput() {
    return this._sourceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatastreamStreamTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatastreamStreamTimeouts) {
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
      create_without_validation: cdktn.booleanToTerraform(this._createWithoutValidation),
      customer_managed_encryption_key: cdktn.stringToTerraform(this._customerManagedEncryptionKey),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      desired_state: cdktn.stringToTerraform(this._desiredState),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      stream_id: cdktn.stringToTerraform(this._streamId),
      backfill_all: datastreamStreamBackfillAllToTerraform(this._backfillAll.internalValue),
      backfill_none: datastreamStreamBackfillNoneToTerraform(this._backfillNone.internalValue),
      destination_config: datastreamStreamDestinationConfigToTerraform(this._destinationConfig.internalValue),
      rule_sets: cdktn.listMapper(datastreamStreamRuleSetsToTerraform, true)(this._ruleSets.internalValue),
      source_config: datastreamStreamSourceConfigToTerraform(this._sourceConfig.internalValue),
      timeouts: datastreamStreamTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_without_validation: {
        value: cdktn.booleanToHclTerraform(this._createWithoutValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      customer_managed_encryption_key: {
        value: cdktn.stringToHclTerraform(this._customerManagedEncryptionKey),
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
      desired_state: {
        value: cdktn.stringToHclTerraform(this._desiredState),
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
      stream_id: {
        value: cdktn.stringToHclTerraform(this._streamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backfill_all: {
        value: datastreamStreamBackfillAllToHclTerraform(this._backfillAll.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamStreamBackfillAllList",
      },
      backfill_none: {
        value: datastreamStreamBackfillNoneToHclTerraform(this._backfillNone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamStreamBackfillNoneList",
      },
      destination_config: {
        value: datastreamStreamDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamStreamDestinationConfigList",
      },
      rule_sets: {
        value: cdktn.listMapperHcl(datastreamStreamRuleSetsToHclTerraform, true)(this._ruleSets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamStreamRuleSetsList",
      },
      source_config: {
        value: datastreamStreamSourceConfigToHclTerraform(this._sourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamStreamSourceConfigList",
      },
      timeouts: {
        value: datastreamStreamTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatastreamStreamTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
