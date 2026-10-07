# `biglakeHiveTable` Submodule <a name="`biglakeHiveTable` Submodule" id="@cdktn/provider-google.biglakeHiveTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveTable <a name="BiglakeHiveTable" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table google_biglake_hive_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog: str,
  database: str,
  name: str,
  storage_descriptor: BiglakeHiveTableStorageDescriptor,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  partition_keys: IResolvable | typing.List[BiglakeHiveTablePartitionKeys] = None,
  project: str = None,
  timeouts: BiglakeHiveTableTimeouts = None,
  view_expanded_text: str = None,
  view_original_text: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | The Hive catalog where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.database">database</a></code> | <code>str</code> | The Hive database where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Additional parameters associated with the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.partitionKeys">partition_keys</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>]</code> | partition_keys block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | Expanded view text for Hive views. Empty for non-view. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.viewOriginalText">view_original_text</a></code> | <code>str</code> | Original view text for Hive views. Empty for non-view. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.catalog"></a>

- *Type:* str

The Hive catalog where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#catalog BiglakeHiveTable#catalog}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.database"></a>

- *Type:* str

The Hive database where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#database BiglakeHiveTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.name"></a>

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.storageDescriptor"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#storage_descriptor BiglakeHiveTable#storage_descriptor}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deletion_policy BiglakeHiveTable#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.description"></a>

- *Type:* str

Description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Additional parameters associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `partition_keys`<sup>Optional</sup> <a name="partition_keys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.partitionKeys"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>]

partition_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#partition_keys BiglakeHiveTable#partition_keys}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#timeouts BiglakeHiveTable#timeouts}

---

##### `view_expanded_text`<sup>Optional</sup> <a name="view_expanded_text" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.viewExpandedText"></a>

- *Type:* str

Expanded view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_expanded_text BiglakeHiveTable#view_expanded_text}

---

##### `view_original_text`<sup>Optional</sup> <a name="view_original_text" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.viewOriginalText"></a>

- *Type:* str

Original view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_original_text BiglakeHiveTable#view_original_text}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys">put_partition_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor">put_storage_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetPartitionKeys">reset_partition_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewExpandedText">reset_view_expanded_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewOriginalText">reset_view_original_text</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_partition_keys` <a name="put_partition_keys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys"></a>

```python
def put_partition_keys(
  value: IResolvable | typing.List[BiglakeHiveTablePartitionKeys]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>]

---

##### `put_storage_descriptor` <a name="put_storage_descriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor"></a>

```python
def put_storage_descriptor(
  columns: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorColumns],
  bucket_cols: typing.List[str] = None,
  compressed: bool | IResolvable = None,
  input_format: str = None,
  location_uri: str = None,
  num_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: typing.Mapping[str] = None,
  serde_info: BiglakeHiveTableStorageDescriptorSerdeInfo = None,
  skewed_info: BiglakeHiveTableStorageDescriptorSkewedInfo = None,
  sort_cols: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSortCols] = None,
  stored_as_sub_dirs: bool | IResolvable = None
) -> None
```

###### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.columns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>]

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#columns BiglakeHiveTable#columns}

---

###### `bucket_cols`<sup>Optional</sup> <a name="bucket_cols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.bucketCols"></a>

- *Type:* typing.List[str]

Reducer grouping columns, clustering columns, and bucketing columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#bucket_cols BiglakeHiveTable#bucket_cols}

---

###### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.compressed"></a>

- *Type:* bool | cdktn.IResolvable

Whether the table data is compressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#compressed BiglakeHiveTable#compressed}

---

###### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.inputFormat"></a>

- *Type:* str

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#input_format BiglakeHiveTable#input_format}

---

###### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.locationUri"></a>

- *Type:* str

The Cloud Storage URI where the table data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location_uri BiglakeHiveTable#location_uri}

---

###### `num_buckets`<sup>Optional</sup> <a name="num_buckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.numBuckets"></a>

- *Type:* typing.Union[int, float]

The number of buckets in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#num_buckets BiglakeHiveTable#num_buckets}

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.outputFormat"></a>

- *Type:* str

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#output_format BiglakeHiveTable#output_format}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Key-value pairs for the storage descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

###### `serde_info`<sup>Optional</sup> <a name="serde_info" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.serdeInfo"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

serde_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_info BiglakeHiveTable#serde_info}

---

###### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.skewedInfo"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_info BiglakeHiveTable#skewed_info}

---

###### `sort_cols`<sup>Optional</sup> <a name="sort_cols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.sortCols"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>]

sort_cols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#sort_cols BiglakeHiveTable#sort_cols}

---

###### `stored_as_sub_dirs`<sup>Optional</sup> <a name="stored_as_sub_dirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.storedAsSubDirs"></a>

- *Type:* bool | cdktn.IResolvable

Whether the table is stored as sub directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#stored_as_sub_dirs BiglakeHiveTable#stored_as_sub_dirs}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_partition_keys` <a name="reset_partition_keys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetPartitionKeys"></a>

