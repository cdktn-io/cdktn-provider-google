# `biglakeIcebergTable` Submodule <a name="`biglakeIcebergTable` Submodule" id="@cdktn/provider-google.biglakeIcebergTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeIcebergTable <a name="BiglakeIcebergTable" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table google_biglake_iceberg_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTable(
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
  name: str,
  namespace: str,
  schema: BiglakeIcebergTableSchema,
  deletion_policy: str = None,
  id: str = None,
  location: str = None,
  partition_spec: BiglakeIcebergTablePartitionSpec = None,
  project: str = None,
  properties: typing.Mapping[str] = None,
  sort_order: BiglakeIcebergTableSortOrder = None,
  timeouts: BiglakeIcebergTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The parent namespace of the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#id BiglakeIcebergTable#id}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a></code> | partition_spec block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#project BiglakeIcebergTable#project}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | User-defined properties for the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.sortOrder">sort_order</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a></code> | sort_order block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.catalog"></a>

- *Type:* str

The name of the IcebergCatalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#catalog BiglakeIcebergTable#catalog}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.name"></a>

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#name BiglakeIcebergTable#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.namespace"></a>

- *Type:* str

The parent namespace of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#namespace BiglakeIcebergTable#namespace}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#schema BiglakeIcebergTable#schema}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#deletion_policy BiglakeIcebergTable#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#id BiglakeIcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.location"></a>

- *Type:* str

The location of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#location BiglakeIcebergTable#location}

---

##### `partition_spec`<sup>Optional</sup> <a name="partition_spec" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.partitionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a>

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#partition_spec BiglakeIcebergTable#partition_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#project BiglakeIcebergTable#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

User-defined properties for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#properties BiglakeIcebergTable#properties}

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.sortOrder"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a>

sort_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#sort_order BiglakeIcebergTable#sort_order}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#timeouts BiglakeIcebergTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putPartitionSpec">put_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSortOrder">put_sort_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetPartitionSpec">reset_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_partition_spec` <a name="put_partition_spec" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putPartitionSpec"></a>

```python
def put_partition_spec(
  fields: IResolvable | typing.List[BiglakeIcebergTablePartitionSpecFields]
) -> None
```

###### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putPartitionSpec.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}

---

##### `put_schema` <a name="put_schema" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSchema"></a>

```python
def put_schema(
  fields: IResolvable | typing.List[BiglakeIcebergTableSchemaFields],
  identifier_field_ids: typing.List[typing.Union[int, float]] = None,
  type: str = None
) -> None
```

###### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSchema.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}

---

###### `identifier_field_ids`<sup>Optional</sup> <a name="identifier_field_ids" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSchema.parameter.identifierFieldIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

The field IDs that make up the identifier for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#identifier_field_ids BiglakeIcebergTable#identifier_field_ids}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSchema.parameter.type"></a>

- *Type:* str

The type of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#type BiglakeIcebergTable#type}

---

##### `put_sort_order` <a name="put_sort_order" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSortOrder"></a>

```python
def put_sort_order(
  fields: IResolvable | typing.List[BiglakeIcebergTableSortOrderFields]
) -> None
```

###### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSortOrder.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#create BiglakeIcebergTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#delete BiglakeIcebergTable#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#update BiglakeIcebergTable#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_partition_spec` <a name="reset_partition_spec" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetPartitionSpec"></a>

```python
def reset_partition_spec() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BiglakeIcebergTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isConstruct"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformElement"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformResource"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BiglakeIcebergTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BiglakeIcebergTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BiglakeIcebergTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeIcebergTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference">BiglakeIcebergTablePartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference">BiglakeIcebergTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.sortOrder">sort_order</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference">BiglakeIcebergTableSortOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference">BiglakeIcebergTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.partitionSpecInput">partition_spec_input</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.schemaInput">schema_input</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.sortOrderInput">sort_order_input</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `partition_spec`<sup>Required</sup> <a name="partition_spec" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.partitionSpec"></a>

```python
partition_spec: BiglakeIcebergTablePartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference">BiglakeIcebergTablePartitionSpecOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.schema"></a>

