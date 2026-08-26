# `vectorSearchIndex` Submodule <a name="`vectorSearchIndex` Submodule" id="@cdktn/provider-google.vectorSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchIndex <a name="VectorSearchIndex" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index google_vector_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndex(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  index_field: str,
  index_id: str,
  location: str,
  dedicated_infrastructure: VectorSearchIndexDedicatedInfrastructure = None,
  deletion_policy: str = None,
  dense_scann: VectorSearchIndexDenseScann = None,
  description: str = None,
  display_name: str = None,
  distance_metric: str = None,
  filter_fields: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  store_fields: typing.List[str] = None,
  timeouts: VectorSearchIndexTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.indexField">index_field</a></code> | <code>str</code> | The collection schema field to index. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.indexId">index_id</a></code> | <code>str</code> | ID of the Index to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.dedicatedInfrastructure">dedicated_infrastructure</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a></code> | dedicated_infrastructure block. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.denseScann">dense_scann</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a></code> | dense_scann block. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.description">description</a></code> | <code>str</code> | User-specified description of the index. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-specified display name of the index. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.distanceMetric">distance_metric</a></code> | <code>str</code> | Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"]. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.filterFields">filter_fields</a></code> | <code>typing.List[str]</code> | The fields to push into the index to enable fast ANN inline filtering. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#id VectorSearchIndex#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#project VectorSearchIndex#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.storeFields">store_fields</a></code> | <code>typing.List[str]</code> | The fields to push into the index to enable inline data retrieval. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.collectionId"></a>

- *Type:* str

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#collection_id VectorSearchIndex#collection_id}

---

##### `index_field`<sup>Required</sup> <a name="index_field" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.indexField"></a>

- *Type:* str

The collection schema field to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#index_field VectorSearchIndex#index_field}

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.indexId"></a>

- *Type:* str

ID of the Index to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#index_id VectorSearchIndex#index_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#location VectorSearchIndex#location}

---

##### `dedicated_infrastructure`<sup>Optional</sup> <a name="dedicated_infrastructure" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.dedicatedInfrastructure"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a>

dedicated_infrastructure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#dedicated_infrastructure VectorSearchIndex#dedicated_infrastructure}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#deletion_policy VectorSearchIndex#deletion_policy}

---

##### `dense_scann`<sup>Optional</sup> <a name="dense_scann" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.denseScann"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a>

dense_scann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#dense_scann VectorSearchIndex#dense_scann}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.description"></a>

- *Type:* str

User-specified description of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#description VectorSearchIndex#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.displayName"></a>

- *Type:* str

User-specified display name of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#display_name VectorSearchIndex#display_name}

---

##### `distance_metric`<sup>Optional</sup> <a name="distance_metric" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.distanceMetric"></a>

- *Type:* str

Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#distance_metric VectorSearchIndex#distance_metric}

---

##### `filter_fields`<sup>Optional</sup> <a name="filter_fields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.filterFields"></a>

- *Type:* typing.List[str]

The fields to push into the index to enable fast ANN inline filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#filter_fields VectorSearchIndex#filter_fields}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#id VectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#labels VectorSearchIndex#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#project VectorSearchIndex#project}.

---

##### `store_fields`<sup>Optional</sup> <a name="store_fields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.storeFields"></a>

- *Type:* typing.List[str]

The fields to push into the index to enable inline data retrieval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#store_fields VectorSearchIndex#store_fields}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#timeouts VectorSearchIndex#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDedicatedInfrastructure">put_dedicated_infrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDenseScann">put_dense_scann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDedicatedInfrastructure">reset_dedicated_infrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDenseScann">reset_dense_scann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDistanceMetric">reset_distance_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetFilterFields">reset_filter_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetStoreFields">reset_store_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dedicated_infrastructure` <a name="put_dedicated_infrastructure" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDedicatedInfrastructure"></a>

```python
def put_dedicated_infrastructure(
  autoscaling_spec: VectorSearchIndexDedicatedInfrastructureAutoscalingSpec = None,
  mode: str = None
) -> None
```

###### `autoscaling_spec`<sup>Optional</sup> <a name="autoscaling_spec" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDedicatedInfrastructure.parameter.autoscalingSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#autoscaling_spec VectorSearchIndex#autoscaling_spec}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDedicatedInfrastructure.parameter.mode"></a>

- *Type:* str

Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#mode VectorSearchIndex#mode}

---