```python
def reset_partition_keys() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_view_expanded_text` <a name="reset_view_expanded_text" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewExpandedText"></a>

```python
def reset_view_expanded_text() -> None
```

##### `reset_view_original_text` <a name="reset_view_original_text" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewOriginalText"></a>

```python
def reset_view_original_text() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BiglakeHiveTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BiglakeHiveTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BiglakeHiveTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BiglakeHiveTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lastAccessTime">last_access_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeys">partition_keys</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList">BiglakeHiveTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference">BiglakeHiveTableStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tableType">table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference">BiglakeHiveTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeysInput">partition_keys_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptorInput">storage_descriptor_input</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedTextInput">view_expanded_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalTextInput">view_original_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `last_access_time`<sup>Required</sup> <a name="last_access_time" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lastAccessTime"></a>

```python
last_access_time: str
```

- *Type:* str

---

##### `partition_keys`<sup>Required</sup> <a name="partition_keys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeys"></a>

```python
partition_keys: BiglakeHiveTablePartitionKeysList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList">BiglakeHiveTablePartitionKeysList</a>

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptor"></a>

```python
storage_descriptor: BiglakeHiveTableStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference">BiglakeHiveTableStorageDescriptorOutputReference</a>

---

##### `table_type`<sup>Required</sup> <a name="table_type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeouts"></a>

```python
timeouts: BiglakeHiveTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference">BiglakeHiveTableTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition_keys_input`<sup>Optional</sup> <a name="partition_keys_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeysInput"></a>

```python
partition_keys_input: IResolvable | typing.List[BiglakeHiveTablePartitionKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `storage_descriptor_input`<sup>Optional</sup> <a name="storage_descriptor_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptorInput"></a>

```python
storage_descriptor_input: BiglakeHiveTableStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BiglakeHiveTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---

##### `view_expanded_text_input`<sup>Optional</sup> <a name="view_expanded_text_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedTextInput"></a>

```python
view_expanded_text_input: str
```

- *Type:* str

---

##### `view_original_text_input`<sup>Optional</sup> <a name="view_original_text_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalTextInput"></a>

```python
view_original_text_input: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `view_expanded_text`<sup>Required</sup> <a name="view_expanded_text" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

---

##### `view_original_text`<sup>Required</sup> <a name="view_original_text" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveTableConfig <a name="BiglakeHiveTableConfig" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog: str,
  database: str,
  name: str,
  storage_descriptor: BiglakeHiveTableStorageDescriptor,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  partition_keys: IResolvable | typing.List[BiglakeHiveTablePartitionKeys] = None,
  project: str = None,
  timeouts: BiglakeHiveTableTimeouts = None,
  view_expanded_text: str = None,
  view_original_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.catalog">catalog</a></code> | <code>str</code> | The Hive catalog where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.database">database</a></code> | <code>str</code> | The Hive database where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.name">name</a></code> | <code>str</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.description">description</a></code> | <code>str</code> | Description of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Additional parameters associated with the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.partitionKeys">partition_keys</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>]</code> | partition_keys block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | Expanded view text for Hive views. Empty for non-view. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | Original view text for Hive views. Empty for non-view. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

The Hive catalog where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#catalog BiglakeHiveTable#catalog}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The Hive database where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#database BiglakeHiveTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.storageDescriptor"></a>

```python
storage_descriptor: BiglakeHiveTableStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#storage_descriptor BiglakeHiveTable#storage_descriptor}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deletion_policy BiglakeHiveTable#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Additional parameters associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `partition_keys`<sup>Optional</sup> <a name="partition_keys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.partitionKeys"></a>

