# `saasRuntimeUnitOperation` Submodule <a name="`saasRuntimeUnitOperation` Submodule" id="@cdktn/provider-google.saasRuntimeUnitOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnitOperation <a name="SaasRuntimeUnitOperation" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation google_saas_runtime_unit_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperation(
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
  unit: str,
  unit_operation_id: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  deprovision: SaasRuntimeUnitOperationDeprovision = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  provision: SaasRuntimeUnitOperationProvision = None,
  timeouts: SaasRuntimeUnitOperationTimeouts = None,
  upgrade: SaasRuntimeUnitOperationUpgrade = None,
  wait_for_completion: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.unit">unit</a></code> | <code>str</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.unitOperationId">unit_operation_id</a></code> | <code>str</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provision">provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.waitForCompletion">wait_for_completion</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#location SaasRuntimeUnitOperation#location}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.unit"></a>

- *Type:* str

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit SaasRuntimeUnitOperation#unit}

---

##### `unit_operation_id`<sup>Required</sup> <a name="unit_operation_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.unitOperationId"></a>

- *Type:* str

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit_operation_id SaasRuntimeUnitOperation#unit_operation_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#annotations SaasRuntimeUnitOperation#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deletion_policy SaasRuntimeUnitOperation#deletion_policy}

---

##### `deprovision`<sup>Optional</sup> <a name="deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.deprovision"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deprovision SaasRuntimeUnitOperation#deprovision}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#labels SaasRuntimeUnitOperation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}.

---

##### `provision`<sup>Optional</sup> <a name="provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.provision"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#provision SaasRuntimeUnitOperation#provision}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#timeouts SaasRuntimeUnitOperation#timeouts}

---

##### `upgrade`<sup>Optional</sup> <a name="upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.upgrade"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#upgrade SaasRuntimeUnitOperation#upgrade}

---

##### `wait_for_completion`<sup>Optional</sup> <a name="wait_for_completion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.waitForCompletion"></a>

- *Type:* bool | cdktn.IResolvable

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#wait_for_completion SaasRuntimeUnitOperation#wait_for_completion}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision">put_deprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision">put_provision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade">put_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeprovision">reset_deprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProvision">reset_provision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetUpgrade">reset_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetWaitForCompletion">reset_wait_for_completion</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deprovision` <a name="put_deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision"></a>

```python
def put_deprovision() -> None
```

##### `put_provision` <a name="put_provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision"></a>

```python
def put_provision(
  input_variables: IResolvable | typing.List[SaasRuntimeUnitOperationProvisionInputVariables] = None,
  release: str = None
) -> None
```

###### `input_variables`<sup>Optional</sup> <a name="input_variables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision.parameter.inputVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

###### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision.parameter.release"></a>

- *Type:* str

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}.

---

##### `put_upgrade` <a name="put_upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade"></a>

```python
def put_upgrade(
  input_variables: IResolvable | typing.List[SaasRuntimeUnitOperationUpgradeInputVariables] = None,
  release: str = None
) -> None
```

###### `input_variables`<sup>Optional</sup> <a name="input_variables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade.parameter.inputVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

###### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade.parameter.release"></a>

- *Type:* str

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_deprovision` <a name="reset_deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeprovision"></a>

```python
def reset_deprovision() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_provision` <a name="reset_provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProvision"></a>

```python
def reset_provision() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_upgrade` <a name="reset_upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetUpgrade"></a>

```python
def reset_upgrade() -> None
```

##### `reset_wait_for_completion` <a name="reset_wait_for_completion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetWaitForCompletion"></a>

```python
def reset_wait_for_completion() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SaasRuntimeUnitOperation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SaasRuntimeUnitOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnitOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList">SaasRuntimeUnitOperationConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference">SaasRuntimeUnitOperationDeprovisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.engineState">engine_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.errorCategory">error_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provision">provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference">SaasRuntimeUnitOperationProvisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference">SaasRuntimeUnitOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference">SaasRuntimeUnitOperationUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovisionInput">deprovision_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisionInput">provision_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationIdInput">unit_operation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgradeInput">upgrade_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletionInput">wait_for_completion_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationId">unit_operation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletion">wait_for_completion</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.conditions"></a>

```python
conditions: SaasRuntimeUnitOperationConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList">SaasRuntimeUnitOperationConditionsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deprovision`<sup>Required</sup> <a name="deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovision"></a>

```python
deprovision: SaasRuntimeUnitOperationDeprovisionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference">SaasRuntimeUnitOperationDeprovisionOutputReference</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `engine_state`<sup>Required</sup> <a name="engine_state" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.engineState"></a>

```python
engine_state: str
```

- *Type:* str

---

##### `error_category`<sup>Required</sup> <a name="error_category" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.errorCategory"></a>

```python
error_category: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provision`<sup>Required</sup> <a name="provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provision"></a>

```python
provision: SaasRuntimeUnitOperationProvisionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference">SaasRuntimeUnitOperationProvisionOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeouts"></a>

