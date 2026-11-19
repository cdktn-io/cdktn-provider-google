# `saasRuntimeUnit` Submodule <a name="`saasRuntimeUnit` Submodule" id="@cdktn/provider-google.saasRuntimeUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnit <a name="SaasRuntimeUnit" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit google_saas_runtime_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnit(
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
  unit_id: str,
  annotations: typing.Mapping[str] = None,
  application: str = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  maintenance: SaasRuntimeUnitMaintenance = None,
  management_mode: str = None,
  project: str = None,
  tenant: str = None,
  timeouts: SaasRuntimeUnitTimeouts = None,
  unit_kind: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.unitId">unit_id</a></code> | <code>str</code> | The ID value for the new unit. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.application">application</a></code> | <code>str</code> | Reference to the App Hub Application this Unit belongs to, in the format 'projects/{project}/locations/{location}/applications/{application}'. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#id SaasRuntimeUnit#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.maintenance">maintenance</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a></code> | maintenance block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.managementMode">management_mode</a></code> | <code>str</code> | Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. Possible values: MANAGEMENT_MODE_USER MANAGEMENT_MODE_SYSTEM. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#project SaasRuntimeUnit#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.tenant">tenant</a></code> | <code>str</code> | Reference to the Saas Tenant resource this unit belongs to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.unitKind">unit_kind</a></code> | <code>str</code> | Reference to the UnitKind this Unit belongs to. Immutable once set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#location SaasRuntimeUnit#location}

---

##### `unit_id`<sup>Required</sup> <a name="unit_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.unitId"></a>

- *Type:* str

The ID value for the new unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#unit_id SaasRuntimeUnit#unit_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#annotations SaasRuntimeUnit#annotations}

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.application"></a>

- *Type:* str

Reference to the App Hub Application this Unit belongs to, in the format 'projects/{project}/locations/{location}/applications/{application}'.

All resources deployed in this Unit are associated with the specified
Application. If empty, the service sets it during any UnitOperation
when the UnitKind has 'app_params.group' and App Hub is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#application SaasRuntimeUnit#application}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#deletion_policy SaasRuntimeUnit#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#id SaasRuntimeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#labels SaasRuntimeUnit#labels}

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.maintenance"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

maintenance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#maintenance SaasRuntimeUnit#maintenance}

---

##### `management_mode`<sup>Optional</sup> <a name="management_mode" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.managementMode"></a>

- *Type:* str

Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. Possible values: MANAGEMENT_MODE_USER MANAGEMENT_MODE_SYSTEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#management_mode SaasRuntimeUnit#management_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#project SaasRuntimeUnit#project}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.tenant"></a>

- *Type:* str

Reference to the Saas Tenant resource this unit belongs to.

This for
example informs the maintenance policies to use for scheduling future
updates on a unit. (optional and immutable once created)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#tenant SaasRuntimeUnit#tenant}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#timeouts SaasRuntimeUnit#timeouts}

---

##### `unit_kind`<sup>Optional</sup> <a name="unit_kind" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.unitKind"></a>

- *Type:* str

Reference to the UnitKind this Unit belongs to. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#unit_kind SaasRuntimeUnit#unit_kind}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putMaintenance">put_maintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetApplication">reset_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetMaintenance">reset_maintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetManagementMode">reset_management_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTenant">reset_tenant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetUnitKind">reset_unit_kind</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_maintenance` <a name="put_maintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putMaintenance"></a>

```python
def put_maintenance(
  pinned_until_time: str = None
) -> None
```

###### `pinned_until_time`<sup>Optional</sup> <a name="pinned_until_time" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putMaintenance.parameter.pinnedUntilTime"></a>

- *Type:* str

If present, it fixes the release on the unit until the given time;

i.e.
changes to the release field will be rejected. Rollouts should and will
also respect this by not requesting an upgrade in the first place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#pinned_until_time SaasRuntimeUnit#pinned_until_time}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#create SaasRuntimeUnit#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#delete SaasRuntimeUnit#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#update SaasRuntimeUnit#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_application` <a name="reset_application" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetApplication"></a>

