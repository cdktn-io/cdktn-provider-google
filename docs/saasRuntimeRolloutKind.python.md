# `saasRuntimeRolloutKind` Submodule <a name="`saasRuntimeRolloutKind` Submodule" id="@cdktn/provider-google.saasRuntimeRolloutKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeRolloutKind <a name="SaasRuntimeRolloutKind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind google_saas_runtime_rollout_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_rollout_kind

saasRuntimeRolloutKind.SaasRuntimeRolloutKind(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  rollout_kind_id: str,
  unit_kind: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  error_budget: SaasRuntimeRolloutKindErrorBudget = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  rollout_orchestration_strategy: str = None,
  timeouts: SaasRuntimeRolloutKindTimeouts = None,
  unit_filter: str = None,
  update_unit_kind_strategy: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.rolloutKindId">rollout_kind_id</a></code> | <code>str</code> | The ID value for the new rollout kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.unitKind">unit_kind</a></code> | <code>str</code> | UnitKind that this rollout kind corresponds to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.errorBudget">error_budget</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | error_budget block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.rolloutOrchestrationStrategy">rollout_orchestration_strategy</a></code> | <code>str</code> | The strategy used for executing a Rollout. This is a required field. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.unitFilter">unit_filter</a></code> | <code>str</code> | CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.updateUnitKindStrategy">update_unit_kind_strategy</a></code> | <code>str</code> | The config for updating the unit kind. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#location SaasRuntimeRolloutKind#location}

---

##### `rollout_kind_id`<sup>Required</sup> <a name="rollout_kind_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.rolloutKindId"></a>

- *Type:* str

The ID value for the new rollout kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_kind_id SaasRuntimeRolloutKind#rollout_kind_id}

---

##### `unit_kind`<sup>Required</sup> <a name="unit_kind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.unitKind"></a>

- *Type:* str

UnitKind that this rollout kind corresponds to.

Rollouts stemming from this
rollout kind will target the units of this unit kind. In other words, this
defines the population of target units to be upgraded by rollouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_kind SaasRuntimeRolloutKind#unit_kind}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#annotations SaasRuntimeRolloutKind#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#deletion_policy SaasRuntimeRolloutKind#deletion_policy}

---

##### `error_budget`<sup>Optional</sup> <a name="error_budget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.errorBudget"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

error_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#error_budget SaasRuntimeRolloutKind#error_budget}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#labels SaasRuntimeRolloutKind#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}.

---

##### `rollout_orchestration_strategy`<sup>Optional</sup> <a name="rollout_orchestration_strategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.rolloutOrchestrationStrategy"></a>

- *Type:* str

The strategy used for executing a Rollout. This is a required field.

There are two supported values strategies which are used to control a rollout.

* "Google.Cloud.Simple.AllAtOnce"
* "Google.Cloud.Simple.OneLocationAtATime"

A rollout with one of these simple strategies will rollout across
all locations defined in the associated UnitKind's Saas Locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_orchestration_strategy SaasRuntimeRolloutKind#rollout_orchestration_strategy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#timeouts SaasRuntimeRolloutKind#timeouts}

---

##### `unit_filter`<sup>Optional</sup> <a name="unit_filter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.unitFilter"></a>

- *Type:* str

CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_filter SaasRuntimeRolloutKind#unit_filter}

---

##### `update_unit_kind_strategy`<sup>Optional</sup> <a name="update_unit_kind_strategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.updateUnitKindStrategy"></a>

- *Type:* str

The config for updating the unit kind.

By default, the unit kind will be
updated on the rollout start.
Possible values:
UPDATE_UNIT_KIND_STRATEGY_ON_START
UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update_unit_kind_strategy SaasRuntimeRolloutKind#update_unit_kind_strategy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget">put_error_budget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetErrorBudget">reset_error_budget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy">reset_rollout_orchestration_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUnitFilter">reset_unit_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUpdateUnitKindStrategy">reset_update_unit_kind_strategy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_error_budget` <a name="put_error_budget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget"></a>

```python
def put_error_budget(
  allowed_count: typing.Union[int, float] = None,
  allowed_percentage: typing.Union[int, float] = None
) -> None
```

###### `allowed_count`<sup>Optional</sup> <a name="allowed_count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget.parameter.allowedCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of failed units allowed in a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_count SaasRuntimeRolloutKind#allowed_count}

---

###### `allowed_percentage`<sup>Optional</sup> <a name="allowed_percentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget.parameter.allowedPercentage"></a>

- *Type:* typing.Union[int, float]

The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_percentage SaasRuntimeRolloutKind#allowed_percentage}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#create SaasRuntimeRolloutKind#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#delete SaasRuntimeRolloutKind#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update SaasRuntimeRolloutKind#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_error_budget` <a name="reset_error_budget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetErrorBudget"></a>

```python
def reset_error_budget() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rollout_orchestration_strategy` <a name="reset_rollout_orchestration_strategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy"></a>

```python
def reset_rollout_orchestration_strategy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_unit_filter` <a name="reset_unit_filter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUnitFilter"></a>

```python
def reset_unit_filter() -> None
```

##### `reset_update_unit_kind_strategy` <a name="reset_update_unit_kind_strategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUpdateUnitKindStrategy"></a>

```python
def reset_update_unit_kind_strategy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct"></a>

```python
from cdktn_provider_google import saas_runtime_rollout_kind

saasRuntimeRolloutKind.SaasRuntimeRolloutKind.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement"></a>

```python
from cdktn_provider_google import saas_runtime_rollout_kind

saasRuntimeRolloutKind.SaasRuntimeRolloutKind.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource"></a>

```python
from cdktn_provider_google import saas_runtime_rollout_kind

saasRuntimeRolloutKind.SaasRuntimeRolloutKind.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport"></a>

```python
from cdktn_provider_google import saas_runtime_rollout_kind

saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SaasRuntimeRolloutKind to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SaasRuntimeRolloutKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeRolloutKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudget">error_budget</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference">SaasRuntimeRolloutKindErrorBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference">SaasRuntimeRolloutKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudgetInput">error_budget_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindIdInput">rollout_kind_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput">rollout_orchestration_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilterInput">unit_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKindInput">unit_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategyInput">update_unit_kind_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindId">rollout_kind_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy">rollout_orchestration_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilter">unit_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKind">unit_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategy">update_unit_kind_strategy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `error_budget`<sup>Required</sup> <a name="error_budget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudget"></a>

```python
error_budget: SaasRuntimeRolloutKindErrorBudgetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference">SaasRuntimeRolloutKindErrorBudgetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeouts"></a>

```python
timeouts: SaasRuntimeRolloutKindTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference">SaasRuntimeRolloutKindTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `error_budget_input`<sup>Optional</sup> <a name="error_budget_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudgetInput"></a>

```python
error_budget_input: SaasRuntimeRolloutKindErrorBudget
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rollout_kind_id_input`<sup>Optional</sup> <a name="rollout_kind_id_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindIdInput"></a>

```python
rollout_kind_id_input: str
```

- *Type:* str

---

##### `rollout_orchestration_strategy_input`<sup>Optional</sup> <a name="rollout_orchestration_strategy_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput"></a>

```python
rollout_orchestration_strategy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SaasRuntimeRolloutKindTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

---

##### `unit_filter_input`<sup>Optional</sup> <a name="unit_filter_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilterInput"></a>

```python
unit_filter_input: str
```

- *Type:* str

---

##### `unit_kind_input`<sup>Optional</sup> <a name="unit_kind_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKindInput"></a>

```python
unit_kind_input: str
```

- *Type:* str

---

##### `update_unit_kind_strategy_input`<sup>Optional</sup> <a name="update_unit_kind_strategy_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategyInput"></a>

```python
update_unit_kind_strategy_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rollout_kind_id`<sup>Required</sup> <a name="rollout_kind_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindId"></a>

```python
rollout_kind_id: str
```

- *Type:* str

---

##### `rollout_orchestration_strategy`<sup>Required</sup> <a name="rollout_orchestration_strategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy"></a>

```python
rollout_orchestration_strategy: str
```

- *Type:* str

---

##### `unit_filter`<sup>Required</sup> <a name="unit_filter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilter"></a>

```python
unit_filter: str
```

- *Type:* str

---

##### `unit_kind`<sup>Required</sup> <a name="unit_kind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKind"></a>

```python
unit_kind: str
```

- *Type:* str

---

##### `update_unit_kind_strategy`<sup>Required</sup> <a name="update_unit_kind_strategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategy"></a>

```python
update_unit_kind_strategy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeRolloutKindConfig <a name="SaasRuntimeRolloutKindConfig" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_rollout_kind

saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  rollout_kind_id: str,
  unit_kind: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  error_budget: SaasRuntimeRolloutKindErrorBudget = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  rollout_orchestration_strategy: str = None,
  timeouts: SaasRuntimeRolloutKindTimeouts = None,
  unit_filter: str = None,
  update_unit_kind_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutKindId">rollout_kind_id</a></code> | <code>str</code> | The ID value for the new rollout kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitKind">unit_kind</a></code> | <code>str</code> | UnitKind that this rollout kind corresponds to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.errorBudget">error_budget</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | error_budget block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy">rollout_orchestration_strategy</a></code> | <code>str</code> | The strategy used for executing a Rollout. This is a required field. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitFilter">unit_filter</a></code> | <code>str</code> | CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy">update_unit_kind_strategy</a></code> | <code>str</code> | The config for updating the unit kind. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#location SaasRuntimeRolloutKind#location}

---

##### `rollout_kind_id`<sup>Required</sup> <a name="rollout_kind_id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutKindId"></a>

```python
rollout_kind_id: str
```

- *Type:* str

The ID value for the new rollout kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_kind_id SaasRuntimeRolloutKind#rollout_kind_id}

---

##### `unit_kind`<sup>Required</sup> <a name="unit_kind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitKind"></a>

```python
unit_kind: str
```

- *Type:* str

UnitKind that this rollout kind corresponds to.

Rollouts stemming from this
rollout kind will target the units of this unit kind. In other words, this
defines the population of target units to be upgraded by rollouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_kind SaasRuntimeRolloutKind#unit_kind}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#annotations SaasRuntimeRolloutKind#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#deletion_policy SaasRuntimeRolloutKind#deletion_policy}

---

##### `error_budget`<sup>Optional</sup> <a name="error_budget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.errorBudget"></a>

```python
error_budget: SaasRuntimeRolloutKindErrorBudget
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

error_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#error_budget SaasRuntimeRolloutKind#error_budget}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#labels SaasRuntimeRolloutKind#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}.

---

##### `rollout_orchestration_strategy`<sup>Optional</sup> <a name="rollout_orchestration_strategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy"></a>

```python
rollout_orchestration_strategy: str
```

- *Type:* str

The strategy used for executing a Rollout. This is a required field.

There are two supported values strategies which are used to control a rollout.

* "Google.Cloud.Simple.AllAtOnce"
* "Google.Cloud.Simple.OneLocationAtATime"

A rollout with one of these simple strategies will rollout across
all locations defined in the associated UnitKind's Saas Locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_orchestration_strategy SaasRuntimeRolloutKind#rollout_orchestration_strategy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.timeouts"></a>

```python
timeouts: SaasRuntimeRolloutKindTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#timeouts SaasRuntimeRolloutKind#timeouts}

---

##### `unit_filter`<sup>Optional</sup> <a name="unit_filter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitFilter"></a>

```python
unit_filter: str
```

- *Type:* str

CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_filter SaasRuntimeRolloutKind#unit_filter}

---

##### `update_unit_kind_strategy`<sup>Optional</sup> <a name="update_unit_kind_strategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy"></a>

```python
update_unit_kind_strategy: str
```

- *Type:* str

The config for updating the unit kind.

By default, the unit kind will be
updated on the rollout start.
Possible values:
UPDATE_UNIT_KIND_STRATEGY_ON_START
UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update_unit_kind_strategy SaasRuntimeRolloutKind#update_unit_kind_strategy}

---

### SaasRuntimeRolloutKindErrorBudget <a name="SaasRuntimeRolloutKindErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_rollout_kind

saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget(
  allowed_count: typing.Union[int, float] = None,
  allowed_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedCount">allowed_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of failed units allowed in a location without pausing the rollout. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedPercentage">allowed_percentage</a></code> | <code>typing.Union[int, float]</code> | The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout. |

---

##### `allowed_count`<sup>Optional</sup> <a name="allowed_count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedCount"></a>

```python
allowed_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of failed units allowed in a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_count SaasRuntimeRolloutKind#allowed_count}

---

##### `allowed_percentage`<sup>Optional</sup> <a name="allowed_percentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedPercentage"></a>

```python
allowed_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_percentage SaasRuntimeRolloutKind#allowed_percentage}

---

### SaasRuntimeRolloutKindTimeouts <a name="SaasRuntimeRolloutKindTimeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_rollout_kind

saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#create SaasRuntimeRolloutKind#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#delete SaasRuntimeRolloutKind#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update SaasRuntimeRolloutKind#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#create SaasRuntimeRolloutKind#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#delete SaasRuntimeRolloutKind#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update SaasRuntimeRolloutKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeRolloutKindErrorBudgetOutputReference <a name="SaasRuntimeRolloutKindErrorBudgetOutputReference" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_rollout_kind

saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount">reset_allowed_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage">reset_allowed_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_count` <a name="reset_allowed_count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount"></a>

```python
def reset_allowed_count() -> None
```

##### `reset_allowed_percentage` <a name="reset_allowed_percentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage"></a>

```python
def reset_allowed_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput">allowed_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput">allowed_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount">allowed_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage">allowed_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_count_input`<sup>Optional</sup> <a name="allowed_count_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput"></a>

```python
allowed_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_percentage_input`<sup>Optional</sup> <a name="allowed_percentage_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput"></a>

```python
allowed_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_count`<sup>Required</sup> <a name="allowed_count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount"></a>

```python
allowed_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_percentage`<sup>Required</sup> <a name="allowed_percentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage"></a>

```python
allowed_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeRolloutKindErrorBudget
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

---


### SaasRuntimeRolloutKindTimeoutsOutputReference <a name="SaasRuntimeRolloutKindTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_rollout_kind

saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeRolloutKindTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

---



