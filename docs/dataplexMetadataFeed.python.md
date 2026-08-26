# `dataplexMetadataFeed` Submodule <a name="`dataplexMetadataFeed` Submodule" id="@cdktn/provider-google.dataplexMetadataFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexMetadataFeed <a name="DataplexMetadataFeed" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed google_dataplex_metadata_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeed(
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
  metadata_feed_id: str,
  scope: DataplexMetadataFeedScope,
  deletion_policy: str = None,
  filters: DataplexMetadataFeedFilters = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  pubsub_topic: str = None,
  timeouts: DataplexMetadataFeedTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.metadataFeedId">metadata_feed_id</a></code> | <code>str</code> | The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The pubsub topic that you want the metadata feed messages to publish to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#location DataplexMetadataFeed#location}

---

##### `metadata_feed_id`<sup>Required</sup> <a name="metadata_feed_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.metadataFeedId"></a>

- *Type:* str

The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#metadata_feed_id DataplexMetadataFeed#metadata_feed_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#scope DataplexMetadataFeed#scope}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#deletion_policy DataplexMetadataFeed#deletion_policy}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#filters DataplexMetadataFeed#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#labels DataplexMetadataFeed#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}.

---

##### `pubsub_topic`<sup>Optional</sup> <a name="pubsub_topic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.pubsubTopic"></a>

- *Type:* str

The pubsub topic that you want the metadata feed messages to publish to.

Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#pubsub_topic DataplexMetadataFeed#pubsub_topic}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#timeouts DataplexMetadataFeed#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetPubsubTopic">reset_pubsub_topic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filters` <a name="put_filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters"></a>

```python
def put_filters(
  aspect_types: typing.List[str] = None,
  change_types: typing.List[str] = None,
  entry_types: typing.List[str] = None
) -> None
```

###### `aspect_types`<sup>Optional</sup> <a name="aspect_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters.parameter.aspectTypes"></a>

- *Type:* typing.List[str]

The aspect types that you want to listen to.

Depending on how the aspect is attached to the entry, in the format: projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#aspect_types DataplexMetadataFeed#aspect_types}

---

###### `change_types`<sup>Optional</sup> <a name="change_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters.parameter.changeTypes"></a>

- *Type:* typing.List[str]

The type of change that you want to listen to. If not specified, all changes are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#change_types DataplexMetadataFeed#change_types}

---

###### `entry_types`<sup>Optional</sup> <a name="entry_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters.parameter.entryTypes"></a>

- *Type:* typing.List[str]

The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}.

Only entries that belong to the specified entry types are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#entry_types DataplexMetadataFeed#entry_types}

---

##### `put_scope` <a name="put_scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope"></a>

```python
def put_scope(
  entry_groups: typing.List[str] = None,
  organization_level: bool | IResolvable = None,
  projects: typing.List[str] = None
) -> None
```

###### `entry_groups`<sup>Optional</sup> <a name="entry_groups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope.parameter.entryGroups"></a>

- *Type:* typing.List[str]

The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#entry_groups DataplexMetadataFeed#entry_groups}

---

###### `organization_level`<sup>Optional</sup> <a name="organization_level" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope.parameter.organizationLevel"></a>

- *Type:* bool | cdktn.IResolvable

Whether the metadata feed is at the organization-level.

If true, all changes happened to the entries in the same organization as the feed are published.
If false, you must specify a list of projects or a list of entry groups whose entries you want to listen to.The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#organization_level DataplexMetadataFeed#organization_level}

---

###### `projects`<sup>Optional</sup> <a name="projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope.parameter.projects"></a>

- *Type:* typing.List[str]

The projects whose entries you want to listen to.