```python
partition_keys: IResolvable | typing.List[BiglakeHiveTablePartitionKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>]

partition_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#partition_keys BiglakeHiveTable#partition_keys}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.timeouts"></a>

```python
timeouts: BiglakeHiveTableTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#timeouts BiglakeHiveTable#timeouts}

---

##### `view_expanded_text`<sup>Optional</sup> <a name="view_expanded_text" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

Expanded view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_expanded_text BiglakeHiveTable#view_expanded_text}

---

##### `view_original_text`<sup>Optional</sup> <a name="view_original_text" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

Original view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_original_text BiglakeHiveTable#view_original_text}

---

### BiglakeHiveTablePartitionKeys <a name="BiglakeHiveTablePartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTablePartitionKeys(
  name: str,
  type: str,
  comment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.name">name</a></code> | <code>str</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.type">type</a></code> | <code>str</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.comment">comment</a></code> | <code>str</code> | Comment of the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.comment"></a>

```python
comment: str
```

- *Type:* str

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}

---

### BiglakeHiveTableStorageDescriptor <a name="BiglakeHiveTableStorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptor(
  columns: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorColumns],
  bucket_cols: typing.List[str] = None,
  compressed: bool | IResolvable = None,
  input_format: str = None,
  location_uri: str = None,
  num_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: typing.Mapping[str] = None,
  serde_info: BiglakeHiveTableStorageDescriptorSerdeInfo = None,
  skewed_info: BiglakeHiveTableStorageDescriptorSkewedInfo = None,
  sort_cols: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSortCols] = None,
  stored_as_sub_dirs: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.columns">columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>]</code> | columns block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.bucketCols">bucket_cols</a></code> | <code>typing.List[str]</code> | Reducer grouping columns, clustering columns, and bucketing columns. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.compressed">compressed</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the table data is compressed. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.inputFormat">input_format</a></code> | <code>str</code> | The fully qualified Java class name of the input format. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.locationUri">location_uri</a></code> | <code>str</code> | The Cloud Storage URI where the table data is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.numBuckets">num_buckets</a></code> | <code>typing.Union[int, float]</code> | The number of buckets in the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.outputFormat">output_format</a></code> | <code>str</code> | The fully qualified Java class name of the output format. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Key-value pairs for the storage descriptor. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | serde_info block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.sortCols">sort_cols</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>]</code> | sort_cols block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.storedAsSubDirs">stored_as_sub_dirs</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the table is stored as sub directories. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.columns"></a>

```python
columns: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>]

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#columns BiglakeHiveTable#columns}

---

##### `bucket_cols`<sup>Optional</sup> <a name="bucket_cols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.bucketCols"></a>

```python
bucket_cols: typing.List[str]
```

- *Type:* typing.List[str]

Reducer grouping columns, clustering columns, and bucketing columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#bucket_cols BiglakeHiveTable#bucket_cols}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.compressed"></a>

```python
compressed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the table data is compressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#compressed BiglakeHiveTable#compressed}

---

##### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#input_format BiglakeHiveTable#input_format}

---

##### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

The Cloud Storage URI where the table data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location_uri BiglakeHiveTable#location_uri}

---

##### `num_buckets`<sup>Optional</sup> <a name="num_buckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.numBuckets"></a>

```python
num_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of buckets in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#num_buckets BiglakeHiveTable#num_buckets}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#output_format BiglakeHiveTable#output_format}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Key-value pairs for the storage descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `serde_info`<sup>Optional</sup> <a name="serde_info" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.serdeInfo"></a>

```python
serde_info: BiglakeHiveTableStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

serde_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_info BiglakeHiveTable#serde_info}

