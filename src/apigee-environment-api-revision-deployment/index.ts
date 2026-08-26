/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApigeeEnvironmentApiRevisionDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Apigee API proxy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#api ApigeeEnvironmentApiRevisionDeployment#api}
  */
  readonly api: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#deletion_policy ApigeeEnvironmentApiRevisionDeployment#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Apigee environment name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#environment ApigeeEnvironmentApiRevisionDeployment#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apigee organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#org_id ApigeeEnvironmentApiRevisionDeployment#org_id}
  */
  readonly orgId: string;
  /**
  * If true, replaces other deployed revisions of this proxy in the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#override ApigeeEnvironmentApiRevisionDeployment#override}
  */
  readonly override?: boolean | cdktn.IResolvable;
  /**
  * API proxy revision number to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#revision ApigeeEnvironmentApiRevisionDeployment#revision}
  */
  readonly revision: number;
  /**
  * If true, enables sequenced rollout for safe traffic switching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#sequenced_rollout ApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}
  */
  readonly sequencedRollout?: boolean | cdktn.IResolvable;
  /**
  * Optional service account the deployed proxy runs as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#service_account ApigeeEnvironmentApiRevisionDeployment#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#timeouts ApigeeEnvironmentApiRevisionDeployment#timeouts}
  */
  readonly timeouts?: ApigeeEnvironmentApiRevisionDeploymentTimeouts;
}
export interface ApigeeEnvironmentApiRevisionDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}
  */
  readonly delete?: string;
}

export function apigeeEnvironmentApiRevisionDeploymentTimeoutsToTerraform(struct?: ApigeeEnvironmentApiRevisionDeploymentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function apigeeEnvironmentApiRevisionDeploymentTimeoutsToHclTerraform(struct?: ApigeeEnvironmentApiRevisionDeploymentTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeEnvironmentApiRevisionDeploymentTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeEnvironmentApiRevisionDeploymentTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment google_apigee_environment_api_revision_deployment}
*/
export class ApigeeEnvironmentApiRevisionDeployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_environment_api_revision_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeEnvironmentApiRevisionDeployment to import
  * @param importFromId The id of the existing ApigeeEnvironmentApiRevisionDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeEnvironmentApiRevisionDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_environment_api_revision_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apigee_environment_api_revision_deployment google_apigee_environment_api_revision_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeEnvironmentApiRevisionDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeEnvironmentApiRevisionDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_environment_api_revision_deployment',
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
    this._api = config.api;
    this._deletionPolicy = config.deletionPolicy;
    this._environment = config.environment;
    this._id = config.id;
    this._orgId = config.orgId;
    this._override = config.override;
    this._revision = config.revision;
    this._sequencedRollout = config.sequencedRollout;
    this._serviceAccount = config.serviceAccount;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // basepaths - computed: true, optional: false, required: false
  public get basepaths() {
    return this.getListAttribute('basepaths');
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

  // deploy_start_time - computed: true, optional: false, required: false
  public get deployStartTime() {
    return this.getStringAttribute('deploy_start_time');
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // sequenced_rollout - computed: false, optional: true, required: false
  private _sequencedRollout?: boolean | cdktn.IResolvable; 
  public get sequencedRollout() {
    return this.getBooleanAttribute('sequenced_rollout');
  }
  public set sequencedRollout(value: boolean | cdktn.IResolvable) {
    this._sequencedRollout = value;
  }
  public resetSequencedRollout() {
    this._sequencedRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencedRolloutInput() {
    return this._sequencedRollout;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeEnvironmentApiRevisionDeploymentTimeouts) {
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
      api: cdktn.stringToTerraform(this._api),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      environment: cdktn.stringToTerraform(this._environment),
      id: cdktn.stringToTerraform(this._id),
      org_id: cdktn.stringToTerraform(this._orgId),
      override: cdktn.booleanToTerraform(this._override),
      revision: cdktn.numberToTerraform(this._revision),
      sequenced_rollout: cdktn.booleanToTerraform(this._sequencedRollout),
      service_account: cdktn.stringToTerraform(this._serviceAccount),
      timeouts: apigeeEnvironmentApiRevisionDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api: {
        value: cdktn.stringToHclTerraform(this._api),
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
      environment: {
        value: cdktn.stringToHclTerraform(this._environment),
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
      org_id: {
        value: cdktn.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override: {
        value: cdktn.booleanToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      revision: {
        value: cdktn.numberToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sequenced_rollout: {
        value: cdktn.booleanToHclTerraform(this._sequencedRollout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_account: {
        value: cdktn.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apigeeEnvironmentApiRevisionDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigeeEnvironmentApiRevisionDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