Must be in the same organization as the feed. Must be in the format: projects/{project_id_or_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#projects DataplexMetadataFeed#projects}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_pubsub_topic` <a name="reset_pubsub_topic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetPubsubTopic"></a>

```python
def reset_pubsub_topic() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataplexMetadataFeed resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeed.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeed.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeed.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeed.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataplexMetadataFeed resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataplexMetadataFeed to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataplexMetadataFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataplexMetadataFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference">DataplexMetadataFeedFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference">DataplexMetadataFeedScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference">DataplexMetadataFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filtersInput">filters_input</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedIdInput">metadata_feed_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scopeInput">scope_input</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedId">metadata_feed_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filters"></a>

```python
filters: DataplexMetadataFeedFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference">DataplexMetadataFeedFiltersOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scope"></a>

```python
scope: DataplexMetadataFeedScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference">DataplexMetadataFeedScopeOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeouts"></a>

```python
timeouts: DataplexMetadataFeedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference">DataplexMetadataFeedTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filtersInput"></a>

```python
filters_input: DataplexMetadataFeedFilters
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metadata_feed_id_input`<sup>Optional</sup> <a name="metadata_feed_id_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedIdInput"></a>

```python
metadata_feed_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scopeInput"></a>

```python
scope_input: DataplexMetadataFeedScope
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataplexMetadataFeedTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `metadata_feed_id`<sup>Required</sup> <a name="metadata_feed_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedId"></a>

```python
metadata_feed_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexMetadataFeedConfig <a name="DataplexMetadataFeedConfig" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.Initializer"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeedConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  metadata_feed_id: str,
  scope: DataplexMetadataFeedScope,
  deletion_policy: str = None,
  filters: DataplexMetadataFeedFilters = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  pubsub_topic: str = None,
  timeouts: DataplexMetadataFeedTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.metadataFeedId">metadata_feed_id</a></code> | <code>str</code> | The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The pubsub topic that you want the metadata feed messages to publish to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#location DataplexMetadataFeed#location}

---

##### `metadata_feed_id`<sup>Required</sup> <a name="metadata_feed_id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.metadataFeedId"></a>

```python
metadata_feed_id: str
```

- *Type:* str

The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#metadata_feed_id DataplexMetadataFeed#metadata_feed_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.scope"></a>

```python
scope: DataplexMetadataFeedScope
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#scope DataplexMetadataFeed#scope}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#deletion_policy DataplexMetadataFeed#deletion_policy}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.filters"></a>

```python
filters: DataplexMetadataFeedFilters
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#filters DataplexMetadataFeed#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#labels DataplexMetadataFeed#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}.

---

##### `pubsub_topic`<sup>Optional</sup> <a name="pubsub_topic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The pubsub topic that you want the metadata feed messages to publish to.

Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#pubsub_topic DataplexMetadataFeed#pubsub_topic}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.timeouts"></a>

```python
timeouts: DataplexMetadataFeedTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#timeouts DataplexMetadataFeed#timeouts}

---

### DataplexMetadataFeedFilters <a name="DataplexMetadataFeedFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.Initializer"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeedFilters(
  aspect_types: typing.List[str] = None,
  change_types: typing.List[str] = None,
  entry_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.aspectTypes">aspect_types</a></code> | <code>typing.List[str]</code> | The aspect types that you want to listen to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.changeTypes">change_types</a></code> | <code>typing.List[str]</code> | The type of change that you want to listen to. If not specified, all changes are published. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.entryTypes">entry_types</a></code> | <code>typing.List[str]</code> | The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}. |

---

##### `aspect_types`<sup>Optional</sup> <a name="aspect_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.aspectTypes"></a>

```python
aspect_types: typing.List[str]
```

- *Type:* typing.List[str]

The aspect types that you want to listen to.

Depending on how the aspect is attached to the entry, in the format: projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#aspect_types DataplexMetadataFeed#aspect_types}

---

##### `change_types`<sup>Optional</sup> <a name="change_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.changeTypes"></a>

```python
change_types: typing.List[str]
```

- *Type:* typing.List[str]

The type of change that you want to listen to. If not specified, all changes are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#change_types DataplexMetadataFeed#change_types}

---

##### `entry_types`<sup>Optional</sup> <a name="entry_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.entryTypes"></a>

```python
entry_types: typing.List[str]
```

- *Type:* typing.List[str]

The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}.

Only entries that belong to the specified entry types are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#entry_types DataplexMetadataFeed#entry_types}

---

