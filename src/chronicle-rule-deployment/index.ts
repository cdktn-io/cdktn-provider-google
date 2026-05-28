/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChronicleRuleDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether detections resulting from this deployment should be considered
  * alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#alerting ChronicleRuleDeployment#alerting}
  */
  readonly alerting?: boolean | cdktn.IResolvable;
  /**
  * The archive state of the rule deployment.
  * Cannot be set to true unless enabled is set to false i.e.
  * archiving requires a two-step process: first, disable the rule by
  * setting 'enabled' to false, then set 'archive' to true.
  * If set to true, alerting will automatically be set to false.
  * If currently set to true, enabled, alerting, and run_frequency cannot be
  * updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#archived ChronicleRuleDeployment#archived}
  */
  readonly archived?: boolean | cdktn.IResolvable;
  /**
  * Whether the rule is currently deployed continuously against incoming data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#enabled ChronicleRuleDeployment#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#id ChronicleRuleDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique identifier for the Chronicle instance, which is the same as the customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#instance ChronicleRuleDeployment#instance}
  */
  readonly instance: string;
  /**
  * The location of the resource. This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#location ChronicleRuleDeployment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#project ChronicleRuleDeployment#project}
  */
  readonly project?: string;
  /**
  * The Rule ID of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#rule ChronicleRuleDeployment#rule}
  */
  readonly rule: string;
  /**
  * The run frequency of the rule deployment.
  * Possible values:
  * LIVE
  * HOURLY
  * DAILY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#run_frequency ChronicleRuleDeployment#run_frequency}
  */
  readonly runFrequency?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#timeouts ChronicleRuleDeployment#timeouts}
  */
  readonly timeouts?: ChronicleRuleDeploymentTimeouts;
}
export interface ChronicleRuleDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#create ChronicleRuleDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#delete ChronicleRuleDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#update ChronicleRuleDeployment#update}
  */
  readonly update?: string;
}

export function chronicleRuleDeploymentTimeoutsToTerraform(struct?: ChronicleRuleDeploymentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function chronicleRuleDeploymentTimeoutsToHclTerraform(struct?: ChronicleRuleDeploymentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ChronicleRuleDeploymentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleRuleDeploymentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleRuleDeploymentTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment google_chronicle_rule_deployment}
*/
export class ChronicleRuleDeployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_rule_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleRuleDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleRuleDeployment to import
  * @param importFromId The id of the existing ChronicleRuleDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleRuleDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_rule_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/chronicle_rule_deployment google_chronicle_rule_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleRuleDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleRuleDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_rule_deployment',
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
    this._alerting = config.alerting;
    this._archived = config.archived;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._project = config.project;
    this._rule = config.rule;
    this._runFrequency = config.runFrequency;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerting - computed: false, optional: true, required: false
  private _alerting?: boolean | cdktn.IResolvable; 
  public get alerting() {
    return this.getBooleanAttribute('alerting');
  }
  public set alerting(value: boolean | cdktn.IResolvable) {
    this._alerting = value;
  }
  public resetAlerting() {
    this._alerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingInput() {
    return this._alerting;
  }

  // archive_time - computed: true, optional: false, required: false
  public get archiveTime() {
    return this.getStringAttribute('archive_time');
  }

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean | cdktn.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktn.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }

  // consumer_rules - computed: true, optional: false, required: false
  public get consumerRules() {
    return this.getListAttribute('consumer_rules');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // execution_state - computed: true, optional: false, required: false
  public get executionState() {
    return this.getStringAttribute('execution_state');
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // last_alert_status_change_time - computed: true, optional: false, required: false
  public get lastAlertStatusChangeTime() {
    return this.getStringAttribute('last_alert_status_change_time');
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

  // producer_rules - computed: true, optional: false, required: false
  public get producerRules() {
    return this.getListAttribute('producer_rules');
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

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // run_frequency - computed: false, optional: true, required: false
  private _runFrequency?: string; 
  public get runFrequency() {
    return this.getStringAttribute('run_frequency');
  }
  public set runFrequency(value: string) {
    this._runFrequency = value;
  }
  public resetRunFrequency() {
    this._runFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runFrequencyInput() {
    return this._runFrequency;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleRuleDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleRuleDeploymentTimeouts) {
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
      alerting: cdktn.booleanToTerraform(this._alerting),
      archived: cdktn.booleanToTerraform(this._archived),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      rule: cdktn.stringToTerraform(this._rule),
      run_frequency: cdktn.stringToTerraform(this._runFrequency),
      timeouts: chronicleRuleDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerting: {
        value: cdktn.booleanToHclTerraform(this._alerting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      archived: {
        value: cdktn.booleanToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
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
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
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
      rule: {
        value: cdktn.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_frequency: {
        value: cdktn.stringToHclTerraform(this._runFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: chronicleRuleDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleRuleDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