```python
timeouts: SaasRuntimeUnitOperationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference">SaasRuntimeUnitOperationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `upgrade`<sup>Required</sup> <a name="upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgrade"></a>

```python
upgrade: SaasRuntimeUnitOperationUpgradeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference">SaasRuntimeUnitOperationUpgradeOutputReference</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `deprovision_input`<sup>Optional</sup> <a name="deprovision_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovisionInput"></a>

```python
deprovision_input: SaasRuntimeUnitOperationDeprovision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `provision_input`<sup>Optional</sup> <a name="provision_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisionInput"></a>

```python
provision_input: SaasRuntimeUnitOperationProvision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SaasRuntimeUnitOperationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `unit_operation_id_input`<sup>Optional</sup> <a name="unit_operation_id_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationIdInput"></a>

```python
unit_operation_id_input: str
```

- *Type:* str

---

##### `upgrade_input`<sup>Optional</sup> <a name="upgrade_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgradeInput"></a>

```python
upgrade_input: SaasRuntimeUnitOperationUpgrade
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---

##### `wait_for_completion_input`<sup>Optional</sup> <a name="wait_for_completion_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletionInput"></a>

```python
wait_for_completion_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `unit_operation_id`<sup>Required</sup> <a name="unit_operation_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationId"></a>

```python
unit_operation_id: str
```

- *Type:* str

---

##### `wait_for_completion`<sup>Required</sup> <a name="wait_for_completion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletion"></a>

```python
wait_for_completion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitOperationConditions <a name="SaasRuntimeUnitOperationConditions" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions()
```


### SaasRuntimeUnitOperationConfig <a name="SaasRuntimeUnitOperationConfig" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  unit: str,
  unit_operation_id: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  deprovision: SaasRuntimeUnitOperationDeprovision = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  provision: SaasRuntimeUnitOperationProvision = None,
  timeouts: SaasRuntimeUnitOperationTimeouts = None,
  upgrade: SaasRuntimeUnitOperationUpgrade = None,
  wait_for_completion: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unit">unit</a></code> | <code>str</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unitOperationId">unit_operation_id</a></code> | <code>str</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provision">provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.waitForCompletion">wait_for_completion</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#location SaasRuntimeUnitOperation#location}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unit"></a>

```python
unit: str
```

- *Type:* str

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit SaasRuntimeUnitOperation#unit}

---

##### `unit_operation_id`<sup>Required</sup> <a name="unit_operation_id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unitOperationId"></a>

```python
unit_operation_id: str
```

- *Type:* str

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit_operation_id SaasRuntimeUnitOperation#unit_operation_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#annotations SaasRuntimeUnitOperation#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deletion_policy SaasRuntimeUnitOperation#deletion_policy}

---

##### `deprovision`<sup>Optional</sup> <a name="deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deprovision"></a>

```python
deprovision: SaasRuntimeUnitOperationDeprovision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deprovision SaasRuntimeUnitOperation#deprovision}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#labels SaasRuntimeUnitOperation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}.

---

##### `provision`<sup>Optional</sup> <a name="provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provision"></a>

```python
provision: SaasRuntimeUnitOperationProvision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#provision SaasRuntimeUnitOperation#provision}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.timeouts"></a>

```python
timeouts: SaasRuntimeUnitOperationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#timeouts SaasRuntimeUnitOperation#timeouts}

---

##### `upgrade`<sup>Optional</sup> <a name="upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.upgrade"></a>

```python
upgrade: SaasRuntimeUnitOperationUpgrade
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#upgrade SaasRuntimeUnitOperation#upgrade}

---

##### `wait_for_completion`<sup>Optional</sup> <a name="wait_for_completion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.waitForCompletion"></a>

```python
wait_for_completion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#wait_for_completion SaasRuntimeUnitOperation#wait_for_completion}

---

### SaasRuntimeUnitOperationDeprovision <a name="SaasRuntimeUnitOperationDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision()
```


### SaasRuntimeUnitOperationProvision <a name="SaasRuntimeUnitOperationProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision(
  input_variables: IResolvable | typing.List[SaasRuntimeUnitOperationProvisionInputVariables] = None,
  release: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.inputVariables">input_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>]</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.release">release</a></code> | <code>str</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `input_variables`<sup>Optional</sup> <a name="input_variables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.inputVariables"></a>