```python
schema: BiglakeIcebergTableSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference">BiglakeIcebergTableSchemaOutputReference</a>

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.sortOrder"></a>

```python
sort_order: BiglakeIcebergTableSortOrderOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference">BiglakeIcebergTableSortOrderOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.timeouts"></a>

```python
timeouts: BiglakeIcebergTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference">BiglakeIcebergTableTimeoutsOutputReference</a>

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_spec_input`<sup>Optional</sup> <a name="partition_spec_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.partitionSpecInput"></a>

```python
partition_spec_input: BiglakeIcebergTablePartitionSpec
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.schemaInput"></a>

```python
schema_input: BiglakeIcebergTableSchema
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a>

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.sortOrderInput"></a>

```python
sort_order_input: BiglakeIcebergTableSortOrder
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BiglakeIcebergTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeIcebergTableConfig <a name="BiglakeIcebergTableConfig" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog: str,
  name: str,
  namespace: str,
  schema: BiglakeIcebergTableSchema,
  deletion_policy: str = None,
  id: str = None,
  location: str = None,
  partition_spec: BiglakeIcebergTablePartitionSpec = None,
  project: str = None,
  properties: typing.Mapping[str] = None,
  sort_order: BiglakeIcebergTableSortOrder = None,
  timeouts: BiglakeIcebergTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.catalog">catalog</a></code> | <code>str</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.name">name</a></code> | <code>str</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.namespace">namespace</a></code> | <code>str</code> | The parent namespace of the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#id BiglakeIcebergTable#id}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.location">location</a></code> | <code>str</code> | The location of the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a></code> | partition_spec block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#project BiglakeIcebergTable#project}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | User-defined properties for the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.sortOrder">sort_order</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a></code> | sort_order block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

The name of the IcebergCatalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#catalog BiglakeIcebergTable#catalog}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#name BiglakeIcebergTable#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The parent namespace of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#namespace BiglakeIcebergTable#namespace}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.schema"></a>

```python
schema: BiglakeIcebergTableSchema
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#schema BiglakeIcebergTable#schema}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#deletion_policy BiglakeIcebergTable#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#id BiglakeIcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#location BiglakeIcebergTable#location}

---

##### `partition_spec`<sup>Optional</sup> <a name="partition_spec" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.partitionSpec"></a>

```python
partition_spec: BiglakeIcebergTablePartitionSpec
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a>

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#partition_spec BiglakeIcebergTable#partition_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#project BiglakeIcebergTable#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined properties for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#properties BiglakeIcebergTable#properties}

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.sortOrder"></a>

```python
sort_order: BiglakeIcebergTableSortOrder
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a>

sort_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#sort_order BiglakeIcebergTable#sort_order}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.timeouts"></a>

```python
timeouts: BiglakeIcebergTableTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#timeouts BiglakeIcebergTable#timeouts}

---

### BiglakeIcebergTablePartitionSpec <a name="BiglakeIcebergTablePartitionSpec" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTablePartitionSpec(
  fields: IResolvable | typing.List[BiglakeIcebergTablePartitionSpecFields]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>]</code> | fields block. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec.property.fields"></a>

```python
fields: IResolvable | typing.List[BiglakeIcebergTablePartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}

---

### BiglakeIcebergTablePartitionSpecFields <a name="BiglakeIcebergTablePartitionSpecFields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields(
  name: str,
  source_id: typing.Union[int, float],
  transform: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.name">name</a></code> | <code>str</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | The source field ID for the partition field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.transform">transform</a></code> | <code>str</code> | The transform to apply to the source field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#name BiglakeIcebergTable#name}

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The source field ID for the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#source_id BiglakeIcebergTable#source_id}

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.transform"></a>

```python
transform: str
```

- *Type:* str

The transform to apply to the source field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#transform BiglakeIcebergTable#transform}

---