---

##### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.skewedInfo"></a>

```python
skewed_info: BiglakeHiveTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_info BiglakeHiveTable#skewed_info}

---

##### `sort_cols`<sup>Optional</sup> <a name="sort_cols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.sortCols"></a>

```python
sort_cols: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSortCols]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>]

sort_cols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#sort_cols BiglakeHiveTable#sort_cols}

---

##### `stored_as_sub_dirs`<sup>Optional</sup> <a name="stored_as_sub_dirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.storedAsSubDirs"></a>

```python
stored_as_sub_dirs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the table is stored as sub directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#stored_as_sub_dirs BiglakeHiveTable#stored_as_sub_dirs}

---

### BiglakeHiveTableStorageDescriptorColumns <a name="BiglakeHiveTableStorageDescriptorColumns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns(
  name: str,
  type: str,
  comment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.name">name</a></code> | <code>str</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.type">type</a></code> | <code>str</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.comment">comment</a></code> | <code>str</code> | Comment of the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}

---

### BiglakeHiveTableStorageDescriptorSerdeInfo <a name="BiglakeHiveTableStorageDescriptorSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo(
  name: str,
  serialization_lib: str,
  description: str = None,
  deserializer_class: str = None,
  parameters: typing.Mapping[str] = None,
  serde_type: str = None,
  serializer_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.name">name</a></code> | <code>str</code> | Name of the SerDe, table name by default. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib">serialization_lib</a></code> | <code>str</code> | The fully qualified Java class name of the serialization library. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.description">description</a></code> | <code>str</code> | Description of the SerDe. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass">deserializer_class</a></code> | <code>str</code> | The fully qualified Java class name of the deserializer. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Parameters of the SerDe. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType">serde_type</a></code> | <code>str</code> | The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"]. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass">serializer_class</a></code> | <code>str</code> | The fully qualified Java class name of the serializer. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the SerDe, table name by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `serialization_lib`<sup>Required</sup> <a name="serialization_lib" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib"></a>

```python
serialization_lib: str
```

- *Type:* str

The fully qualified Java class name of the serialization library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serialization_lib BiglakeHiveTable#serialization_lib}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `deserializer_class`<sup>Optional</sup> <a name="deserializer_class" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass"></a>

```python
deserializer_class: str
```

- *Type:* str

The fully qualified Java class name of the deserializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deserializer_class BiglakeHiveTable#deserializer_class}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Parameters of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `serde_type`<sup>Optional</sup> <a name="serde_type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType"></a>

```python
serde_type: str
```

- *Type:* str

The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_type BiglakeHiveTable#serde_type}

---

##### `serializer_class`<sup>Optional</sup> <a name="serializer_class" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass"></a>

```python
serializer_class: str
```

- *Type:* str

The fully qualified Java class name of the serializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serializer_class BiglakeHiveTable#serializer_class}

---

### BiglakeHiveTableStorageDescriptorSkewedInfo <a name="BiglakeHiveTableStorageDescriptorSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo(
  skewed_col_names: typing.List[str],
  skewed_col_values: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues],
  skewed_key_values_locations: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames">skewed_col_names</a></code> | <code>typing.List[str]</code> | The column names that are skewed. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues">skewed_col_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]</code> | skewed_col_values block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations">skewed_key_values_locations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]</code> | skewed_key_values_locations block. |

---

##### `skewed_col_names`<sup>Required</sup> <a name="skewed_col_names" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames"></a>

```python
skewed_col_names: typing.List[str]
```

- *Type:* typing.List[str]

The column names that are skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_names BiglakeHiveTable#skewed_col_names}

---

##### `skewed_col_values`<sup>Required</sup> <a name="skewed_col_values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues"></a>

```python
skewed_col_values: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]

skewed_col_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_values BiglakeHiveTable#skewed_col_values}

---

##### `skewed_key_values_locations`<sup>Required</sup> <a name="skewed_key_values_locations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations"></a>