```python
input_variables: IResolvable | typing.List[SaasRuntimeUnitOperationProvisionInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.release"></a>

```python
release: str
```

- *Type:* str

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

### SaasRuntimeUnitOperationProvisionInputVariables <a name="SaasRuntimeUnitOperationProvisionInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables(
  variable: str,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.variable">variable</a></code> | <code>str</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.type">type</a></code> | <code>str</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.value">value</a></code> | <code>str</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.variable"></a>

```python
variable: str
```

- *Type:* str

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.type"></a>

```python
type: str
```

- *Type:* str

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.value"></a>

```python
value: str
```

- *Type:* str

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}

---

### SaasRuntimeUnitOperationTimeouts <a name="SaasRuntimeUnitOperationTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}.

---

### SaasRuntimeUnitOperationUpgrade <a name="SaasRuntimeUnitOperationUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade(
  input_variables: IResolvable | typing.List[SaasRuntimeUnitOperationUpgradeInputVariables] = None,
  release: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.inputVariables">input_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>]</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.release">release</a></code> | <code>str</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `input_variables`<sup>Optional</sup> <a name="input_variables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.inputVariables"></a>

```python
input_variables: IResolvable | typing.List[SaasRuntimeUnitOperationUpgradeInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.release"></a>

```python
release: str
```

- *Type:* str

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

### SaasRuntimeUnitOperationUpgradeInputVariables <a name="SaasRuntimeUnitOperationUpgradeInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables(
  variable: str,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.variable">variable</a></code> | <code>str</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.type">type</a></code> | <code>str</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.value">value</a></code> | <code>str</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.variable"></a>

```python
variable: str
```

- *Type:* str

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.type"></a>

```python
type: str
```

- *Type:* str

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.value"></a>

```python
value: str
```

- *Type:* str

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitOperationConditionsList <a name="SaasRuntimeUnitOperationConditionsList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeUnitOperationConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeUnitOperationConditionsOutputReference <a name="SaasRuntimeUnitOperationConditionsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions">SaasRuntimeUnitOperationConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitOperationConditions
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions">SaasRuntimeUnitOperationConditions</a>

---


### SaasRuntimeUnitOperationDeprovisionOutputReference <a name="SaasRuntimeUnitOperationDeprovisionOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitOperationDeprovision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---


### SaasRuntimeUnitOperationProvisionInputVariablesList <a name="SaasRuntimeUnitOperationProvisionInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeUnitOperationProvisionInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SaasRuntimeUnitOperationProvisionInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>]

---


### SaasRuntimeUnitOperationProvisionInputVariablesOutputReference <a name="SaasRuntimeUnitOperationProvisionInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput">variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput"></a>

```python
variable_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeUnitOperationProvisionInputVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>

---


### SaasRuntimeUnitOperationProvisionOutputReference <a name="SaasRuntimeUnitOperationProvisionOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables">put_input_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables">reset_input_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetRelease">reset_release</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_variables` <a name="put_input_variables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables"></a>

```python
def put_input_variables(
  value: IResolvable | typing.List[SaasRuntimeUnitOperationProvisionInputVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>]

---

##### `reset_input_variables` <a name="reset_input_variables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables"></a>

```python
def reset_input_variables() -> None
```

##### `reset_release` <a name="reset_release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetRelease"></a>

```python
def reset_release() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables">input_variables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList">SaasRuntimeUnitOperationProvisionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput">input_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput">release_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.release">release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables"></a>

```python
input_variables: SaasRuntimeUnitOperationProvisionInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList">SaasRuntimeUnitOperationProvisionInputVariablesList</a>

---

##### `input_variables_input`<sup>Optional</sup> <a name="input_variables_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput"></a>

```python
input_variables_input: IResolvable | typing.List[SaasRuntimeUnitOperationProvisionInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>]

---

##### `release_input`<sup>Optional</sup> <a name="release_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput"></a>

```python
release_input: str
```

- *Type:* str

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.release"></a>

```python
release: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitOperationProvision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---


### SaasRuntimeUnitOperationTimeoutsOutputReference <a name="SaasRuntimeUnitOperationTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeUnitOperationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---


### SaasRuntimeUnitOperationUpgradeInputVariablesList <a name="SaasRuntimeUnitOperationUpgradeInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SaasRuntimeUnitOperationUpgradeInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>]

---


### SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference <a name="SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput">variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput"></a>

```python
variable_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeUnitOperationUpgradeInputVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>

---


### SaasRuntimeUnitOperationUpgradeOutputReference <a name="SaasRuntimeUnitOperationUpgradeOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_operation

saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables">put_input_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables">reset_input_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetRelease">reset_release</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_variables` <a name="put_input_variables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables"></a>

```python
def put_input_variables(
  value: IResolvable | typing.List[SaasRuntimeUnitOperationUpgradeInputVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>]

---

##### `reset_input_variables` <a name="reset_input_variables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables"></a>

```python
def reset_input_variables() -> None
```

##### `reset_release` <a name="reset_release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetRelease"></a>

```python
def reset_release() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables">input_variables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList">SaasRuntimeUnitOperationUpgradeInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput">input_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput">release_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.release">release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables"></a>

```python
input_variables: SaasRuntimeUnitOperationUpgradeInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList">SaasRuntimeUnitOperationUpgradeInputVariablesList</a>

---

##### `input_variables_input`<sup>Optional</sup> <a name="input_variables_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput"></a>

```python
input_variables_input: IResolvable | typing.List[SaasRuntimeUnitOperationUpgradeInputVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>]

---

##### `release_input`<sup>Optional</sup> <a name="release_input" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput"></a>

```python
release_input: str
```

- *Type:* str

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.release"></a>

```python
release: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitOperationUpgrade
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---



