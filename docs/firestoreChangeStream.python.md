# `firestoreChangeStream` Submodule <a name="`firestoreChangeStream` Submodule" id="@cdktn/provider-google.firestoreChangeStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreChangeStream <a name="FirestoreChangeStream" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream google_firestore_change_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStream(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  retention_period: str,
  collection_group_scope: FirestoreChangeStreamCollectionGroupScope = None,
  database: str = None,
  database_scope: FirestoreChangeStreamDatabaseScope = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: FirestoreChangeStreamTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID to use for the change stream, which will become the final component of the change stream's resource name. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.retentionPeriod">retention_period</a></code> | <code>str</code> | The duration for which change stream data is retained. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.collectionGroupScope">collection_group_scope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a></code> | collection_group_scope block. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.database">database</a></code> | <code>str</code> | The Firestore database ID. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.databaseScope">database_scope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a></code> | database_scope block. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#id FirestoreChangeStream#id}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#project FirestoreChangeStream#project}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.name"></a>

- *Type:* str

The ID to use for the change stream, which will become the final component of the change stream's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#name FirestoreChangeStream#name}

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.retentionPeriod"></a>

- *Type:* str

The duration for which change stream data is retained.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "86400s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#retention_period FirestoreChangeStream#retention_period}

---

##### `collection_group_scope`<sup>Optional</sup> <a name="collection_group_scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.collectionGroupScope"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

collection_group_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#collection_group_scope FirestoreChangeStream#collection_group_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.database"></a>

- *Type:* str

The Firestore database ID. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#database FirestoreChangeStream#database}

---

##### `database_scope`<sup>Optional</sup> <a name="database_scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.databaseScope"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

database_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#database_scope FirestoreChangeStream#database_scope}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#deletion_policy FirestoreChangeStream#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#id FirestoreChangeStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#project FirestoreChangeStream#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#timeouts FirestoreChangeStream#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putCollectionGroupScope">put_collection_group_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putDatabaseScope">put_database_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetCollectionGroupScope">reset_collection_group_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabaseScope">reset_database_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_collection_group_scope` <a name="put_collection_group_scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putCollectionGroupScope"></a>

```python
def put_collection_group_scope(
  collection_group_id: str
) -> None
```

###### `collection_group_id`<sup>Required</sup> <a name="collection_group_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putCollectionGroupScope.parameter.collectionGroupId"></a>

- *Type:* str

The ID of the collection group to track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#collection_group_id FirestoreChangeStream#collection_group_id}

---

##### `put_database_scope` <a name="put_database_scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putDatabaseScope"></a>

```python
def put_database_scope() -> None
```

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#create FirestoreChangeStream#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#delete FirestoreChangeStream#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#update FirestoreChangeStream#update}.

---

##### `reset_collection_group_scope` <a name="reset_collection_group_scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetCollectionGroupScope"></a>

```python
def reset_collection_group_scope() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_database_scope` <a name="reset_database_scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabaseScope"></a>

```python
def reset_database_scope() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FirestoreChangeStream resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isConstruct"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformElement"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformResource"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FirestoreChangeStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirestoreChangeStream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirestoreChangeStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FirestoreChangeStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScope">collection_group_scope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference">FirestoreChangeStreamCollectionGroupScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScope">database_scope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference">FirestoreChangeStreamDatabaseScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference">FirestoreChangeStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScopeInput">collection_group_scope_input</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScopeInput">database_scope_input</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriodInput">retention_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriod">retention_period</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_group_scope`<sup>Required</sup> <a name="collection_group_scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScope"></a>

```python
collection_group_scope: FirestoreChangeStreamCollectionGroupScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference">FirestoreChangeStreamCollectionGroupScopeOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `database_scope`<sup>Required</sup> <a name="database_scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScope"></a>

```python
database_scope: FirestoreChangeStreamDatabaseScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference">FirestoreChangeStreamDatabaseScopeOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeouts"></a>