```python
skewed_key_values_locations: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]

skewed_key_values_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_key_values_locations BiglakeHiveTable#skewed_key_values_locations}

---

### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues(
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}.

---

### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations(
  location: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location BiglakeHiveTable#location}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location BiglakeHiveTable#location}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}.

---

### BiglakeHiveTableStorageDescriptorSortCols <a name="BiglakeHiveTableStorageDescriptorSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols(
  col: str,
  order: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.col">col</a></code> | <code>str</code> | The column name. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Sort order: 1 for Ascending, 0 for Descending. |

---

##### `col`<sup>Required</sup> <a name="col" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.col"></a>

```python
col: str
```

- *Type:* str

The column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#col BiglakeHiveTable#col}

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sort order: 1 for Ascending, 0 for Descending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#order BiglakeHiveTable#order}

---

### BiglakeHiveTableTimeouts <a name="BiglakeHiveTableTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeHiveTablePartitionKeysList <a name="BiglakeHiveTablePartitionKeysList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTablePartitionKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BiglakeHiveTablePartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BiglakeHiveTablePartitionKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>]

---


### BiglakeHiveTablePartitionKeysOutputReference <a name="BiglakeHiveTablePartitionKeysOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resetComment">reset_comment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeHiveTablePartitionKeys
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>

---


### BiglakeHiveTableStorageDescriptorColumnsList <a name="BiglakeHiveTableStorageDescriptorColumnsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BiglakeHiveTableStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>]

---


### BiglakeHiveTableStorageDescriptorColumnsOutputReference <a name="BiglakeHiveTableStorageDescriptorColumnsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeHiveTableStorageDescriptorColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>

---


### BiglakeHiveTableStorageDescriptorOutputReference <a name="BiglakeHiveTableStorageDescriptorOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns">put_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo">put_serde_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo">put_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols">put_sort_cols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols">reset_bucket_cols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetCompressed">reset_compressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat">reset_input_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri">reset_location_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets">reset_num_buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo">reset_serde_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo">reset_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSortCols">reset_sort_cols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs">reset_stored_as_sub_dirs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_columns` <a name="put_columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns"></a>