```python
def reset_application() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_maintenance` <a name="reset_maintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetMaintenance"></a>

```python
def reset_maintenance() -> None
```

##### `reset_management_mode` <a name="reset_management_mode" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetManagementMode"></a>

```python
def reset_management_mode() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_tenant` <a name="reset_tenant" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTenant"></a>

```python
def reset_tenant() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_unit_kind` <a name="reset_unit_kind" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetUnitKind"></a>

```python
def reset_unit_kind() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SaasRuntimeUnit resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isConstruct"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformElement"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformResource"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnit.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SaasRuntimeUnit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SaasRuntimeUnit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SaasRuntimeUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList">SaasRuntimeUnitConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList">SaasRuntimeUnitDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependents">dependents</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList">SaasRuntimeUnitDependentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.inputVariables">input_variables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList">SaasRuntimeUnitInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenance">maintenance</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference">SaasRuntimeUnitMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.ongoingOperations">ongoing_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.outputVariables">output_variables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList">SaasRuntimeUnitOutputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.pendingOperations">pending_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.release">release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.scheduledOperations">scheduled_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemCleanupAt">system_cleanup_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemManagedState">system_managed_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference">SaasRuntimeUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.applicationInput">application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenanceInput">maintenance_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementModeInput">management_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenantInput">tenant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitIdInput">unit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKindInput">unit_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementMode">management_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenant">tenant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitId">unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKind">unit_kind</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.conditions"></a>

```python
conditions: SaasRuntimeUnitConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList">SaasRuntimeUnitConditionsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependencies"></a>

```python
dependencies: SaasRuntimeUnitDependenciesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList">SaasRuntimeUnitDependenciesList</a>

---

##### `dependents`<sup>Required</sup> <a name="dependents" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependents"></a>

```python
dependents: SaasRuntimeUnitDependentsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList">SaasRuntimeUnitDependentsList</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.inputVariables"></a>

```python
input_variables: SaasRuntimeUnitInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList">SaasRuntimeUnitInputVariablesList</a>

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenance"></a>

```python
maintenance: SaasRuntimeUnitMaintenanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference">SaasRuntimeUnitMaintenanceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ongoing_operations`<sup>Required</sup> <a name="ongoing_operations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.ongoingOperations"></a>

```python
ongoing_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_variables`<sup>Required</sup> <a name="output_variables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.outputVariables"></a>

```python
output_variables: SaasRuntimeUnitOutputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList">SaasRuntimeUnitOutputVariablesList</a>

---

##### `pending_operations`<sup>Required</sup> <a name="pending_operations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.pendingOperations"></a>

```python
pending_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.release"></a>

```python
release: str
```

- *Type:* str

---

##### `scheduled_operations`<sup>Required</sup> <a name="scheduled_operations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.scheduledOperations"></a>

```python
scheduled_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_cleanup_at`<sup>Required</sup> <a name="system_cleanup_at" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemCleanupAt"></a>

```python
system_cleanup_at: str
```

- *Type:* str

---

##### `system_managed_state`<sup>Required</sup> <a name="system_managed_state" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemManagedState"></a>

```python
system_managed_state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeouts"></a>

```python
timeouts: SaasRuntimeUnitTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference">SaasRuntimeUnitTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application_input`<sup>Optional</sup> <a name="application_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.applicationInput"></a>

```python
application_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maintenance_input`<sup>Optional</sup> <a name="maintenance_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenanceInput"></a>

```python
maintenance_input: SaasRuntimeUnitMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

---

##### `management_mode_input`<sup>Optional</sup> <a name="management_mode_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementModeInput"></a>

```python
management_mode_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenantInput"></a>

