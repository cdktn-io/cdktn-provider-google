/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataprocGdcServiceInstanceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#deletion_policy DataprocGdcServiceInstance#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User-provided human-readable name to be used in user interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#display_name DataprocGdcServiceInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#id DataprocGdcServiceInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels to associate with this service instance. Labels may be used for filtering and billing tracking. 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#labels DataprocGdcServiceInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#location DataprocGdcServiceInstance#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#project DataprocGdcServiceInstance#project}
  */
  readonly project?: string;
  /**
  * Requested service account to associate with ServiceInstance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#service_account DataprocGdcServiceInstance#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Id of the service instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#service_instance_id DataprocGdcServiceInstance#service_instance_id}
  */
  readonly serviceInstanceId: string;
  /**
  * gdce_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#gdce_cluster DataprocGdcServiceInstance#gdce_cluster}
  */
  readonly gdceCluster?: DataprocGdcServiceInstanceGdceCluster;
  /**
  * spark_service_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#spark_service_instance_config DataprocGdcServiceInstance#spark_service_instance_config}
  */
  readonly sparkServiceInstanceConfig?: DataprocGdcServiceInstanceSparkServiceInstanceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#timeouts DataprocGdcServiceInstance#timeouts}
  */
  readonly timeouts?: DataprocGdcServiceInstanceTimeouts;
}
export interface DataprocGdcServiceInstanceGdceCluster {
  /**
  * Gdce cluster resource id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#gdce_cluster DataprocGdcServiceInstance#gdce_cluster}
  */
  readonly gdceCluster: string;
}

export function dataprocGdcServiceInstanceGdceClusterToTerraform(struct?: DataprocGdcServiceInstanceGdceClusterOutputReference | DataprocGdcServiceInstanceGdceCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gdce_cluster: cdktn.stringToTerraform(struct!.gdceCluster),
  }
}


export function dataprocGdcServiceInstanceGdceClusterToHclTerraform(struct?: DataprocGdcServiceInstanceGdceClusterOutputReference | DataprocGdcServiceInstanceGdceCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gdce_cluster: {
      value: cdktn.stringToHclTerraform(struct!.gdceCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocGdcServiceInstanceGdceClusterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocGdcServiceInstanceGdceCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gdceCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.gdceCluster = this._gdceCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocGdcServiceInstanceGdceCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gdceCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gdceCluster = value.gdceCluster;
    }
  }

  // gdce_cluster - computed: false, optional: false, required: true
  private _gdceCluster?: string; 
  public get gdceCluster() {
    return this.getStringAttribute('gdce_cluster');
  }
  public set gdceCluster(value: string) {
    this._gdceCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gdceClusterInput() {
    return this._gdceCluster;
  }
}
export interface DataprocGdcServiceInstanceSparkServiceInstanceConfig {
}

export function dataprocGdcServiceInstanceSparkServiceInstanceConfigToTerraform(struct?: DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference | DataprocGdcServiceInstanceSparkServiceInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataprocGdcServiceInstanceSparkServiceInstanceConfigToHclTerraform(struct?: DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference | DataprocGdcServiceInstanceSparkServiceInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocGdcServiceInstanceSparkServiceInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocGdcServiceInstanceSparkServiceInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataprocGdcServiceInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#create DataprocGdcServiceInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#delete DataprocGdcServiceInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#update DataprocGdcServiceInstance#update}
  */
  readonly update?: string;
}

export function dataprocGdcServiceInstanceTimeoutsToTerraform(struct?: DataprocGdcServiceInstanceTimeouts | cdktn.IResolvable): any {
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


export function dataprocGdcServiceInstanceTimeoutsToHclTerraform(struct?: DataprocGdcServiceInstanceTimeouts | cdktn.IResolvable): any {
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

export class DataprocGdcServiceInstanceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataprocGdcServiceInstanceTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataprocGdcServiceInstanceTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance google_dataproc_gdc_service_instance}
*/
export class DataprocGdcServiceInstance extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_gdc_service_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataprocGdcServiceInstance resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataprocGdcServiceInstance to import
  * @param importFromId The id of the existing DataprocGdcServiceInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataprocGdcServiceInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dataproc_gdc_service_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_gdc_service_instance google_dataproc_gdc_service_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocGdcServiceInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocGdcServiceInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_gdc_service_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.44.0',
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
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._serviceInstanceId = config.serviceInstanceId;
    this._gdceCluster.internalValue = config.gdceCluster;
    this._sparkServiceInstanceConfig.internalValue = config.sparkServiceInstanceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_service_account - computed: true, optional: false, required: false
  public get effectiveServiceAccount() {
    return this.getStringAttribute('effective_service_account');
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // requested_state - computed: true, optional: false, required: false
  public get requestedState() {
    return this.getStringAttribute('requested_state');
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

  // service_instance_id - computed: false, optional: false, required: true
  private _serviceInstanceId?: string; 
  public get serviceInstanceId() {
    return this.getStringAttribute('service_instance_id');
  }
  public set serviceInstanceId(value: string) {
    this._serviceInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceIdInput() {
    return this._serviceInstanceId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
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

  // gdce_cluster - computed: false, optional: true, required: false
  private _gdceCluster = new DataprocGdcServiceInstanceGdceClusterOutputReference(this, "gdce_cluster");
  public get gdceCluster() {
    return this._gdceCluster;
  }
  public putGdceCluster(value: DataprocGdcServiceInstanceGdceCluster) {
    this._gdceCluster.internalValue = value;
  }
  public resetGdceCluster() {
    this._gdceCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gdceClusterInput() {
    return this._gdceCluster.internalValue;
  }

  // spark_service_instance_config - computed: false, optional: true, required: false
  private _sparkServiceInstanceConfig = new DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference(this, "spark_service_instance_config");
  public get sparkServiceInstanceConfig() {
    return this._sparkServiceInstanceConfig;
  }
  public putSparkServiceInstanceConfig(value: DataprocGdcServiceInstanceSparkServiceInstanceConfig) {
    this._sparkServiceInstanceConfig.internalValue = value;
  }
  public resetSparkServiceInstanceConfig() {
    this._sparkServiceInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkServiceInstanceConfigInput() {
    return this._sparkServiceInstanceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocGdcServiceInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocGdcServiceInstanceTimeouts) {
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
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      service_account: cdktn.stringToTerraform(this._serviceAccount),
      service_instance_id: cdktn.stringToTerraform(this._serviceInstanceId),
      gdce_cluster: dataprocGdcServiceInstanceGdceClusterToTerraform(this._gdceCluster.internalValue),
      spark_service_instance_config: dataprocGdcServiceInstanceSparkServiceInstanceConfigToTerraform(this._sparkServiceInstanceConfig.internalValue),
      timeouts: dataprocGdcServiceInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      service_account: {
        value: cdktn.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_instance_id: {
        value: cdktn.stringToHclTerraform(this._serviceInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gdce_cluster: {
        value: dataprocGdcServiceInstanceGdceClusterToHclTerraform(this._gdceCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocGdcServiceInstanceGdceClusterList",
      },
      spark_service_instance_config: {
        value: dataprocGdcServiceInstanceSparkServiceInstanceConfigToHclTerraform(this._sparkServiceInstanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocGdcServiceInstanceSparkServiceInstanceConfigList",
      },
      timeouts: {
        value: dataprocGdcServiceInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataprocGdcServiceInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