```python
def put_columns(
  value: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>]

---

##### `put_serde_info` <a name="put_serde_info" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo"></a>

```python
def put_serde_info(
  name: str,
  serialization_lib: str,
  description: str = None,
  deserializer_class: str = None,
  parameters: typing.Mapping[str] = None,
  serde_type: str = None,
  serializer_class: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.name"></a>

- *Type:* str

Name of the SerDe, table name by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

###### `serialization_lib`<sup>Required</sup> <a name="serialization_lib" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.serializationLib"></a>

- *Type:* str

The fully qualified Java class name of the serialization library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serialization_lib BiglakeHiveTable#serialization_lib}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.description"></a>

- *Type:* str

Description of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

###### `deserializer_class`<sup>Optional</sup> <a name="deserializer_class" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.deserializerClass"></a>

- *Type:* str

The fully qualified Java class name of the deserializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deserializer_class BiglakeHiveTable#deserializer_class}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Parameters of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

###### `serde_type`<sup>Optional</sup> <a name="serde_type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.serdeType"></a>

- *Type:* str

The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_type BiglakeHiveTable#serde_type}

---

###### `serializer_class`<sup>Optional</sup> <a name="serializer_class" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.serializerClass"></a>

- *Type:* str

The fully qualified Java class name of the serializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serializer_class BiglakeHiveTable#serializer_class}

---

##### `put_skewed_info` <a name="put_skewed_info" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo"></a>

```python
def put_skewed_info(
  skewed_col_names: typing.List[str],
  skewed_col_values: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues],
  skewed_key_values_locations: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
) -> None
```

###### `skewed_col_names`<sup>Required</sup> <a name="skewed_col_names" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColNames"></a>

- *Type:* typing.List[str]

The column names that are skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_names BiglakeHiveTable#skewed_col_names}

---

###### `skewed_col_values`<sup>Required</sup> <a name="skewed_col_values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColValues"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]

skewed_col_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_values BiglakeHiveTable#skewed_col_values}

---

###### `skewed_key_values_locations`<sup>Required</sup> <a name="skewed_key_values_locations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedKeyValuesLocations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]

skewed_key_values_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_key_values_locations BiglakeHiveTable#skewed_key_values_locations}

---

##### `put_sort_cols` <a name="put_sort_cols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols"></a>

```python
def put_sort_cols(
  value: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSortCols]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>]

---

##### `reset_bucket_cols` <a name="reset_bucket_cols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols"></a>

```python
def reset_bucket_cols() -> None
```

##### `reset_compressed` <a name="reset_compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetCompressed"></a>

```python
def reset_compressed() -> None
```

##### `reset_input_format` <a name="reset_input_format" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat"></a>

```python
def reset_input_format() -> None
```

##### `reset_location_uri` <a name="reset_location_uri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri"></a>

```python
def reset_location_uri() -> None
```

##### `reset_num_buckets` <a name="reset_num_buckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets"></a>

```python
def reset_num_buckets() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_serde_info` <a name="reset_serde_info" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo"></a>

```python
def reset_serde_info() -> None
```

##### `reset_skewed_info` <a name="reset_skewed_info" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo"></a>

```python
def reset_skewed_info() -> None
```

##### `reset_sort_cols` <a name="reset_sort_cols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSortCols"></a>

```python
def reset_sort_cols() -> None
```

##### `reset_stored_as_sub_dirs` <a name="reset_stored_as_sub_dirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs"></a>

```python
def reset_stored_as_sub_dirs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList">BiglakeHiveTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortCols">sort_cols</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList">BiglakeHiveTableStorageDescriptorSortColsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput">bucket_cols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput">columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput">compressed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput">input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput">location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput">num_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput">serde_info_input</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput">skewed_info_input</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput">sort_cols_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput">stored_as_sub_dirs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols">bucket_cols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets">num_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs">stored_as_sub_dirs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columns"></a>

```python
columns: BiglakeHiveTableStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList">BiglakeHiveTableStorageDescriptorColumnsList</a>

---

##### `serde_info`<sup>Required</sup> <a name="serde_info" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo"></a>

```python
serde_info: BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a>

---

##### `skewed_info`<sup>Required</sup> <a name="skewed_info" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```python
skewed_info: BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sort_cols`<sup>Required</sup> <a name="sort_cols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortCols"></a>

```python
sort_cols: BiglakeHiveTableStorageDescriptorSortColsList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList">BiglakeHiveTableStorageDescriptorSortColsList</a>

---

##### `bucket_cols_input`<sup>Optional</sup> <a name="bucket_cols_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput"></a>

```python
bucket_cols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput"></a>

```python
columns_input: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>]

---

##### `compressed_input`<sup>Optional</sup> <a name="compressed_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput"></a>

```python
compressed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_format_input`<sup>Optional</sup> <a name="input_format_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput"></a>

```python
input_format_input: str
```

- *Type:* str

---

##### `location_uri_input`<sup>Optional</sup> <a name="location_uri_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput"></a>

```python
location_uri_input: str
```

- *Type:* str

---

##### `num_buckets_input`<sup>Optional</sup> <a name="num_buckets_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput"></a>

```python
num_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serde_info_input`<sup>Optional</sup> <a name="serde_info_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```python
serde_info_input: BiglakeHiveTableStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---

##### `skewed_info_input`<sup>Optional</sup> <a name="skewed_info_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```python
skewed_info_input: BiglakeHiveTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---

##### `sort_cols_input`<sup>Optional</sup> <a name="sort_cols_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput"></a>

```python
sort_cols_input: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSortCols]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>]

---

##### `stored_as_sub_dirs_input`<sup>Optional</sup> <a name="stored_as_sub_dirs_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput"></a>

```python
stored_as_sub_dirs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bucket_cols`<sup>Required</sup> <a name="bucket_cols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols"></a>

```python
bucket_cols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressed"></a>

```python
compressed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `num_buckets`<sup>Required</sup> <a name="num_buckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets"></a>

```python
num_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `stored_as_sub_dirs`<sup>Required</sup> <a name="stored_as_sub_dirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs"></a>