```python
timeouts: FirestoreChangeStreamTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference">FirestoreChangeStreamTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `collection_group_scope_input`<sup>Optional</sup> <a name="collection_group_scope_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScopeInput"></a>

```python
collection_group_scope_input: FirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `database_scope_input`<sup>Optional</sup> <a name="database_scope_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScopeInput"></a>

```python
database_scope_input: FirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriodInput"></a>

```python
retention_period_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FirestoreChangeStreamTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreChangeStreamCollectionGroupScope <a name="FirestoreChangeStreamCollectionGroupScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope.Initializer"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope(
  collection_group_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope.property.collectionGroupId">collection_group_id</a></code> | <code>str</code> | The ID of the collection group to track. |

---

##### `collection_group_id`<sup>Required</sup> <a name="collection_group_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope.property.collectionGroupId"></a>

```python
collection_group_id: str
```

- *Type:* str

The ID of the collection group to track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#collection_group_id FirestoreChangeStream#collection_group_id}

---

### FirestoreChangeStreamConfig <a name="FirestoreChangeStreamConfig" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.Initializer"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStreamConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  retention_period: str,
  collection_group_scope: FirestoreChangeStreamCollectionGroupScope = None,
  database: str = None,
  database_scope: FirestoreChangeStreamDatabaseScope = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: FirestoreChangeStreamTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.name">name</a></code> | <code>str</code> | The ID to use for the change stream, which will become the final component of the change stream's resource name. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.retentionPeriod">retention_period</a></code> | <code>str</code> | The duration for which change stream data is retained. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.collectionGroupScope">collection_group_scope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a></code> | collection_group_scope block. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.database">database</a></code> | <code>str</code> | The Firestore database ID. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.databaseScope">database_scope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a></code> | database_scope block. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#id FirestoreChangeStream#id}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#project FirestoreChangeStream#project}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID to use for the change stream, which will become the final component of the change stream's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#name FirestoreChangeStream#name}

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

The duration for which change stream data is retained.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "86400s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#retention_period FirestoreChangeStream#retention_period}

---

##### `collection_group_scope`<sup>Optional</sup> <a name="collection_group_scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.collectionGroupScope"></a>

```python
collection_group_scope: FirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

collection_group_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#collection_group_scope FirestoreChangeStream#collection_group_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The Firestore database ID. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#database FirestoreChangeStream#database}

---

##### `database_scope`<sup>Optional</sup> <a name="database_scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.databaseScope"></a>

```python
database_scope: FirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

database_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#database_scope FirestoreChangeStream#database_scope}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#deletion_policy FirestoreChangeStream#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#id FirestoreChangeStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#project FirestoreChangeStream#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.timeouts"></a>

```python
timeouts: FirestoreChangeStreamTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#timeouts FirestoreChangeStream#timeouts}

---

### FirestoreChangeStreamDatabaseScope <a name="FirestoreChangeStreamDatabaseScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope.Initializer"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStreamDatabaseScope()
```


### FirestoreChangeStreamTimeouts <a name="FirestoreChangeStreamTimeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.Initializer"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStreamTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#create FirestoreChangeStream#create}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#delete FirestoreChangeStream#delete}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#update FirestoreChangeStream#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#create FirestoreChangeStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#delete FirestoreChangeStream#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/firestore_change_stream#update FirestoreChangeStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreChangeStreamCollectionGroupScopeOutputReference <a name="FirestoreChangeStreamCollectionGroupScopeOutputReference" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput">collection_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId">collection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_group_id_input`<sup>Optional</sup> <a name="collection_group_id_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput"></a>

```python
collection_group_id_input: str
```

- *Type:* str

---

##### `collection_group_id`<sup>Required</sup> <a name="collection_group_id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId"></a>

```python
collection_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue"></a>

```python
internal_value: FirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

---


### FirestoreChangeStreamDatabaseScopeOutputReference <a name="FirestoreChangeStreamDatabaseScopeOutputReference" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue"></a>

```python
internal_value: FirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

---


### FirestoreChangeStreamTimeoutsOutputReference <a name="FirestoreChangeStreamTimeoutsOutputReference" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firestore_change_stream

firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FirestoreChangeStreamTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a>

---