### BiglakeIcebergTableSchema <a name="BiglakeIcebergTableSchema" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableSchema(
  fields: IResolvable | typing.List[BiglakeIcebergTableSchemaFields],
  identifier_field_ids: typing.List[typing.Union[int, float]] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>]</code> | fields block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.identifierFieldIds">identifier_field_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The field IDs that make up the identifier for the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.type">type</a></code> | <code>str</code> | The type of the schema. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.fields"></a>

```python
fields: IResolvable | typing.List[BiglakeIcebergTableSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}

---

##### `identifier_field_ids`<sup>Optional</sup> <a name="identifier_field_ids" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.identifierFieldIds"></a>

```python
identifier_field_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The field IDs that make up the identifier for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#identifier_field_ids BiglakeIcebergTable#identifier_field_ids}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#type BiglakeIcebergTable#type}

---

### BiglakeIcebergTableSchemaFields <a name="BiglakeIcebergTableSchemaFields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableSchemaFields(
  id: typing.Union[int, float],
  name: str,
  required: bool | IResolvable,
  type: str,
  doc: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.id">id</a></code> | <code>typing.Union[int, float]</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.name">name</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the field is required. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.type">type</a></code> | <code>str</code> | The type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.doc">doc</a></code> | <code>str</code> | A description of the field. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The unique identifier of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#id BiglakeIcebergTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#name BiglakeIcebergTable#name}

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#required BiglakeIcebergTable#required}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#type BiglakeIcebergTable#type}

---

##### `doc`<sup>Optional</sup> <a name="doc" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.doc"></a>

```python
doc: str
```

- *Type:* str

A description of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#doc BiglakeIcebergTable#doc}

---

### BiglakeIcebergTableSortOrder <a name="BiglakeIcebergTableSortOrder" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableSortOrder(
  fields: IResolvable | typing.List[BiglakeIcebergTableSortOrderFields]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>]</code> | fields block. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder.property.fields"></a>

```python
fields: IResolvable | typing.List[BiglakeIcebergTableSortOrderFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}

---

### BiglakeIcebergTableSortOrderFields <a name="BiglakeIcebergTableSortOrderFields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableSortOrderFields(
  direction: str,
  null_order: str,
  source_id: typing.Union[int, float],
  transform: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.direction">direction</a></code> | <code>str</code> | The sort direction for the sort field. Possible values: "asc", "desc". |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.nullOrder">null_order</a></code> | <code>str</code> | The null ordering for the sort field. Possible values: "nulls-first", "nulls-last". |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | The source field ID for the sort field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.transform">transform</a></code> | <code>str</code> | The transform to apply to the source field. |

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.direction"></a>

```python
direction: str
```

- *Type:* str

The sort direction for the sort field. Possible values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#direction BiglakeIcebergTable#direction}

---

##### `null_order`<sup>Required</sup> <a name="null_order" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.nullOrder"></a>

```python
null_order: str
```

- *Type:* str

The null ordering for the sort field. Possible values: "nulls-first", "nulls-last".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#null_order BiglakeIcebergTable#null_order}

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The source field ID for the sort field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#source_id BiglakeIcebergTable#source_id}

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.transform"></a>

```python
transform: str
```

- *Type:* str

The transform to apply to the source field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#transform BiglakeIcebergTable#transform}

---

### BiglakeIcebergTableTimeouts <a name="BiglakeIcebergTableTimeouts" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#create BiglakeIcebergTable#create}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#delete BiglakeIcebergTable#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#update BiglakeIcebergTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#create BiglakeIcebergTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#delete BiglakeIcebergTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/biglake_iceberg_table#update BiglakeIcebergTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeIcebergTablePartitionSpecFieldsList <a name="BiglakeIcebergTablePartitionSpecFieldsList" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BiglakeIcebergTablePartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BiglakeIcebergTablePartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>]

---


### BiglakeIcebergTablePartitionSpecFieldsOutputReference <a name="BiglakeIcebergTablePartitionSpecFieldsOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId">field_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput">source_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput">transform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId"></a>

```python
field_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```python
source_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform_input`<sup>Optional</sup> <a name="transform_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput"></a>