##### `put_dense_scann` <a name="put_dense_scann" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDenseScann"></a>

```python
def put_dense_scann(
  feature_norm_type: str = None
) -> None
```

###### `feature_norm_type`<sup>Optional</sup> <a name="feature_norm_type" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDenseScann.parameter.featureNormType"></a>

- *Type:* str

Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#feature_norm_type VectorSearchIndex#feature_norm_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#create VectorSearchIndex#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#delete VectorSearchIndex#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#update VectorSearchIndex#update}.

---

##### `reset_dedicated_infrastructure` <a name="reset_dedicated_infrastructure" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDedicatedInfrastructure"></a>

```python
def reset_dedicated_infrastructure() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_dense_scann` <a name="reset_dense_scann" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDenseScann"></a>

```python
def reset_dense_scann() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_distance_metric` <a name="reset_distance_metric" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDistanceMetric"></a>

```python
def reset_distance_metric() -> None
```

##### `reset_filter_fields` <a name="reset_filter_fields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetFilterFields"></a>

```python
def reset_filter_fields() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_store_fields` <a name="reset_store_fields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetStoreFields"></a>

```python
def reset_store_fields() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VectorSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isConstruct"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformElement"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformResource"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndex.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndex.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VectorSearchIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VectorSearchIndex to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VectorSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dedicatedInfrastructure">dedicated_infrastructure</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference">VectorSearchIndexDedicatedInfrastructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.denseScann">dense_scann</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference">VectorSearchIndexDenseScannOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dedicatedInfrastructureInput">dedicated_infrastructure_input</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.denseScannInput">dense_scann_input</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.distanceMetricInput">distance_metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.filterFieldsInput">filter_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexFieldInput">index_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexIdInput">index_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.storeFieldsInput">store_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.distanceMetric">distance_metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.filterFields">filter_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexField">index_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.storeFields">store_fields</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dedicated_infrastructure`<sup>Required</sup> <a name="dedicated_infrastructure" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dedicatedInfrastructure"></a>

```python
dedicated_infrastructure: VectorSearchIndexDedicatedInfrastructureOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference">VectorSearchIndexDedicatedInfrastructureOutputReference</a>

---

##### `dense_scann`<sup>Required</sup> <a name="dense_scann" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.denseScann"></a>

```python
dense_scann: VectorSearchIndexDenseScannOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference">VectorSearchIndexDenseScannOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.timeouts"></a>

```python
timeouts: VectorSearchIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `dedicated_infrastructure_input`<sup>Optional</sup> <a name="dedicated_infrastructure_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dedicatedInfrastructureInput"></a>

```python
dedicated_infrastructure_input: VectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `dense_scann_input`<sup>Optional</sup> <a name="dense_scann_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.denseScannInput"></a>

```python
dense_scann_input: VectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `distance_metric_input`<sup>Optional</sup> <a name="distance_metric_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.distanceMetricInput"></a>

```python
distance_metric_input: str
```

- *Type:* str

---

##### `filter_fields_input`<sup>Optional</sup> <a name="filter_fields_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.filterFieldsInput"></a>

```python
filter_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_field_input`<sup>Optional</sup> <a name="index_field_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexFieldInput"></a>

```python
index_field_input: str
```

- *Type:* str

---

##### `index_id_input`<sup>Optional</sup> <a name="index_id_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexIdInput"></a>

```python
index_id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `store_fields_input`<sup>Optional</sup> <a name="store_fields_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.storeFieldsInput"></a>

```python
store_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VectorSearchIndexTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `distance_metric`<sup>Required</sup> <a name="distance_metric" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.distanceMetric"></a>

```python
distance_metric: str
```

- *Type:* str

---

##### `filter_fields`<sup>Required</sup> <a name="filter_fields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.filterFields"></a>

```python
filter_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_field`<sup>Required</sup> <a name="index_field" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexField"></a>

```python
index_field: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `store_fields`<sup>Required</sup> <a name="store_fields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.storeFields"></a>