### DataplexMetadataFeedScope <a name="DataplexMetadataFeedScope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.Initializer"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeedScope(
  entry_groups: typing.List[str] = None,
  organization_level: bool | IResolvable = None,
  projects: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.entryGroups">entry_groups</a></code> | <code>typing.List[str]</code> | The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.organizationLevel">organization_level</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the metadata feed is at the organization-level. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.projects">projects</a></code> | <code>typing.List[str]</code> | The projects whose entries you want to listen to. |

---

##### `entry_groups`<sup>Optional</sup> <a name="entry_groups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.entryGroups"></a>

```python
entry_groups: typing.List[str]
```

- *Type:* typing.List[str]

The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#entry_groups DataplexMetadataFeed#entry_groups}

---

##### `organization_level`<sup>Optional</sup> <a name="organization_level" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.organizationLevel"></a>

```python
organization_level: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the metadata feed is at the organization-level.

If true, all changes happened to the entries in the same organization as the feed are published.
If false, you must specify a list of projects or a list of entry groups whose entries you want to listen to.The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#organization_level DataplexMetadataFeed#organization_level}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.projects"></a>

```python
projects: typing.List[str]
```

- *Type:* typing.List[str]

The projects whose entries you want to listen to.

Must be in the same organization as the feed. Must be in the format: projects/{project_id_or_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#projects DataplexMetadataFeed#projects}

---

### DataplexMetadataFeedTimeouts <a name="DataplexMetadataFeedTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.Initializer"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeedTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexMetadataFeedFiltersOutputReference <a name="DataplexMetadataFeedFiltersOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetAspectTypes">reset_aspect_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetChangeTypes">reset_change_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetEntryTypes">reset_entry_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aspect_types` <a name="reset_aspect_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetAspectTypes"></a>

```python
def reset_aspect_types() -> None
```

##### `reset_change_types` <a name="reset_change_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetChangeTypes"></a>

```python
def reset_change_types() -> None
```

##### `reset_entry_types` <a name="reset_entry_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetEntryTypes"></a>

```python
def reset_entry_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput">aspect_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypesInput">change_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypesInput">entry_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypes">aspect_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypes">change_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypes">entry_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aspect_types_input`<sup>Optional</sup> <a name="aspect_types_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput"></a>

```python
aspect_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `change_types_input`<sup>Optional</sup> <a name="change_types_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypesInput"></a>

```python
change_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entry_types_input`<sup>Optional</sup> <a name="entry_types_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypesInput"></a>

```python
entry_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `aspect_types`<sup>Required</sup> <a name="aspect_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypes"></a>

```python
aspect_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `change_types`<sup>Required</sup> <a name="change_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypes"></a>

```python
change_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entry_types`<sup>Required</sup> <a name="entry_types" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypes"></a>

```python
entry_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataplexMetadataFeedFilters
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---


### DataplexMetadataFeedScopeOutputReference <a name="DataplexMetadataFeedScopeOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetEntryGroups">reset_entry_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetOrganizationLevel">reset_organization_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetProjects">reset_projects</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entry_groups` <a name="reset_entry_groups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetEntryGroups"></a>

```python
def reset_entry_groups() -> None
```

##### `reset_organization_level` <a name="reset_organization_level" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetOrganizationLevel"></a>

```python
def reset_organization_level() -> None
```

##### `reset_projects` <a name="reset_projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetProjects"></a>

```python
def reset_projects() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroupsInput">entry_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevelInput">organization_level_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projectsInput">projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroups">entry_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevel">organization_level</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projects">projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entry_groups_input`<sup>Optional</sup> <a name="entry_groups_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroupsInput"></a>

```python
entry_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_level_input`<sup>Optional</sup> <a name="organization_level_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevelInput"></a>

```python
organization_level_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `projects_input`<sup>Optional</sup> <a name="projects_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projectsInput"></a>

```python
projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entry_groups`<sup>Required</sup> <a name="entry_groups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroups"></a>

```python
entry_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_level`<sup>Required</sup> <a name="organization_level" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevel"></a>

```python
organization_level: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projects"></a>

```python
projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.internalValue"></a>

```python
internal_value: DataplexMetadataFeedScope
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---


### DataplexMetadataFeedTimeoutsOutputReference <a name="DataplexMetadataFeedTimeoutsOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_metadata_feed

dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataplexMetadataFeedTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---