```python
tenant_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SaasRuntimeUnitTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a>

---

##### `unit_id_input`<sup>Optional</sup> <a name="unit_id_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitIdInput"></a>

```python
unit_id_input: str
```

- *Type:* str

---

##### `unit_kind_input`<sup>Optional</sup> <a name="unit_kind_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKindInput"></a>

```python
unit_kind_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `management_mode`<sup>Required</sup> <a name="management_mode" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementMode"></a>

```python
management_mode: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

---

##### `unit_id`<sup>Required</sup> <a name="unit_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitId"></a>

```python
unit_id: str
```

- *Type:* str

---

##### `unit_kind`<sup>Required</sup> <a name="unit_kind" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKind"></a>

```python
unit_kind: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitConditions <a name="SaasRuntimeUnitConditions" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitConditions()
```


### SaasRuntimeUnitConfig <a name="SaasRuntimeUnitConfig" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  unit_id: str,
  annotations: typing.Mapping[str] = None,
  application: str = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  maintenance: SaasRuntimeUnitMaintenance = None,
  management_mode: str = None,
  project: str = None,
  tenant: str = None,
  timeouts: SaasRuntimeUnitTimeouts = None,
  unit_kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitId">unit_id</a></code> | <code>str</code> | The ID value for the new unit. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.application">application</a></code> | <code>str</code> | Reference to the App Hub Application this Unit belongs to, in the format 'projects/{project}/locations/{location}/applications/{application}'. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#id SaasRuntimeUnit#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.maintenance">maintenance</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a></code> | maintenance block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.managementMode">management_mode</a></code> | <code>str</code> | Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. Possible values: MANAGEMENT_MODE_USER MANAGEMENT_MODE_SYSTEM. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#project SaasRuntimeUnit#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.tenant">tenant</a></code> | <code>str</code> | Reference to the Saas Tenant resource this unit belongs to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitKind">unit_kind</a></code> | <code>str</code> | Reference to the UnitKind this Unit belongs to. Immutable once set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#location SaasRuntimeUnit#location}

---

##### `unit_id`<sup>Required</sup> <a name="unit_id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitId"></a>

```python
unit_id: str
```

- *Type:* str

The ID value for the new unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#unit_id SaasRuntimeUnit#unit_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#annotations SaasRuntimeUnit#annotations}

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.application"></a>

```python
application: str
```

- *Type:* str

Reference to the App Hub Application this Unit belongs to, in the format 'projects/{project}/locations/{location}/applications/{application}'.

All resources deployed in this Unit are associated with the specified
Application. If empty, the service sets it during any UnitOperation
when the UnitKind has 'app_params.group' and App Hub is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#application SaasRuntimeUnit#application}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#deletion_policy SaasRuntimeUnit#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#id SaasRuntimeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#labels SaasRuntimeUnit#labels}

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.maintenance"></a>

```python
maintenance: SaasRuntimeUnitMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

maintenance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#maintenance SaasRuntimeUnit#maintenance}

---

##### `management_mode`<sup>Optional</sup> <a name="management_mode" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.managementMode"></a>

```python
management_mode: str
```

- *Type:* str

Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. Possible values: MANAGEMENT_MODE_USER MANAGEMENT_MODE_SYSTEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#management_mode SaasRuntimeUnit#management_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#project SaasRuntimeUnit#project}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

Reference to the Saas Tenant resource this unit belongs to.

This for
example informs the maintenance policies to use for scheduling future
updates on a unit. (optional and immutable once created)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#tenant SaasRuntimeUnit#tenant}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.timeouts"></a>

```python
timeouts: SaasRuntimeUnitTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#timeouts SaasRuntimeUnit#timeouts}

---

##### `unit_kind`<sup>Optional</sup> <a name="unit_kind" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitKind"></a>

```python
unit_kind: str
```

- *Type:* str

Reference to the UnitKind this Unit belongs to. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#unit_kind SaasRuntimeUnit#unit_kind}

---

### SaasRuntimeUnitDependencies <a name="SaasRuntimeUnitDependencies" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitDependencies()
```