```python
store_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchIndexConfig <a name="VectorSearchIndexConfig" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.Initializer"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndexConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  index_field: str,
  index_id: str,
  location: str,
  dedicated_infrastructure: VectorSearchIndexDedicatedInfrastructure = None,
  deletion_policy: str = None,
  dense_scann: VectorSearchIndexDenseScann = None,
  description: str = None,
  display_name: str = None,
  distance_metric: str = None,
  filter_fields: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  store_fields: typing.List[str] = None,
  timeouts: VectorSearchIndexTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.indexField">index_field</a></code> | <code>str</code> | The collection schema field to index. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.indexId">index_id</a></code> | <code>str</code> | ID of the Index to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.dedicatedInfrastructure">dedicated_infrastructure</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a></code> | dedicated_infrastructure block. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.denseScann">dense_scann</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a></code> | dense_scann block. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.description">description</a></code> | <code>str</code> | User-specified description of the index. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.displayName">display_name</a></code> | <code>str</code> | User-specified display name of the index. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.distanceMetric">distance_metric</a></code> | <code>str</code> | Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"]. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.filterFields">filter_fields</a></code> | <code>typing.List[str]</code> | The fields to push into the index to enable fast ANN inline filtering. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#id VectorSearchIndex#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#project VectorSearchIndex#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.storeFields">store_fields</a></code> | <code>typing.List[str]</code> | The fields to push into the index to enable inline data retrieval. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#collection_id VectorSearchIndex#collection_id}

---

##### `index_field`<sup>Required</sup> <a name="index_field" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.indexField"></a>

```python
index_field: str
```

- *Type:* str

The collection schema field to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#index_field VectorSearchIndex#index_field}

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

ID of the Index to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#index_id VectorSearchIndex#index_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#location VectorSearchIndex#location}

---

##### `dedicated_infrastructure`<sup>Optional</sup> <a name="dedicated_infrastructure" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.dedicatedInfrastructure"></a>

```python
dedicated_infrastructure: VectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a>

dedicated_infrastructure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#dedicated_infrastructure VectorSearchIndex#dedicated_infrastructure}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#deletion_policy VectorSearchIndex#deletion_policy}

---

##### `dense_scann`<sup>Optional</sup> <a name="dense_scann" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.denseScann"></a>

```python
dense_scann: VectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a>

dense_scann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#dense_scann VectorSearchIndex#dense_scann}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-specified description of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#description VectorSearchIndex#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-specified display name of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#display_name VectorSearchIndex#display_name}

---

##### `distance_metric`<sup>Optional</sup> <a name="distance_metric" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.distanceMetric"></a>

```python
distance_metric: str
```

- *Type:* str

Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#distance_metric VectorSearchIndex#distance_metric}

---

##### `filter_fields`<sup>Optional</sup> <a name="filter_fields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.filterFields"></a>

```python
filter_fields: typing.List[str]
```

- *Type:* typing.List[str]

The fields to push into the index to enable fast ANN inline filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#filter_fields VectorSearchIndex#filter_fields}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#id VectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#labels VectorSearchIndex#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#project VectorSearchIndex#project}.

---

##### `store_fields`<sup>Optional</sup> <a name="store_fields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.storeFields"></a>

```python
store_fields: typing.List[str]
```

- *Type:* typing.List[str]

The fields to push into the index to enable inline data retrieval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#store_fields VectorSearchIndex#store_fields}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts"></a>

```python
timeouts: VectorSearchIndexTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#timeouts VectorSearchIndex#timeouts}

---

### VectorSearchIndexDedicatedInfrastructure <a name="VectorSearchIndexDedicatedInfrastructure" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure.Initializer"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure(
  autoscaling_spec: VectorSearchIndexDedicatedInfrastructureAutoscalingSpec = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec">autoscaling_spec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | autoscaling_spec block. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure.property.mode">mode</a></code> | <code>str</code> | Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"]. |

---

##### `autoscaling_spec`<sup>Optional</sup> <a name="autoscaling_spec" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec"></a>

```python
autoscaling_spec: VectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#autoscaling_spec VectorSearchIndex#autoscaling_spec}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure.property.mode"></a>

```python
mode: str
```

- *Type:* str

Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#mode VectorSearchIndex#mode}

---

### VectorSearchIndexDedicatedInfrastructureAutoscalingSpec <a name="VectorSearchIndexDedicatedInfrastructureAutoscalingSpec" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec.Initializer"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec(
  max_replica_count: typing.Union[int, float] = None,
  min_replica_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of replicas. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of replicas. |

---

##### `max_replica_count`<sup>Optional</sup> <a name="max_replica_count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount"></a>

```python
max_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of replicas.