```python
transform_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeIcebergTablePartitionSpecFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>

---


### BiglakeIcebergTablePartitionSpecOutputReference <a name="BiglakeIcebergTablePartitionSpecOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.putFields">put_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[BiglakeIcebergTablePartitionSpecFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList">BiglakeIcebergTablePartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.specId">spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fields"></a>

```python
fields: BiglakeIcebergTablePartitionSpecFieldsList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList">BiglakeIcebergTablePartitionSpecFieldsList</a>

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.specId"></a>

```python
spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[BiglakeIcebergTablePartitionSpecFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.internalValue"></a>

```python
internal_value: BiglakeIcebergTablePartitionSpec
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a>

---


### BiglakeIcebergTableSchemaFieldsList <a name="BiglakeIcebergTableSchemaFieldsList" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BiglakeIcebergTableSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BiglakeIcebergTableSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>]

---


### BiglakeIcebergTableSchemaFieldsOutputReference <a name="BiglakeIcebergTableSchemaFieldsOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.resetDoc">reset_doc</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_doc` <a name="reset_doc" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.resetDoc"></a>

```python
def reset_doc() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.docInput">doc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.idInput">id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput">required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.doc">doc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `doc_input`<sup>Optional</sup> <a name="doc_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.docInput"></a>

```python
doc_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.idInput"></a>

```python
id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `doc`<sup>Required</sup> <a name="doc" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.doc"></a>

```python
doc: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeIcebergTableSchemaFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>

---


### BiglakeIcebergTableSchemaOutputReference <a name="BiglakeIcebergTableSchemaOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds">reset_identifier_field_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[BiglakeIcebergTableSchemaFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>]

---

##### `reset_identifier_field_ids` <a name="reset_identifier_field_ids" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds"></a>

```python
def reset_identifier_field_ids() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList">BiglakeIcebergTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.schemaId">schema_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput">identifier_field_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds">identifier_field_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fields"></a>

```python
fields: BiglakeIcebergTableSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList">BiglakeIcebergTableSchemaFieldsList</a>

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.schemaId"></a>

```python
schema_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[BiglakeIcebergTableSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>]

---

##### `identifier_field_ids_input`<sup>Optional</sup> <a name="identifier_field_ids_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput"></a>

```python
identifier_field_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifier_field_ids`<sup>Required</sup> <a name="identifier_field_ids" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds"></a>

```python
identifier_field_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.internalValue"></a>

```python
internal_value: BiglakeIcebergTableSchema
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a>

---


### BiglakeIcebergTableSortOrderFieldsList <a name="BiglakeIcebergTableSortOrderFieldsList" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BiglakeIcebergTableSortOrderFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BiglakeIcebergTableSortOrderFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>]

---


### BiglakeIcebergTableSortOrderFieldsOutputReference <a name="BiglakeIcebergTableSortOrderFieldsOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.nullOrderInput">null_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.sourceIdInput">source_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.transformInput">transform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.nullOrder">null_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `null_order_input`<sup>Optional</sup> <a name="null_order_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.nullOrderInput"></a>

```python
null_order_input: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.sourceIdInput"></a>

```python
source_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform_input`<sup>Optional</sup> <a name="transform_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.transformInput"></a>

```python
transform_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `null_order`<sup>Required</sup> <a name="null_order" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.nullOrder"></a>

```python
null_order: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeIcebergTableSortOrderFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>

---


### BiglakeIcebergTableSortOrderOutputReference <a name="BiglakeIcebergTableSortOrderOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.putFields">put_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[BiglakeIcebergTableSortOrderFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList">BiglakeIcebergTableSortOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.orderId">order_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fields"></a>

```python
fields: BiglakeIcebergTableSortOrderFieldsList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList">BiglakeIcebergTableSortOrderFieldsList</a>

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.orderId"></a>

```python
order_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[BiglakeIcebergTableSortOrderFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.internalValue"></a>

```python
internal_value: BiglakeIcebergTableSortOrder
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a>

---


### BiglakeIcebergTableTimeoutsOutputReference <a name="BiglakeIcebergTableTimeoutsOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_iceberg_table

biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeIcebergTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a>

---



