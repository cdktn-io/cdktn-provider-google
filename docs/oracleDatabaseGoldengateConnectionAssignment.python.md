# `oracleDatabaseGoldengateConnectionAssignment` Submodule <a name="`oracleDatabaseGoldengateConnectionAssignment` Submodule" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseGoldengateConnectionAssignment <a name="OracleDatabaseGoldengateConnectionAssignment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment google_oracle_database_goldengate_connection_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_connection_assignment

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  goldengate_connection_assignment_id: str,
  location: str,
  properties: OracleDatabaseGoldengateConnectionAssignmentProperties,
  deletion_policy: str = None,
  deletion_protection: bool | IResolvable = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: OracleDatabaseGoldengateConnectionAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.goldengateConnectionAssignmentId">goldengate_connection_assignment_id</a></code> | <code>str</code> | The ID of the GoldengateConnectionAssignment to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#id OracleDatabaseGoldengateConnectionAssignment#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels or tags associated with the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#project OracleDatabaseGoldengateConnectionAssignment#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `goldengate_connection_assignment_id`<sup>Required</sup> <a name="goldengate_connection_assignment_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.goldengateConnectionAssignmentId"></a>

- *Type:* str

The ID of the GoldengateConnectionAssignment to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_connection_assignment_id OracleDatabaseGoldengateConnectionAssignment#goldengate_connection_assignment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#location OracleDatabaseGoldengateConnectionAssignment#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#properties OracleDatabaseGoldengateConnectionAssignment#properties}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#deletion_policy OracleDatabaseGoldengateConnectionAssignment#deletion_policy}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.deletionProtection"></a>

- *Type:* bool | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#deletion_protection OracleDatabaseGoldengateConnectionAssignment#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the GoldengateConnectionAssignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#display_name OracleDatabaseGoldengateConnectionAssignment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#id OracleDatabaseGoldengateConnectionAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels or tags associated with the GoldengateConnectionAssignment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#labels OracleDatabaseGoldengateConnectionAssignment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#project OracleDatabaseGoldengateConnectionAssignment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#timeouts OracleDatabaseGoldengateConnectionAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties"></a>

```python
def put_properties(
  goldengate_connection: str,
  goldengate_deployment: str
) -> None
```

###### `goldengate_connection`<sup>Required</sup> <a name="goldengate_connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties.parameter.goldengateConnection"></a>

- *Type:* str

The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_connection OracleDatabaseGoldengateConnectionAssignment#goldengate_connection}

---

###### `goldengate_deployment`<sup>Required</sup> <a name="goldengate_deployment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties.parameter.goldengateDeployment"></a>

- *Type:* str

The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_deployment OracleDatabaseGoldengateConnectionAssignment#goldengate_deployment}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#create OracleDatabaseGoldengateConnectionAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#delete OracleDatabaseGoldengateConnectionAssignment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#update OracleDatabaseGoldengateConnectionAssignment#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OracleDatabaseGoldengateConnectionAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_connection_assignment

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_connection_assignment

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_connection_assignment

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_connection_assignment

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OracleDatabaseGoldengateConnectionAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OracleDatabaseGoldengateConnectionAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OracleDatabaseGoldengateConnectionAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseGoldengateConnectionAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference">OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference">OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentIdInput">goldengate_connection_assignment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentId">goldengate_connection_assignment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.properties"></a>

```python
properties: OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference">OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeouts"></a>

```python
timeouts: OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference">OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtectionInput"></a>

```python
deletion_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `goldengate_connection_assignment_id_input`<sup>Optional</sup> <a name="goldengate_connection_assignment_id_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentIdInput"></a>

```python
goldengate_connection_assignment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.propertiesInput"></a>