Must be >= 'min_replica_count'
and <= '1000'. If not set or set to '0', defaults to the greater
of 'min_replica_count' and '2' (or '5' for the v1beta version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#max_replica_count VectorSearchIndex#max_replica_count}

---

##### `min_replica_count`<sup>Optional</sup> <a name="min_replica_count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount"></a>

```python
min_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of replicas.

If not set or set to '0', defaults
to '2'. Must be >= '1' and <= '1000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#min_replica_count VectorSearchIndex#min_replica_count}

---

### VectorSearchIndexDenseScann <a name="VectorSearchIndexDenseScann" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann.Initializer"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndexDenseScann(
  feature_norm_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann.property.featureNormType">feature_norm_type</a></code> | <code>str</code> | Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"]. |

---

##### `feature_norm_type`<sup>Optional</sup> <a name="feature_norm_type" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann.property.featureNormType"></a>

```python
feature_norm_type: str
```

- *Type:* str

Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#feature_norm_type VectorSearchIndex#feature_norm_type}

---

### VectorSearchIndexTimeouts <a name="VectorSearchIndexTimeouts" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.Initializer"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndexTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#create VectorSearchIndex#create}. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#delete VectorSearchIndex#delete}. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#update VectorSearchIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#create VectorSearchIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#delete VectorSearchIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#update VectorSearchIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference <a name="VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount">reset_max_replica_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount">reset_min_replica_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_replica_count` <a name="reset_max_replica_count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount"></a>

```python
def reset_max_replica_count() -> None
```

##### `reset_min_replica_count` <a name="reset_min_replica_count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount"></a>

```python
def reset_min_replica_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput">max_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput">min_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_replica_count_input`<sup>Optional</sup> <a name="max_replica_count_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput"></a>

```python
max_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replica_count_input`<sup>Optional</sup> <a name="min_replica_count_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput"></a>

```python
min_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_replica_count`<sup>Required</sup> <a name="max_replica_count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount"></a>

```python
max_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount"></a>

```python
min_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---


### VectorSearchIndexDedicatedInfrastructureOutputReference <a name="VectorSearchIndexDedicatedInfrastructureOutputReference" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec">put_autoscaling_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec">reset_autoscaling_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_spec` <a name="put_autoscaling_spec" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec"></a>

```python
def put_autoscaling_spec(
  max_replica_count: typing.Union[int, float] = None,
  min_replica_count: typing.Union[int, float] = None
) -> None
```

###### `max_replica_count`<sup>Optional</sup> <a name="max_replica_count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec.parameter.maxReplicaCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of replicas.

Must be >= 'min_replica_count'
and <= '1000'. If not set or set to '0', defaults to the greater
of 'min_replica_count' and '2' (or '5' for the v1beta version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#max_replica_count VectorSearchIndex#max_replica_count}

---

###### `min_replica_count`<sup>Optional</sup> <a name="min_replica_count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec.parameter.minReplicaCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of replicas.

If not set or set to '0', defaults
to '2'. Must be >= '1' and <= '1000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_index#min_replica_count VectorSearchIndex#min_replica_count}

---

##### `reset_autoscaling_spec` <a name="reset_autoscaling_spec" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec"></a>

```python
def reset_autoscaling_spec() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec">autoscaling_spec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput">autoscaling_spec_input</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_spec`<sup>Required</sup> <a name="autoscaling_spec" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec"></a>

```python
autoscaling_spec: VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a>

---

##### `autoscaling_spec_input`<sup>Optional</sup> <a name="autoscaling_spec_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput"></a>

```python
autoscaling_spec_input: VectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a>

---


### VectorSearchIndexDenseScannOutputReference <a name="VectorSearchIndexDenseScannOutputReference" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndexDenseScannOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.resetFeatureNormType">reset_feature_norm_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_feature_norm_type` <a name="reset_feature_norm_type" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.resetFeatureNormType"></a>

```python
def reset_feature_norm_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput">feature_norm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.featureNormType">feature_norm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_norm_type_input`<sup>Optional</sup> <a name="feature_norm_type_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput"></a>

```python
feature_norm_type_input: str
```

- *Type:* str

---

##### `feature_norm_type`<sup>Required</sup> <a name="feature_norm_type" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.featureNormType"></a>

```python
feature_norm_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a>

---


### VectorSearchIndexTimeoutsOutputReference <a name="VectorSearchIndexTimeoutsOutputReference" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_index

vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VectorSearchIndexTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

---