### SaasRuntimeUnitDependents <a name="SaasRuntimeUnitDependents" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitDependents()
```


### SaasRuntimeUnitInputVariables <a name="SaasRuntimeUnitInputVariables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitInputVariables()
```


### SaasRuntimeUnitMaintenance <a name="SaasRuntimeUnitMaintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitMaintenance(
  pinned_until_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance.property.pinnedUntilTime">pinned_until_time</a></code> | <code>str</code> | If present, it fixes the release on the unit until the given time; |

---

##### `pinned_until_time`<sup>Optional</sup> <a name="pinned_until_time" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance.property.pinnedUntilTime"></a>

```python
pinned_until_time: str
```

- *Type:* str

If present, it fixes the release on the unit until the given time;

i.e.
changes to the release field will be rejected. Rollouts should and will
also respect this by not requesting an upgrade in the first place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#pinned_until_time SaasRuntimeUnit#pinned_until_time}

---

### SaasRuntimeUnitOutputVariables <a name="SaasRuntimeUnitOutputVariables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitOutputVariables()
```


### SaasRuntimeUnitTimeouts <a name="SaasRuntimeUnitTimeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#create SaasRuntimeUnit#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#delete SaasRuntimeUnit#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#update SaasRuntimeUnit#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#create SaasRuntimeUnit#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#delete SaasRuntimeUnit#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#update SaasRuntimeUnit#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitConditionsList <a name="SaasRuntimeUnitConditionsList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeUnitConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeUnitConditionsOutputReference <a name="SaasRuntimeUnitConditionsOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions">SaasRuntimeUnitConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitConditions
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions">SaasRuntimeUnitConditions</a>

---


### SaasRuntimeUnitDependenciesList <a name="SaasRuntimeUnitDependenciesList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeUnitDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeUnitDependenciesOutputReference <a name="SaasRuntimeUnitDependenciesOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies">SaasRuntimeUnitDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitDependencies
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies">SaasRuntimeUnitDependencies</a>

---


### SaasRuntimeUnitDependentsList <a name="SaasRuntimeUnitDependentsList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitDependentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeUnitDependentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeUnitDependentsOutputReference <a name="SaasRuntimeUnitDependentsOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents">SaasRuntimeUnitDependents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitDependents
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents">SaasRuntimeUnitDependents</a>

---


### SaasRuntimeUnitInputVariablesList <a name="SaasRuntimeUnitInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeUnitInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeUnitInputVariablesOutputReference <a name="SaasRuntimeUnitInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables">SaasRuntimeUnitInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitInputVariables
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables">SaasRuntimeUnitInputVariables</a>

---


### SaasRuntimeUnitMaintenanceOutputReference <a name="SaasRuntimeUnitMaintenanceOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resetPinnedUntilTime">reset_pinned_until_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pinned_until_time` <a name="reset_pinned_until_time" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resetPinnedUntilTime"></a>

```python
def reset_pinned_until_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTimeInput">pinned_until_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTime">pinned_until_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pinned_until_time_input`<sup>Optional</sup> <a name="pinned_until_time_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTimeInput"></a>

```python
pinned_until_time_input: str
```

- *Type:* str

---

##### `pinned_until_time`<sup>Required</sup> <a name="pinned_until_time" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTime"></a>

```python
pinned_until_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

---


### SaasRuntimeUnitOutputVariablesList <a name="SaasRuntimeUnitOutputVariablesList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeUnitOutputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeUnitOutputVariablesOutputReference <a name="SaasRuntimeUnitOutputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables">SaasRuntimeUnitOutputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitOutputVariables
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables">SaasRuntimeUnitOutputVariables</a>

---


### SaasRuntimeUnitTimeoutsOutputReference <a name="SaasRuntimeUnitTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit

saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeUnitTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a>

---