```python
properties_input: OracleDatabaseGoldengateConnectionAssignmentProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OracleDatabaseGoldengateConnectionAssignmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `goldengate_connection_assignment_id`<sup>Required</sup> <a name="goldengate_connection_assignment_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentId"></a>

```python
goldengate_connection_assignment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseGoldengateConnectionAssignmentConfig <a name="OracleDatabaseGoldengateConnectionAssignmentConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_connection_assignment

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  goldengate_connection_assignment_id: str,
  location: str,
  properties: OracleDatabaseGoldengateConnectionAssignmentProperties,
  deletion_policy: str = None,
  deletion_protection: bool | IResolvable = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: OracleDatabaseGoldengateConnectionAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.goldengateConnectionAssignmentId">goldengate_connection_assignment_id</a></code> | <code>str</code> | The ID of the GoldengateConnectionAssignment to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#id OracleDatabaseGoldengateConnectionAssignment#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels or tags associated with the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#project OracleDatabaseGoldengateConnectionAssignment#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `goldengate_connection_assignment_id`<sup>Required</sup> <a name="goldengate_connection_assignment_id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.goldengateConnectionAssignmentId"></a>

```python
goldengate_connection_assignment_id: str
```

- *Type:* str

The ID of the GoldengateConnectionAssignment to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_connection_assignment_id OracleDatabaseGoldengateConnectionAssignment#goldengate_connection_assignment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#location OracleDatabaseGoldengateConnectionAssignment#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.properties"></a>

```python
properties: OracleDatabaseGoldengateConnectionAssignmentProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#properties OracleDatabaseGoldengateConnectionAssignment#properties}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#deletion_policy OracleDatabaseGoldengateConnectionAssignment#deletion_policy}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#deletion_protection OracleDatabaseGoldengateConnectionAssignment#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the GoldengateConnectionAssignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#display_name OracleDatabaseGoldengateConnectionAssignment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#id OracleDatabaseGoldengateConnectionAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels or tags associated with the GoldengateConnectionAssignment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#labels OracleDatabaseGoldengateConnectionAssignment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#project OracleDatabaseGoldengateConnectionAssignment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.timeouts"></a>

```python
timeouts: OracleDatabaseGoldengateConnectionAssignmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#timeouts OracleDatabaseGoldengateConnectionAssignment#timeouts}

---

### OracleDatabaseGoldengateConnectionAssignmentProperties <a name="OracleDatabaseGoldengateConnectionAssignmentProperties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_connection_assignment

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties(
  goldengate_connection: str,
  goldengate_deployment: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateConnection">goldengate_connection</a></code> | <code>str</code> | The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateDeployment">goldengate_deployment</a></code> | <code>str</code> | The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}. |

---

##### `goldengate_connection`<sup>Required</sup> <a name="goldengate_connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateConnection"></a>

```python
goldengate_connection: str
```

- *Type:* str

The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_connection OracleDatabaseGoldengateConnectionAssignment#goldengate_connection}

---

##### `goldengate_deployment`<sup>Required</sup> <a name="goldengate_deployment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateDeployment"></a>

```python
goldengate_deployment: str
```

- *Type:* str

The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_deployment OracleDatabaseGoldengateConnectionAssignment#goldengate_deployment}

---

### OracleDatabaseGoldengateConnectionAssignmentTimeouts <a name="OracleDatabaseGoldengateConnectionAssignmentTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_connection_assignment

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#create OracleDatabaseGoldengateConnectionAssignment#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#delete OracleDatabaseGoldengateConnectionAssignment#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#update OracleDatabaseGoldengateConnectionAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#create OracleDatabaseGoldengateConnectionAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#delete OracleDatabaseGoldengateConnectionAssignment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/oracle_database_goldengate_connection_assignment#update OracleDatabaseGoldengateConnectionAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference <a name="OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_connection_assignment

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnectionInput">goldengate_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeploymentInput">goldengate_deployment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnection">goldengate_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeployment">goldengate_deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `goldengate_connection_input`<sup>Optional</sup> <a name="goldengate_connection_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnectionInput"></a>

```python
goldengate_connection_input: str
```

- *Type:* str

---

##### `goldengate_deployment_input`<sup>Optional</sup> <a name="goldengate_deployment_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeploymentInput"></a>

```python
goldengate_deployment_input: str
```

- *Type:* str

---

##### `goldengate_connection`<sup>Required</sup> <a name="goldengate_connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnection"></a>

```python
goldengate_connection: str
```

- *Type:* str

---

##### `goldengate_deployment`<sup>Required</sup> <a name="goldengate_deployment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeployment"></a>

```python
goldengate_deployment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseGoldengateConnectionAssignmentProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

---


### OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference <a name="OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_connection_assignment

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OracleDatabaseGoldengateConnectionAssignmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---