```python
stored_as_sub_dirs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: BiglakeHiveTableStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---


### BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference <a name="BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass">reset_deserializer_class</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType">reset_serde_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass">reset_serializer_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_deserializer_class` <a name="reset_deserializer_class" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass"></a>

```python
def reset_deserializer_class() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_serde_type` <a name="reset_serde_type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType"></a>

```python
def reset_serde_type() -> None
```

##### `reset_serializer_class` <a name="reset_serializer_class" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass"></a>

```python
def reset_serializer_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput">deserializer_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput">serde_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput">serialization_lib_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput">serializer_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass">deserializer_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType">serde_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib">serialization_lib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass">serializer_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `deserializer_class_input`<sup>Optional</sup> <a name="deserializer_class_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput"></a>

```python
deserializer_class_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serde_type_input`<sup>Optional</sup> <a name="serde_type_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput"></a>

```python
serde_type_input: str
```

- *Type:* str

---

##### `serialization_lib_input`<sup>Optional</sup> <a name="serialization_lib_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput"></a>

```python
serialization_lib_input: str
```

- *Type:* str

---

##### `serializer_class_input`<sup>Optional</sup> <a name="serializer_class_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput"></a>

```python
serializer_class_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `deserializer_class`<sup>Required</sup> <a name="deserializer_class" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass"></a>

```python
deserializer_class: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serde_type`<sup>Required</sup> <a name="serde_type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType"></a>

```python
serde_type: str
```

- *Type:* str

---

##### `serialization_lib`<sup>Required</sup> <a name="serialization_lib" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib"></a>

```python
serialization_lib: str
```

- *Type:* str

---

##### `serializer_class`<sup>Required</sup> <a name="serializer_class" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass"></a>

```python
serializer_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```python
internal_value: BiglakeHiveTableStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues">put_skewed_col_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations">put_skewed_key_values_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_skewed_col_values` <a name="put_skewed_col_values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues"></a>

```python
def put_skewed_col_values(
  value: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]

---

##### `put_skewed_key_values_locations` <a name="put_skewed_key_values_locations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations"></a>

```python
def put_skewed_key_values_locations(
  value: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues">skewed_col_values</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations">skewed_key_values_locations</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput">skewed_col_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput">skewed_col_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput">skewed_key_values_locations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames">skewed_col_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `skewed_col_values`<sup>Required</sup> <a name="skewed_col_values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues"></a>

```python
skewed_col_values: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a>

---

##### `skewed_key_values_locations`<sup>Required</sup> <a name="skewed_key_values_locations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations"></a>

```python
skewed_key_values_locations: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a>

---

##### `skewed_col_names_input`<sup>Optional</sup> <a name="skewed_col_names_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput"></a>

```python
skewed_col_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_col_values_input`<sup>Optional</sup> <a name="skewed_col_values_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput"></a>

```python
skewed_col_values_input: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]

---

##### `skewed_key_values_locations_input`<sup>Optional</sup> <a name="skewed_key_values_locations_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput"></a>

```python
skewed_key_values_locations_input: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]

---

##### `skewed_col_names`<sup>Required</sup> <a name="skewed_col_names" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames"></a>

```python
skewed_col_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```python
internal_value: BiglakeHiveTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>

---


### BiglakeHiveTableStorageDescriptorSortColsList <a name="BiglakeHiveTableStorageDescriptorSortColsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BiglakeHiveTableStorageDescriptorSortColsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BiglakeHiveTableStorageDescriptorSortCols]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>]

---


### BiglakeHiveTableStorageDescriptorSortColsOutputReference <a name="BiglakeHiveTableStorageDescriptorSortColsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput">col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col">col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `col_input`<sup>Optional</sup> <a name="col_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput"></a>

```python
col_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `col`<sup>Required</sup> <a name="col" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col"></a>

```python
col: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeHiveTableStorageDescriptorSortCols
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>

---


### BiglakeHiveTableTimeoutsOutputReference <a name="BiglakeHiveTableTimeoutsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_table

biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeHiveTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---



