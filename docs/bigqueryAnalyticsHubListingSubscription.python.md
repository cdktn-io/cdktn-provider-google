# `bigqueryAnalyticsHubListingSubscription` Submodule <a name="`bigqueryAnalyticsHubListingSubscription` Submodule" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubListingSubscription <a name="BigqueryAnalyticsHubListingSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription google_bigquery_analytics_hub_listing_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_exchange_id: str,
  listing_id: str,
  location: str,
  deletion_policy: str = None,
  destination_dataset: BigqueryAnalyticsHubListingSubscriptionDestinationDataset = None,
  destination_pubsub_subscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription = None,
  id: str = None,
  project: str = None,
  timeouts: BigqueryAnalyticsHubListingSubscriptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.listingId">listing_id</a></code> | <code>str</code> | The ID of the listing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location of the data exchange. Distinct from the location of the destination data set. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.destinationDataset">destination_dataset</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.destinationPubsubSubscription">destination_pubsub_subscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | destination_pubsub_subscription block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#id BigqueryAnalyticsHubListingSubscription#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project BigqueryAnalyticsHubListingSubscription#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.dataExchangeId"></a>

- *Type:* str

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#data_exchange_id BigqueryAnalyticsHubListingSubscription#data_exchange_id}

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.listingId"></a>

- *Type:* str

The ID of the listing.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#listing_id BigqueryAnalyticsHubListingSubscription#listing_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.location"></a>

- *Type:* str

The name of the location of the data exchange. Distinct from the location of the destination data set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#location BigqueryAnalyticsHubListingSubscription#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#deletion_policy BigqueryAnalyticsHubListingSubscription#deletion_policy}

---

##### `destination_dataset`<sup>Optional</sup> <a name="destination_dataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.destinationDataset"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#destination_dataset BigqueryAnalyticsHubListingSubscription#destination_dataset}

---

##### `destination_pubsub_subscription`<sup>Optional</sup> <a name="destination_pubsub_subscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.destinationPubsubSubscription"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

destination_pubsub_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#destination_pubsub_subscription BigqueryAnalyticsHubListingSubscription#destination_pubsub_subscription}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#id BigqueryAnalyticsHubListingSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project BigqueryAnalyticsHubListingSubscription#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#timeouts BigqueryAnalyticsHubListingSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset">put_destination_dataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription">put_destination_pubsub_subscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationDataset">reset_destination_dataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationPubsubSubscription">reset_destination_pubsub_subscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_dataset` <a name="put_destination_dataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset"></a>

```python
def put_destination_dataset(
  dataset_reference: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference,
  location: str,
  description: str = None,
  friendly_name: str = None,
  labels: typing.Mapping[str] = None,
  replica_locations: typing.List[str] = None
) -> None
```

###### `dataset_reference`<sup>Required</sup> <a name="dataset_reference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset.parameter.datasetReference"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dataset_reference BigqueryAnalyticsHubListingSubscription#dataset_reference}

---

###### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset.parameter.location"></a>

- *Type:* str

The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#location BigqueryAnalyticsHubListingSubscription#location}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset.parameter.description"></a>

- *Type:* str

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#description BigqueryAnalyticsHubListingSubscription#description}

---

###### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset.parameter.friendlyName"></a>

- *Type:* str

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#friendly_name BigqueryAnalyticsHubListingSubscription#friendly_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#labels BigqueryAnalyticsHubListingSubscription#labels}

---

###### `replica_locations`<sup>Optional</sup> <a name="replica_locations" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset.parameter.replicaLocations"></a>

- *Type:* typing.List[str]

List of regions where the subscriber wants dataset replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#replica_locations BigqueryAnalyticsHubListingSubscription#replica_locations}

---

##### `put_destination_pubsub_subscription` <a name="put_destination_pubsub_subscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription"></a>

```python
def put_destination_pubsub_subscription(
  pubsub_subscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription
) -> None
```

###### `pubsub_subscription`<sup>Required</sup> <a name="pubsub_subscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription.parameter.pubsubSubscription"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

pubsub_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#pubsub_subscription BigqueryAnalyticsHubListingSubscription#pubsub_subscription}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#create BigqueryAnalyticsHubListingSubscription#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#delete BigqueryAnalyticsHubListingSubscription#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_destination_dataset` <a name="reset_destination_dataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationDataset"></a>

```python
def reset_destination_dataset() -> None
```

##### `reset_destination_pubsub_subscription` <a name="reset_destination_pubsub_subscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationPubsubSubscription"></a>

```python
def reset_destination_pubsub_subscription() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BigqueryAnalyticsHubListingSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isConstruct"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformElement"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformResource"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BigqueryAnalyticsHubListingSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryAnalyticsHubListingSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryAnalyticsHubListingSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubListingSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.commercialInfo">commercial_info</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDataset">destination_dataset</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscription">destination_pubsub_subscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lastModifyTime">last_modify_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedDatasetMap">linked_dataset_map</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedResources">linked_resources</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList">BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.logLinkedDatasetQueryUserEmail">log_linked_dataset_query_user_email</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationDisplayName">organization_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriberContact">subscriber_contact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference">BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeIdInput">data_exchange_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDatasetInput">destination_dataset_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscriptionInput">destination_pubsub_subscription_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingIdInput">listing_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `commercial_info`<sup>Required</sup> <a name="commercial_info" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.commercialInfo"></a>

```python
commercial_info: BigqueryAnalyticsHubListingSubscriptionCommercialInfoList
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoList</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `destination_dataset`<sup>Required</sup> <a name="destination_dataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDataset"></a>

```python
destination_dataset: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference</a>

---

##### `destination_pubsub_subscription`<sup>Required</sup> <a name="destination_pubsub_subscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscription"></a>

```python
destination_pubsub_subscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference</a>

---

##### `last_modify_time`<sup>Required</sup> <a name="last_modify_time" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lastModifyTime"></a>

```python
last_modify_time: str
```

- *Type:* str

---

##### `linked_dataset_map`<sup>Required</sup> <a name="linked_dataset_map" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedDatasetMap"></a>

```python
linked_dataset_map: BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList</a>

---

##### `linked_resources`<sup>Required</sup> <a name="linked_resources" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedResources"></a>

```python
linked_resources: BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList">BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList</a>

---

##### `log_linked_dataset_query_user_email`<sup>Required</sup> <a name="log_linked_dataset_query_user_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.logLinkedDatasetQueryUserEmail"></a>

```python
log_linked_dataset_query_user_email: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization_display_name`<sup>Required</sup> <a name="organization_display_name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationDisplayName"></a>

```python
organization_display_name: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subscriber_contact`<sup>Required</sup> <a name="subscriber_contact" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriberContact"></a>

```python
subscriber_contact: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeouts"></a>

```python
timeouts: BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference">BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference</a>

---

##### `data_exchange_id_input`<sup>Optional</sup> <a name="data_exchange_id_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeIdInput"></a>

```python
data_exchange_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `destination_dataset_input`<sup>Optional</sup> <a name="destination_dataset_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDatasetInput"></a>

```python
destination_dataset_input: BigqueryAnalyticsHubListingSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

---

##### `destination_pubsub_subscription_input`<sup>Optional</sup> <a name="destination_pubsub_subscription_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscriptionInput"></a>

```python
destination_pubsub_subscription_input: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_id_input`<sup>Optional</sup> <a name="listing_id_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingIdInput"></a>

```python
listing_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BigqueryAnalyticsHubListingSubscriptionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a>

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubListingSubscriptionCommercialInfo <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfo" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo()
```


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace()
```


### BigqueryAnalyticsHubListingSubscriptionConfig <a name="BigqueryAnalyticsHubListingSubscriptionConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_exchange_id: str,
  listing_id: str,
  location: str,
  deletion_policy: str = None,
  destination_dataset: BigqueryAnalyticsHubListingSubscriptionDestinationDataset = None,
  destination_pubsub_subscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription = None,
  id: str = None,
  project: str = None,
  timeouts: BigqueryAnalyticsHubListingSubscriptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.listingId">listing_id</a></code> | <code>str</code> | The ID of the listing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.location">location</a></code> | <code>str</code> | The name of the location of the data exchange. Distinct from the location of the destination data set. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationDataset">destination_dataset</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationPubsubSubscription">destination_pubsub_subscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | destination_pubsub_subscription block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#id BigqueryAnalyticsHubListingSubscription#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project BigqueryAnalyticsHubListingSubscription#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#data_exchange_id BigqueryAnalyticsHubListingSubscription#data_exchange_id}

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

The ID of the listing.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#listing_id BigqueryAnalyticsHubListingSubscription#listing_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location of the data exchange. Distinct from the location of the destination data set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#location BigqueryAnalyticsHubListingSubscription#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#deletion_policy BigqueryAnalyticsHubListingSubscription#deletion_policy}

---

##### `destination_dataset`<sup>Optional</sup> <a name="destination_dataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationDataset"></a>

```python
destination_dataset: BigqueryAnalyticsHubListingSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#destination_dataset BigqueryAnalyticsHubListingSubscription#destination_dataset}

---

##### `destination_pubsub_subscription`<sup>Optional</sup> <a name="destination_pubsub_subscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationPubsubSubscription"></a>

```python
destination_pubsub_subscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

destination_pubsub_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#destination_pubsub_subscription BigqueryAnalyticsHubListingSubscription#destination_pubsub_subscription}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#id BigqueryAnalyticsHubListingSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project BigqueryAnalyticsHubListingSubscription#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.timeouts"></a>

```python
timeouts: BigqueryAnalyticsHubListingSubscriptionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#timeouts BigqueryAnalyticsHubListingSubscription#timeouts}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationDataset <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset(
  dataset_reference: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference,
  location: str,
  description: str = None,
  friendly_name: str = None,
  labels: typing.Mapping[str] = None,
  replica_locations: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.datasetReference">dataset_reference</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | dataset_reference block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.location">location</a></code> | <code>str</code> | The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.description">description</a></code> | <code>str</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this dataset. You can use these to organize and group your datasets. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.replicaLocations">replica_locations</a></code> | <code>typing.List[str]</code> | List of regions where the subscriber wants dataset replicas. |

---

##### `dataset_reference`<sup>Required</sup> <a name="dataset_reference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.datasetReference"></a>

```python
dataset_reference: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dataset_reference BigqueryAnalyticsHubListingSubscription#dataset_reference}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#location BigqueryAnalyticsHubListingSubscription#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.description"></a>

```python
description: str
```

- *Type:* str

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#description BigqueryAnalyticsHubListingSubscription#description}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#friendly_name BigqueryAnalyticsHubListingSubscription#friendly_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#labels BigqueryAnalyticsHubListingSubscription#labels}

---

##### `replica_locations`<sup>Optional</sup> <a name="replica_locations" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.replicaLocations"></a>

```python
replica_locations: typing.List[str]
```

- *Type:* typing.List[str]

List of regions where the subscriber wants dataset replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#replica_locations BigqueryAnalyticsHubListingSubscription#replica_locations}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference(
  dataset_id: str,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.datasetId">dataset_id</a></code> | <code>str</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this dataset. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

A unique ID for this dataset, without the project name.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dataset_id BigqueryAnalyticsHubListingSubscription#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project_id BigqueryAnalyticsHubListingSubscription#project_id}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription(
  pubsub_subscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.property.pubsubSubscription">pubsub_subscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | pubsub_subscription block. |

---

##### `pubsub_subscription`<sup>Required</sup> <a name="pubsub_subscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.property.pubsubSubscription"></a>

```python
pubsub_subscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

pubsub_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#pubsub_subscription BigqueryAnalyticsHubListingSubscription#pubsub_subscription}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription(
  name: str,
  ack_deadline_seconds: typing.Union[int, float] = None,
  bigquery_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig = None,
  cloud_storage_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig = None,
  dead_letter_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy = None,
  detached: bool | IResolvable = None,
  enable_exactly_once_delivery: bool | IResolvable = None,
  enable_message_ordering: bool | IResolvable = None,
  expiration_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy = None,
  filter: str = None,
  labels: typing.Mapping[str] = None,
  message_retention_duration: str = None,
  push_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig = None,
  retain_acked_messages: bool | IResolvable = None,
  retry_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.name">name</a></code> | <code>str</code> | Name of the subscription. Format is 'projects/{project}/subscriptions/{sub}'. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.ackDeadlineSeconds">ack_deadline_seconds</a></code> | <code>typing.Union[int, float]</code> | The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.bigqueryConfig">bigquery_config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.cloudStorageConfig">cloud_storage_config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.deadLetterPolicy">dead_letter_policy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.detached">detached</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the subscription is detached from its topic. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableExactlyOnceDelivery">enable_exactly_once_delivery</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of 'message_id' on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableMessageOrdering">enable_message_ordering</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, messages published with the same 'ordering_key' in 'PubsubMessage' will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.expirationPolicy">expiration_policy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.filter">filter</a></code> | <code>str</code> | An expression written in the Pub/Sub filter language. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels). |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.messageRetentionDuration">message_retention_duration</a></code> | <code>str</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.pushConfig">push_config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retainAckedMessages">retain_acked_messages</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the subscription. Format is 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#name BigqueryAnalyticsHubListingSubscription#name}

---

##### `ack_deadline_seconds`<sup>Optional</sup> <a name="ack_deadline_seconds" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.ackDeadlineSeconds"></a>

```python
ack_deadline_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message.

In the interval after the message is delivered
and before it is acknowledged, it is considered to be outstanding. During that time period, the
message will not be redelivered (on a best-effort basis). For pull subscriptions, this value is
used as the initial value for the ack deadline. To override this value for a given message, call
'ModifyAckDeadline' with the corresponding 'ack_id' if using non-streaming pull or send the
'ack_id' in a 'StreamingModifyAckDeadlineRequest' if using streaming pull. The minimum custom
deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600
seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used. For push
delivery, this value is also used to set the request timeout for the call to the push endpoint.
If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver
the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#ack_deadline_seconds BigqueryAnalyticsHubListingSubscription#ack_deadline_seconds}

---

##### `bigquery_config`<sup>Optional</sup> <a name="bigquery_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.bigqueryConfig"></a>

```python
bigquery_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#bigquery_config BigqueryAnalyticsHubListingSubscription#bigquery_config}

---

##### `cloud_storage_config`<sup>Optional</sup> <a name="cloud_storage_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.cloudStorageConfig"></a>

```python
cloud_storage_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#cloud_storage_config BigqueryAnalyticsHubListingSubscription#cloud_storage_config}

---

##### `dead_letter_policy`<sup>Optional</sup> <a name="dead_letter_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.deadLetterPolicy"></a>

```python
dead_letter_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dead_letter_policy BigqueryAnalyticsHubListingSubscription#dead_letter_policy}

---

##### `detached`<sup>Optional</sup> <a name="detached" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.detached"></a>

```python
detached: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the subscription is detached from its topic.

Detached subscriptions don't
receive messages from their topic and don't retain any backlog. 'Pull' and 'StreamingPull'
requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes
to the endpoint will not be made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#detached BigqueryAnalyticsHubListingSubscription#detached}

---

##### `enable_exactly_once_delivery`<sup>Optional</sup> <a name="enable_exactly_once_delivery" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableExactlyOnceDelivery"></a>

```python
enable_exactly_once_delivery: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of 'message_id' on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

An acknowledged message will
not be resent to a subscriber. Note that subscribers may still receive multiple copies of a
message when 'enableExactlyOnceDelivery' is true if the message was published multiple times by
a publisher client. These copies are considered distinct by Pub/Sub and have distinct 'message_id'
values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#enable_exactly_once_delivery BigqueryAnalyticsHubListingSubscription#enable_exactly_once_delivery}

---

##### `enable_message_ordering`<sup>Optional</sup> <a name="enable_message_ordering" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableMessageOrdering"></a>

```python
enable_message_ordering: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, messages published with the same 'ordering_key' in 'PubsubMessage' will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#enable_message_ordering BigqueryAnalyticsHubListingSubscription#enable_message_ordering}

---

##### `expiration_policy`<sup>Optional</sup> <a name="expiration_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.expirationPolicy"></a>

```python
expiration_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#expiration_policy BigqueryAnalyticsHubListingSubscription#expiration_policy}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.filter"></a>

```python
filter: str
```

- *Type:* str

An expression written in the Pub/Sub filter language.

If non-empty, then only 'PubsubMessage's
whose 'attributes' field matches the filter are delivered on this subscription. If empty, then
no messages are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filter BigqueryAnalyticsHubListingSubscription#filter}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#labels BigqueryAnalyticsHubListingSubscription#labels}

---

##### `message_retention_duration`<sup>Optional</sup> <a name="message_retention_duration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.messageRetentionDuration"></a>

```python
message_retention_duration: str
```

- *Type:* str

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If 'retainAckedMessages' is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a Seek can be done. Defaults
to 7 days. Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#message_retention_duration BigqueryAnalyticsHubListingSubscription#message_retention_duration}

---

##### `push_config`<sup>Optional</sup> <a name="push_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.pushConfig"></a>

```python
push_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#push_config BigqueryAnalyticsHubListingSubscription#push_config}

---

##### `retain_acked_messages`<sup>Optional</sup> <a name="retain_acked_messages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retainAckedMessages"></a>

```python
retain_acked_messages: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to retain acknowledged messages.

If true, then messages are not expunged from
the subscription's backlog, even if they are acknowledged, until they fall out of the
'messageRetentionDuration' window. This must be true if you would like to Seek to a timestamp
in the past to replay previously-acknowledged messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#retain_acked_messages BigqueryAnalyticsHubListingSubscription#retain_acked_messages}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retryPolicy"></a>

```python
retry_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#retry_policy BigqueryAnalyticsHubListingSubscription#retry_policy}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig(
  drop_unknown_fields: bool | IResolvable = None,
  service_account_email: str = None,
  table: str = None,
  use_table_schema: bool | IResolvable = None,
  use_topic_schema: bool | IResolvable = None,
  write_metadata: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.dropUnknownFields">drop_unknown_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | When true and 'useTopicSchema' is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | The service account to use to write to BigQuery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.table">table</a></code> | <code>str</code> | The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTableSchema">use_table_schema</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, use the BigQuery table's schema as the columns to write to in BigQuery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTopicSchema">use_topic_schema</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, use the topic's schema as the columns to write to in BigQuery, if it exists. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.writeMetadata">write_metadata</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table. |

---

##### `drop_unknown_fields`<sup>Optional</sup> <a name="drop_unknown_fields" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.dropUnknownFields"></a>

```python
drop_unknown_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true and 'useTopicSchema' is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas
must be kept in sync and any messages with extra fields are not written and remain in the
subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#drop_unknown_fields BigqueryAnalyticsHubListingSubscription#drop_unknown_fields}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

The service account to use to write to BigQuery.

The subscription creator or updater that
specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
If not specified, the Pub/Sub service agent,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.table"></a>

```python
table: str
```

- *Type:* str

The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#table BigqueryAnalyticsHubListingSubscription#table}

---

##### `use_table_schema`<sup>Optional</sup> <a name="use_table_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTableSchema"></a>

```python
use_table_schema: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

'useTableSchema' and 'useTopicSchema' cannot be enabled at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_table_schema BigqueryAnalyticsHubListingSubscription#use_table_schema}

---

##### `use_topic_schema`<sup>Optional</sup> <a name="use_topic_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTopicSchema"></a>

```python
use_topic_schema: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

'useTopicSchema' and 'useTableSchema' cannot be enabled at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_topic_schema BigqueryAnalyticsHubListingSubscription#use_topic_schema}

---

##### `write_metadata`<sup>Optional</sup> <a name="write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.writeMetadata"></a>

```python
write_metadata: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table.

The subscription name, message_id, and publish_time fields
are put in their own columns while all other message properties (other than data) are written
to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig(
  avro_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig = None,
  bucket: str = None,
  filename_datetime_format: str = None,
  filename_prefix: str = None,
  filename_suffix: str = None,
  max_bytes: str = None,
  max_duration: str = None,
  max_messages: str = None,
  service_account_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.avroConfig">avro_config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | avro_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.bucket">bucket</a></code> | <code>str</code> | User-provided name for the Cloud Storage bucket. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat">filename_datetime_format</a></code> | <code>str</code> | User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names). |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenamePrefix">filename_prefix</a></code> | <code>str</code> | User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameSuffix">filename_suffix</a></code> | <code>str</code> | User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/". |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxBytes">max_bytes</a></code> | <code>str</code> | The maximum bytes that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxDuration">max_duration</a></code> | <code>str</code> | The maximum duration that can elapse before a new Cloud Storage file is created. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxMessages">max_messages</a></code> | <code>str</code> | The maximum number of messages that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | The service account to use to write to Cloud Storage. |

---

##### `avro_config`<sup>Optional</sup> <a name="avro_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.avroConfig"></a>

```python
avro_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#avro_config BigqueryAnalyticsHubListingSubscription#avro_config}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user.
The bucket name must be without any prefix like "gs://". See the
[bucket naming requirements](https://cloud.google.com/storage/docs/buckets#naming).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#bucket BigqueryAnalyticsHubListingSubscription#bucket}

---

##### `filename_datetime_format`<sup>Optional</sup> <a name="filename_datetime_format" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat"></a>

```python
filename_datetime_format: str
```

- *Type:* str

User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_datetime_format BigqueryAnalyticsHubListingSubscription#filename_datetime_format}

---

##### `filename_prefix`<sup>Optional</sup> <a name="filename_prefix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenamePrefix"></a>

```python
filename_prefix: str
```

- *Type:* str

User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_prefix BigqueryAnalyticsHubListingSubscription#filename_prefix}

---

##### `filename_suffix`<sup>Optional</sup> <a name="filename_suffix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameSuffix"></a>

```python
filename_suffix: str
```

- *Type:* str

User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_suffix BigqueryAnalyticsHubListingSubscription#filename_suffix}

---

##### `max_bytes`<sup>Optional</sup> <a name="max_bytes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxBytes"></a>

```python
max_bytes: str
```

- *Type:* str

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB. The maxBytes limit may be exceeded in cases where messages are larger
than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_bytes BigqueryAnalyticsHubListingSubscription#max_bytes}

---

##### `max_duration`<sup>Optional</sup> <a name="max_duration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxDuration"></a>

```python
max_duration: str
```

- *Type:* str

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription's
acknowledgement deadline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_duration BigqueryAnalyticsHubListingSubscription#max_duration}

---

##### `max_messages`<sup>Optional</sup> <a name="max_messages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxMessages"></a>

```python
max_messages: str
```

- *Type:* str

The maximum number of messages that can be written to a Cloud Storage file before a new file is created.

Min 1000 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_messages BigqueryAnalyticsHubListingSubscription#max_messages}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

The service account to use to write to Cloud Storage.

The subscription creator or updater that
specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
If not specified, the Pub/Sub service agent,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig(
  use_topic_schema: bool | IResolvable = None,
  write_metadata: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema">use_topic_schema</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the output Cloud Storage file will be serialized using the topic schema, if it exists. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata">write_metadata</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. |

---

##### `use_topic_schema`<sup>Optional</sup> <a name="use_topic_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema"></a>

```python
use_topic_schema: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_topic_schema BigqueryAnalyticsHubListingSubscription#use_topic_schema}

---

##### `write_metadata`<sup>Optional</sup> <a name="write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata"></a>

```python
write_metadata: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output.

The subscription name, message_id, and publish_time fields
are put in their own fields while all other message properties other than data (for example,
an ordering_key, if present) are added as entries in the attributes map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy(
  dead_letter_topic: str = None,
  max_delivery_attempts: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic">dead_letter_topic</a></code> | <code>str</code> | The name of the topic to which dead letter messages should be published. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts">max_delivery_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of delivery attempts for any message. |

---

##### `dead_letter_topic`<sup>Optional</sup> <a name="dead_letter_topic" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic"></a>

```python
dead_letter_topic: str
```

- *Type:* str

The name of the topic to which dead letter messages should be published.

Format is
'projects/{project}/topics/{topic}'. The Pub/Sub service account associated with the enclosing
subscription's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com)
must have permission to Publish() to this topic. The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic since messages published to
a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dead_letter_topic BigqueryAnalyticsHubListingSubscription#dead_letter_topic}

---

##### `max_delivery_attempts`<sup>Optional</sup> <a name="max_delivery_attempts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts"></a>

```python
max_delivery_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of delivery attempts for any message.

The value must be between 5 and 100.
The number of delivery attempts is defined as 1 + (the sum of number of NACKs and number of times
the acknowledgement deadline has been exceeded for the message). A NACK is any call to
ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend
ack_deadlines. This field will be honored on a best effort basis. If this parameter is 0, a
default value of 5 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_delivery_attempts BigqueryAnalyticsHubListingSubscription#max_delivery_attempts}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy(
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy.property.ttl">ttl</a></code> | <code>str</code> | Specifies the "time-to-live" duration for an associated resource. |

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Specifies the "time-to-live" duration for an associated resource.

The resource expires if it
is not active for a period of 'ttl'. The definition of "activity" depends on the type of the
associated resource. The minimum and maximum allowed values for 'ttl' depend on the type of
the associated resource, as well. If 'ttl' is not set, the associated resource never expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#ttl BigqueryAnalyticsHubListingSubscription#ttl}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig(
  attributes: typing.Mapping[str] = None,
  no_wrapper: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper = None,
  oidc_token: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken = None,
  push_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Endpoint configuration attributes that can be used to control different aspects of the message delivery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.noWrapper">no_wrapper</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | no_wrapper block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.oidcToken">oidc_token</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.pushEndpoint">push_endpoint</a></code> | <code>str</code> | A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use 'https://example.com/push'. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Endpoint configuration attributes that can be used to control different aspects of the message delivery.

The only currently supported attribute is 'x-goog-version', which you can use to change the format of the
pushed message. This attribute indicates the version of the data expected by the endpoint. This controls
the shape of the pushed message (i.e., its fields and metadata). If not present during the
'CreateSubscription' call, it will default to the version of the Pub/Sub API used to make such call.
If not present in a 'ModifyPushConfig' call, its value will not be changed. 'GetSubscription' calls
will always return a valid version, even if the subscription was created without this attribute.
The only supported values for the 'x-goog-version' attribute are: 'v1beta1': uses the push format
defined in the v1beta1 Pub/Sub API. 'v1' or 'v1beta2': uses the push format defined in the v1 Pub/Sub API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#attributes BigqueryAnalyticsHubListingSubscription#attributes}

---

##### `no_wrapper`<sup>Optional</sup> <a name="no_wrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.noWrapper"></a>

```python
no_wrapper: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#no_wrapper BigqueryAnalyticsHubListingSubscription#no_wrapper}

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.oidcToken"></a>

```python
oidc_token: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#oidc_token BigqueryAnalyticsHubListingSubscription#oidc_token}

---

##### `push_endpoint`<sup>Optional</sup> <a name="push_endpoint" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.pushEndpoint"></a>

```python
push_endpoint: str
```

- *Type:* str

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use 'https://example.com/push'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#push_endpoint BigqueryAnalyticsHubListingSubscription#push_endpoint}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper(
  write_metadata: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.property.writeMetadata">write_metadata</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. |

---

##### `write_metadata`<sup>Optional</sup> <a name="write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.property.writeMetadata"></a>

```python
write_metadata: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken(
  audience: str = None,
  service_account_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.audience">audience</a></code> | <code>str</code> | Audience to be used when generating OIDC token. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Service account email used for generating the OIDC token. For more information on setting up authentication, see Push subscriptions. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience to be used when generating OIDC token.

The audience claim identifies the recipients
that the JWT is intended for. The audience value is a single case-sensitive string. Having
multiple values (array) for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified,
the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#audience BigqueryAnalyticsHubListingSubscription#audience}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

Service account email used for generating the OIDC token. For more information on setting up authentication, see Push subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy(
  maximum_backoff: str = None,
  minimum_backoff: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.maximumBackoff">maximum_backoff</a></code> | <code>str</code> | The maximum delay between consecutive deliveries of a given message. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.minimumBackoff">minimum_backoff</a></code> | <code>str</code> | The minimum delay between consecutive deliveries of a given message. |

---

##### `maximum_backoff`<sup>Optional</sup> <a name="maximum_backoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.maximumBackoff"></a>

```python
maximum_backoff: str
```

- *Type:* str

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#maximum_backoff BigqueryAnalyticsHubListingSubscription#maximum_backoff}

---

##### `minimum_backoff`<sup>Optional</sup> <a name="minimum_backoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.minimumBackoff"></a>

```python
minimum_backoff: str
```

- *Type:* str

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#minimum_backoff BigqueryAnalyticsHubListingSubscription#minimum_backoff}

---

### BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap <a name="BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap()
```


### BigqueryAnalyticsHubListingSubscriptionLinkedResources <a name="BigqueryAnalyticsHubListingSubscriptionLinkedResources" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources()
```


### BigqueryAnalyticsHubListingSubscriptionTimeouts <a name="BigqueryAnalyticsHubListingSubscriptionTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#create BigqueryAnalyticsHubListingSubscription#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#delete BigqueryAnalyticsHubListingSubscription#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#create BigqueryAnalyticsHubListingSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#delete BigqueryAnalyticsHubListingSubscription#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace</a>

---


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoList <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.cloudMarketplace">cloud_marketplace</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo">BigqueryAnalyticsHubListingSubscriptionCommercialInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_marketplace`<sup>Required</sup> <a name="cloud_marketplace" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.cloudMarketplace"></a>

```python
cloud_marketplace: BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionCommercialInfo
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo">BigqueryAnalyticsHubListingSubscriptionCommercialInfo</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference">put_dataset_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetFriendlyName">reset_friendly_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetReplicaLocations">reset_replica_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataset_reference` <a name="put_dataset_reference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference"></a>

```python
def put_dataset_reference(
  dataset_id: str,
  project_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference.parameter.datasetId"></a>

- *Type:* str

A unique ID for this dataset, without the project name.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dataset_id BigqueryAnalyticsHubListingSubscription#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project_id BigqueryAnalyticsHubListingSubscription#project_id}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_friendly_name` <a name="reset_friendly_name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetFriendlyName"></a>

```python
def reset_friendly_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_replica_locations` <a name="reset_replica_locations" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetReplicaLocations"></a>

```python
def reset_replica_locations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReference">dataset_reference</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput">dataset_reference_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput">friendly_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocationsInput">replica_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocations">replica_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_reference`<sup>Required</sup> <a name="dataset_reference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReference"></a>

```python
dataset_reference: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference</a>

---

##### `dataset_reference_input`<sup>Optional</sup> <a name="dataset_reference_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput"></a>

```python
dataset_reference_input: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `friendly_name_input`<sup>Optional</sup> <a name="friendly_name_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput"></a>

```python
friendly_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `replica_locations_input`<sup>Optional</sup> <a name="replica_locations_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocationsInput"></a>

```python
replica_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `replica_locations`<sup>Required</sup> <a name="replica_locations" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocations"></a>

```python
replica_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription">put_pubsub_subscription</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pubsub_subscription` <a name="put_pubsub_subscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription"></a>

```python
def put_pubsub_subscription(
  name: str,
  ack_deadline_seconds: typing.Union[int, float] = None,
  bigquery_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig = None,
  cloud_storage_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig = None,
  dead_letter_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy = None,
  detached: bool | IResolvable = None,
  enable_exactly_once_delivery: bool | IResolvable = None,
  enable_message_ordering: bool | IResolvable = None,
  expiration_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy = None,
  filter: str = None,
  labels: typing.Mapping[str] = None,
  message_retention_duration: str = None,
  push_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig = None,
  retain_acked_messages: bool | IResolvable = None,
  retry_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.name"></a>

- *Type:* str

Name of the subscription. Format is 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#name BigqueryAnalyticsHubListingSubscription#name}

---

###### `ack_deadline_seconds`<sup>Optional</sup> <a name="ack_deadline_seconds" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.ackDeadlineSeconds"></a>

- *Type:* typing.Union[int, float]

The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message.

In the interval after the message is delivered
and before it is acknowledged, it is considered to be outstanding. During that time period, the
message will not be redelivered (on a best-effort basis). For pull subscriptions, this value is
used as the initial value for the ack deadline. To override this value for a given message, call
'ModifyAckDeadline' with the corresponding 'ack_id' if using non-streaming pull or send the
'ack_id' in a 'StreamingModifyAckDeadlineRequest' if using streaming pull. The minimum custom
deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600
seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used. For push
delivery, this value is also used to set the request timeout for the call to the push endpoint.
If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver
the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#ack_deadline_seconds BigqueryAnalyticsHubListingSubscription#ack_deadline_seconds}

---

###### `bigquery_config`<sup>Optional</sup> <a name="bigquery_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.bigqueryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#bigquery_config BigqueryAnalyticsHubListingSubscription#bigquery_config}

---

###### `cloud_storage_config`<sup>Optional</sup> <a name="cloud_storage_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.cloudStorageConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#cloud_storage_config BigqueryAnalyticsHubListingSubscription#cloud_storage_config}

---

###### `dead_letter_policy`<sup>Optional</sup> <a name="dead_letter_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.deadLetterPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dead_letter_policy BigqueryAnalyticsHubListingSubscription#dead_letter_policy}

---

###### `detached`<sup>Optional</sup> <a name="detached" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.detached"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the subscription is detached from its topic.

Detached subscriptions don't
receive messages from their topic and don't retain any backlog. 'Pull' and 'StreamingPull'
requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes
to the endpoint will not be made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#detached BigqueryAnalyticsHubListingSubscription#detached}

---

###### `enable_exactly_once_delivery`<sup>Optional</sup> <a name="enable_exactly_once_delivery" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.enableExactlyOnceDelivery"></a>

- *Type:* bool | cdktn.IResolvable

If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of 'message_id' on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

An acknowledged message will
not be resent to a subscriber. Note that subscribers may still receive multiple copies of a
message when 'enableExactlyOnceDelivery' is true if the message was published multiple times by
a publisher client. These copies are considered distinct by Pub/Sub and have distinct 'message_id'
values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#enable_exactly_once_delivery BigqueryAnalyticsHubListingSubscription#enable_exactly_once_delivery}

---

###### `enable_message_ordering`<sup>Optional</sup> <a name="enable_message_ordering" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.enableMessageOrdering"></a>

- *Type:* bool | cdktn.IResolvable

If true, messages published with the same 'ordering_key' in 'PubsubMessage' will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#enable_message_ordering BigqueryAnalyticsHubListingSubscription#enable_message_ordering}

---

###### `expiration_policy`<sup>Optional</sup> <a name="expiration_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.expirationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#expiration_policy BigqueryAnalyticsHubListingSubscription#expiration_policy}

---

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.filter"></a>

- *Type:* str

An expression written in the Pub/Sub filter language.

If non-empty, then only 'PubsubMessage's
whose 'attributes' field matches the filter are delivered on this subscription. If empty, then
no messages are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filter BigqueryAnalyticsHubListingSubscription#filter}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.labels"></a>

- *Type:* typing.Mapping[str]

See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#labels BigqueryAnalyticsHubListingSubscription#labels}

---

###### `message_retention_duration`<sup>Optional</sup> <a name="message_retention_duration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.messageRetentionDuration"></a>

- *Type:* str

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If 'retainAckedMessages' is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a Seek can be done. Defaults
to 7 days. Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#message_retention_duration BigqueryAnalyticsHubListingSubscription#message_retention_duration}

---

###### `push_config`<sup>Optional</sup> <a name="push_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.pushConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#push_config BigqueryAnalyticsHubListingSubscription#push_config}

---

###### `retain_acked_messages`<sup>Optional</sup> <a name="retain_acked_messages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.retainAckedMessages"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to retain acknowledged messages.

If true, then messages are not expunged from
the subscription's backlog, even if they are acknowledged, until they fall out of the
'messageRetentionDuration' window. This must be true if you would like to Seek to a timestamp
in the past to replay previously-acknowledged messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#retain_acked_messages BigqueryAnalyticsHubListingSubscription#retain_acked_messages}

---

###### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#retry_policy BigqueryAnalyticsHubListingSubscription#retry_policy}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscription">pubsub_subscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscriptionInput">pubsub_subscription_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub_subscription`<sup>Required</sup> <a name="pubsub_subscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscription"></a>

```python
pubsub_subscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference</a>

---

##### `pubsub_subscription_input`<sup>Optional</sup> <a name="pubsub_subscription_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscriptionInput"></a>

```python
pubsub_subscription_input: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields">reset_drop_unknown_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema">reset_use_table_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema">reset_use_topic_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata">reset_write_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_drop_unknown_fields` <a name="reset_drop_unknown_fields" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields"></a>

```python
def reset_drop_unknown_fields() -> None
```

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_use_table_schema` <a name="reset_use_table_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema"></a>

```python
def reset_use_table_schema() -> None
```

##### `reset_use_topic_schema` <a name="reset_use_topic_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema"></a>

```python
def reset_use_topic_schema() -> None
```

##### `reset_write_metadata` <a name="reset_write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata"></a>

```python
def reset_write_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput">drop_unknown_fields_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput">use_table_schema_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput">use_topic_schema_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput">write_metadata_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">drop_unknown_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.table">table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema">use_table_schema</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">use_topic_schema</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">write_metadata</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `drop_unknown_fields_input`<sup>Optional</sup> <a name="drop_unknown_fields_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput"></a>

```python
drop_unknown_fields_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `use_table_schema_input`<sup>Optional</sup> <a name="use_table_schema_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput"></a>

```python
use_table_schema_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_topic_schema_input`<sup>Optional</sup> <a name="use_topic_schema_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput"></a>

```python
use_topic_schema_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `write_metadata_input`<sup>Optional</sup> <a name="write_metadata_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput"></a>

```python
write_metadata_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `drop_unknown_fields`<sup>Required</sup> <a name="drop_unknown_fields" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```python
drop_unknown_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```python
table: str
```

- *Type:* str

---

##### `use_table_schema`<sup>Required</sup> <a name="use_table_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema"></a>

```python
use_table_schema: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_topic_schema`<sup>Required</sup> <a name="use_topic_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```python
use_topic_schema: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `write_metadata`<sup>Required</sup> <a name="write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```python
write_metadata: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema">reset_use_topic_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata">reset_write_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_topic_schema` <a name="reset_use_topic_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema"></a>

```python
def reset_use_topic_schema() -> None
```

##### `reset_write_metadata` <a name="reset_write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata"></a>

```python
def reset_write_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput">use_topic_schema_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput">write_metadata_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema">use_topic_schema</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata">write_metadata</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_topic_schema_input`<sup>Optional</sup> <a name="use_topic_schema_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput"></a>

```python
use_topic_schema_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `write_metadata_input`<sup>Optional</sup> <a name="write_metadata_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput"></a>

```python
write_metadata_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_topic_schema`<sup>Required</sup> <a name="use_topic_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema"></a>

```python
use_topic_schema: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `write_metadata`<sup>Required</sup> <a name="write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata"></a>

```python
write_metadata: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig">put_avro_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig">reset_avro_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat">reset_filename_datetime_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix">reset_filename_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix">reset_filename_suffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes">reset_max_bytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration">reset_max_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages">reset_max_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro_config` <a name="put_avro_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig"></a>

```python
def put_avro_config(
  use_topic_schema: bool | IResolvable = None,
  write_metadata: bool | IResolvable = None
) -> None
```

###### `use_topic_schema`<sup>Optional</sup> <a name="use_topic_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig.parameter.useTopicSchema"></a>

- *Type:* bool | cdktn.IResolvable

When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_topic_schema BigqueryAnalyticsHubListingSubscription#use_topic_schema}

---

###### `write_metadata`<sup>Optional</sup> <a name="write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig.parameter.writeMetadata"></a>

- *Type:* bool | cdktn.IResolvable

When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output.

The subscription name, message_id, and publish_time fields
are put in their own fields while all other message properties other than data (for example,
an ordering_key, if present) are added as entries in the attributes map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

##### `reset_avro_config` <a name="reset_avro_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig"></a>

```python
def reset_avro_config() -> None
```

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_filename_datetime_format` <a name="reset_filename_datetime_format" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat"></a>

```python
def reset_filename_datetime_format() -> None
```

##### `reset_filename_prefix` <a name="reset_filename_prefix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix"></a>

```python
def reset_filename_prefix() -> None
```

##### `reset_filename_suffix` <a name="reset_filename_suffix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix"></a>

```python
def reset_filename_suffix() -> None
```

##### `reset_max_bytes` <a name="reset_max_bytes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes"></a>

```python
def reset_max_bytes() -> None
```

##### `reset_max_duration` <a name="reset_max_duration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration"></a>

```python
def reset_max_duration() -> None
```

##### `reset_max_messages` <a name="reset_max_messages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages"></a>

```python
def reset_max_messages() -> None
```

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig">avro_config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput">avro_config_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput">filename_datetime_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput">filename_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput">filename_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput">max_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput">max_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput">max_messages_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat">filename_datetime_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix">filename_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix">filename_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes">max_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration">max_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages">max_messages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro_config`<sup>Required</sup> <a name="avro_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig"></a>

```python
avro_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a>

---

##### `avro_config_input`<sup>Optional</sup> <a name="avro_config_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput"></a>

```python
avro_config_input: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `filename_datetime_format_input`<sup>Optional</sup> <a name="filename_datetime_format_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput"></a>

```python
filename_datetime_format_input: str
```

- *Type:* str

---

##### `filename_prefix_input`<sup>Optional</sup> <a name="filename_prefix_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput"></a>

```python
filename_prefix_input: str
```

- *Type:* str

---

##### `filename_suffix_input`<sup>Optional</sup> <a name="filename_suffix_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput"></a>

```python
filename_suffix_input: str
```

- *Type:* str

---

##### `max_bytes_input`<sup>Optional</sup> <a name="max_bytes_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput"></a>

```python
max_bytes_input: str
```

- *Type:* str

---

##### `max_duration_input`<sup>Optional</sup> <a name="max_duration_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput"></a>

```python
max_duration_input: str
```

- *Type:* str

---

##### `max_messages_input`<sup>Optional</sup> <a name="max_messages_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput"></a>

```python
max_messages_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `filename_datetime_format`<sup>Required</sup> <a name="filename_datetime_format" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat"></a>

```python
filename_datetime_format: str
```

- *Type:* str

---

##### `filename_prefix`<sup>Required</sup> <a name="filename_prefix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix"></a>

```python
filename_prefix: str
```

- *Type:* str

---

##### `filename_suffix`<sup>Required</sup> <a name="filename_suffix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix"></a>

```python
filename_suffix: str
```

- *Type:* str

---

##### `max_bytes`<sup>Required</sup> <a name="max_bytes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes"></a>

```python
max_bytes: str
```

- *Type:* str

---

##### `max_duration`<sup>Required</sup> <a name="max_duration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration"></a>

```python
max_duration: str
```

- *Type:* str

---

##### `max_messages`<sup>Required</sup> <a name="max_messages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages"></a>

```python
max_messages: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic">reset_dead_letter_topic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts">reset_max_delivery_attempts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dead_letter_topic` <a name="reset_dead_letter_topic" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic"></a>

```python
def reset_dead_letter_topic() -> None
```

##### `reset_max_delivery_attempts` <a name="reset_max_delivery_attempts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts"></a>

```python
def reset_max_delivery_attempts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput">dead_letter_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput">max_delivery_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">dead_letter_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">max_delivery_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dead_letter_topic_input`<sup>Optional</sup> <a name="dead_letter_topic_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput"></a>

```python
dead_letter_topic_input: str
```

- *Type:* str

---

##### `max_delivery_attempts_input`<sup>Optional</sup> <a name="max_delivery_attempts_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```python
max_delivery_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dead_letter_topic`<sup>Required</sup> <a name="dead_letter_topic" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```python
dead_letter_topic: str
```

- *Type:* str

---

##### `max_delivery_attempts`<sup>Required</sup> <a name="max_delivery_attempts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```python
max_delivery_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig">put_bigquery_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig">put_cloud_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy">put_dead_letter_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy">put_expiration_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig">put_push_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetAckDeadlineSeconds">reset_ack_deadline_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetBigqueryConfig">reset_bigquery_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetCloudStorageConfig">reset_cloud_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDeadLetterPolicy">reset_dead_letter_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDetached">reset_detached</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableExactlyOnceDelivery">reset_enable_exactly_once_delivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableMessageOrdering">reset_enable_message_ordering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetExpirationPolicy">reset_expiration_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetMessageRetentionDuration">reset_message_retention_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetPushConfig">reset_push_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetainAckedMessages">reset_retain_acked_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bigquery_config` <a name="put_bigquery_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig"></a>

```python
def put_bigquery_config(
  drop_unknown_fields: bool | IResolvable = None,
  service_account_email: str = None,
  table: str = None,
  use_table_schema: bool | IResolvable = None,
  use_topic_schema: bool | IResolvable = None,
  write_metadata: bool | IResolvable = None
) -> None
```

###### `drop_unknown_fields`<sup>Optional</sup> <a name="drop_unknown_fields" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig.parameter.dropUnknownFields"></a>

- *Type:* bool | cdktn.IResolvable

When true and 'useTopicSchema' is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas
must be kept in sync and any messages with extra fields are not written and remain in the
subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#drop_unknown_fields BigqueryAnalyticsHubListingSubscription#drop_unknown_fields}

---

###### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig.parameter.serviceAccountEmail"></a>

- *Type:* str

The service account to use to write to BigQuery.

The subscription creator or updater that
specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
If not specified, the Pub/Sub service agent,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

###### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig.parameter.table"></a>

- *Type:* str

The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#table BigqueryAnalyticsHubListingSubscription#table}

---

###### `use_table_schema`<sup>Optional</sup> <a name="use_table_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig.parameter.useTableSchema"></a>

- *Type:* bool | cdktn.IResolvable

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

'useTableSchema' and 'useTopicSchema' cannot be enabled at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_table_schema BigqueryAnalyticsHubListingSubscription#use_table_schema}

---

###### `use_topic_schema`<sup>Optional</sup> <a name="use_topic_schema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig.parameter.useTopicSchema"></a>

- *Type:* bool | cdktn.IResolvable

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

'useTopicSchema' and 'useTableSchema' cannot be enabled at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_topic_schema BigqueryAnalyticsHubListingSubscription#use_topic_schema}

---

###### `write_metadata`<sup>Optional</sup> <a name="write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig.parameter.writeMetadata"></a>

- *Type:* bool | cdktn.IResolvable

When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table.

The subscription name, message_id, and publish_time fields
are put in their own columns while all other message properties (other than data) are written
to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

##### `put_cloud_storage_config` <a name="put_cloud_storage_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig"></a>

```python
def put_cloud_storage_config(
  avro_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig = None,
  bucket: str = None,
  filename_datetime_format: str = None,
  filename_prefix: str = None,
  filename_suffix: str = None,
  max_bytes: str = None,
  max_duration: str = None,
  max_messages: str = None,
  service_account_email: str = None
) -> None
```

###### `avro_config`<sup>Optional</sup> <a name="avro_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.avroConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#avro_config BigqueryAnalyticsHubListingSubscription#avro_config}

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.bucket"></a>

- *Type:* str

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user.
The bucket name must be without any prefix like "gs://". See the
[bucket naming requirements](https://cloud.google.com/storage/docs/buckets#naming).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#bucket BigqueryAnalyticsHubListingSubscription#bucket}

---

###### `filename_datetime_format`<sup>Optional</sup> <a name="filename_datetime_format" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.filenameDatetimeFormat"></a>

- *Type:* str

User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_datetime_format BigqueryAnalyticsHubListingSubscription#filename_datetime_format}

---

###### `filename_prefix`<sup>Optional</sup> <a name="filename_prefix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.filenamePrefix"></a>

- *Type:* str

User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_prefix BigqueryAnalyticsHubListingSubscription#filename_prefix}

---

###### `filename_suffix`<sup>Optional</sup> <a name="filename_suffix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.filenameSuffix"></a>

- *Type:* str

User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_suffix BigqueryAnalyticsHubListingSubscription#filename_suffix}

---

###### `max_bytes`<sup>Optional</sup> <a name="max_bytes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.maxBytes"></a>

- *Type:* str

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB. The maxBytes limit may be exceeded in cases where messages are larger
than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_bytes BigqueryAnalyticsHubListingSubscription#max_bytes}

---

###### `max_duration`<sup>Optional</sup> <a name="max_duration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.maxDuration"></a>

- *Type:* str

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription's
acknowledgement deadline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_duration BigqueryAnalyticsHubListingSubscription#max_duration}

---

###### `max_messages`<sup>Optional</sup> <a name="max_messages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.maxMessages"></a>

- *Type:* str

The maximum number of messages that can be written to a Cloud Storage file before a new file is created.

Min 1000 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_messages BigqueryAnalyticsHubListingSubscription#max_messages}

---

###### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.serviceAccountEmail"></a>

- *Type:* str

The service account to use to write to Cloud Storage.

The subscription creator or updater that
specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
If not specified, the Pub/Sub service agent,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

##### `put_dead_letter_policy` <a name="put_dead_letter_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy"></a>

```python
def put_dead_letter_policy(
  dead_letter_topic: str = None,
  max_delivery_attempts: typing.Union[int, float] = None
) -> None
```

###### `dead_letter_topic`<sup>Optional</sup> <a name="dead_letter_topic" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy.parameter.deadLetterTopic"></a>

- *Type:* str

The name of the topic to which dead letter messages should be published.

Format is
'projects/{project}/topics/{topic}'. The Pub/Sub service account associated with the enclosing
subscription's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com)
must have permission to Publish() to this topic. The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic since messages published to
a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dead_letter_topic BigqueryAnalyticsHubListingSubscription#dead_letter_topic}

---

###### `max_delivery_attempts`<sup>Optional</sup> <a name="max_delivery_attempts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy.parameter.maxDeliveryAttempts"></a>

- *Type:* typing.Union[int, float]

The maximum number of delivery attempts for any message.

The value must be between 5 and 100.
The number of delivery attempts is defined as 1 + (the sum of number of NACKs and number of times
the acknowledgement deadline has been exceeded for the message). A NACK is any call to
ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend
ack_deadlines. This field will be honored on a best effort basis. If this parameter is 0, a
default value of 5 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_delivery_attempts BigqueryAnalyticsHubListingSubscription#max_delivery_attempts}

---

##### `put_expiration_policy` <a name="put_expiration_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy"></a>

```python
def put_expiration_policy(
  ttl: str = None
) -> None
```

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy.parameter.ttl"></a>

- *Type:* str

Specifies the "time-to-live" duration for an associated resource.

The resource expires if it
is not active for a period of 'ttl'. The definition of "activity" depends on the type of the
associated resource. The minimum and maximum allowed values for 'ttl' depend on the type of
the associated resource, as well. If 'ttl' is not set, the associated resource never expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#ttl BigqueryAnalyticsHubListingSubscription#ttl}

---

##### `put_push_config` <a name="put_push_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig"></a>

```python
def put_push_config(
  attributes: typing.Mapping[str] = None,
  no_wrapper: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper = None,
  oidc_token: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken = None,
  push_endpoint: str = None
) -> None
```

###### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig.parameter.attributes"></a>

- *Type:* typing.Mapping[str]

Endpoint configuration attributes that can be used to control different aspects of the message delivery.

The only currently supported attribute is 'x-goog-version', which you can use to change the format of the
pushed message. This attribute indicates the version of the data expected by the endpoint. This controls
the shape of the pushed message (i.e., its fields and metadata). If not present during the
'CreateSubscription' call, it will default to the version of the Pub/Sub API used to make such call.
If not present in a 'ModifyPushConfig' call, its value will not be changed. 'GetSubscription' calls
will always return a valid version, even if the subscription was created without this attribute.
The only supported values for the 'x-goog-version' attribute are: 'v1beta1': uses the push format
defined in the v1beta1 Pub/Sub API. 'v1' or 'v1beta2': uses the push format defined in the v1 Pub/Sub API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#attributes BigqueryAnalyticsHubListingSubscription#attributes}

---

###### `no_wrapper`<sup>Optional</sup> <a name="no_wrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig.parameter.noWrapper"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#no_wrapper BigqueryAnalyticsHubListingSubscription#no_wrapper}

---

###### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig.parameter.oidcToken"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#oidc_token BigqueryAnalyticsHubListingSubscription#oidc_token}

---

###### `push_endpoint`<sup>Optional</sup> <a name="push_endpoint" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig.parameter.pushEndpoint"></a>

- *Type:* str

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use 'https://example.com/push'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#push_endpoint BigqueryAnalyticsHubListingSubscription#push_endpoint}

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy"></a>

```python
def put_retry_policy(
  maximum_backoff: str = None,
  minimum_backoff: str = None
) -> None
```

###### `maximum_backoff`<sup>Optional</sup> <a name="maximum_backoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy.parameter.maximumBackoff"></a>

- *Type:* str

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#maximum_backoff BigqueryAnalyticsHubListingSubscription#maximum_backoff}

---

###### `minimum_backoff`<sup>Optional</sup> <a name="minimum_backoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy.parameter.minimumBackoff"></a>

- *Type:* str

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#minimum_backoff BigqueryAnalyticsHubListingSubscription#minimum_backoff}

---

##### `reset_ack_deadline_seconds` <a name="reset_ack_deadline_seconds" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetAckDeadlineSeconds"></a>

```python
def reset_ack_deadline_seconds() -> None
```

##### `reset_bigquery_config` <a name="reset_bigquery_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetBigqueryConfig"></a>

```python
def reset_bigquery_config() -> None
```

##### `reset_cloud_storage_config` <a name="reset_cloud_storage_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetCloudStorageConfig"></a>

```python
def reset_cloud_storage_config() -> None
```

##### `reset_dead_letter_policy` <a name="reset_dead_letter_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDeadLetterPolicy"></a>

```python
def reset_dead_letter_policy() -> None
```

##### `reset_detached` <a name="reset_detached" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDetached"></a>

```python
def reset_detached() -> None
```

##### `reset_enable_exactly_once_delivery` <a name="reset_enable_exactly_once_delivery" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableExactlyOnceDelivery"></a>

```python
def reset_enable_exactly_once_delivery() -> None
```

##### `reset_enable_message_ordering` <a name="reset_enable_message_ordering" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableMessageOrdering"></a>

```python
def reset_enable_message_ordering() -> None
```

##### `reset_expiration_policy` <a name="reset_expiration_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetExpirationPolicy"></a>

```python
def reset_expiration_policy() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_message_retention_duration` <a name="reset_message_retention_duration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetMessageRetentionDuration"></a>

```python
def reset_message_retention_duration() -> None
```

##### `reset_push_config` <a name="reset_push_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetPushConfig"></a>

```python
def reset_push_config() -> None
```

##### `reset_retain_acked_messages` <a name="reset_retain_acked_messages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetainAckedMessages"></a>

```python
def reset_retain_acked_messages() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfig">bigquery_config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfig">cloud_storage_config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicy">dead_letter_policy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicy">expiration_policy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfig">push_config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSecondsInput">ack_deadline_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfigInput">bigquery_config_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfigInput">cloud_storage_config_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicyInput">dead_letter_policy_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detachedInput">detached_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDeliveryInput">enable_exactly_once_delivery_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrderingInput">enable_message_ordering_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicyInput">expiration_policy_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDurationInput">message_retention_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfigInput">push_config_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessagesInput">retain_acked_messages_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicyInput">retry_policy_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSeconds">ack_deadline_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detached">detached</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDelivery">enable_exactly_once_delivery</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrdering">enable_message_ordering</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDuration">message_retention_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessages">retain_acked_messages</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bigquery_config`<sup>Required</sup> <a name="bigquery_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfig"></a>

```python
bigquery_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference</a>

---

##### `cloud_storage_config`<sup>Required</sup> <a name="cloud_storage_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfig"></a>

```python
cloud_storage_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference</a>

---

##### `dead_letter_policy`<sup>Required</sup> <a name="dead_letter_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicy"></a>

```python
dead_letter_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference</a>

---

##### `expiration_policy`<sup>Required</sup> <a name="expiration_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicy"></a>

```python
expiration_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference</a>

---

##### `push_config`<sup>Required</sup> <a name="push_config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfig"></a>

```python
push_config: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicy"></a>

```python
retry_policy: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference</a>

---

##### `ack_deadline_seconds_input`<sup>Optional</sup> <a name="ack_deadline_seconds_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSecondsInput"></a>

```python
ack_deadline_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bigquery_config_input`<sup>Optional</sup> <a name="bigquery_config_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfigInput"></a>

```python
bigquery_config_input: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

---

##### `cloud_storage_config_input`<sup>Optional</sup> <a name="cloud_storage_config_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfigInput"></a>

```python
cloud_storage_config_input: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

---

##### `dead_letter_policy_input`<sup>Optional</sup> <a name="dead_letter_policy_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicyInput"></a>

```python
dead_letter_policy_input: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

---

##### `detached_input`<sup>Optional</sup> <a name="detached_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detachedInput"></a>

```python
detached_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_exactly_once_delivery_input`<sup>Optional</sup> <a name="enable_exactly_once_delivery_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDeliveryInput"></a>

```python
enable_exactly_once_delivery_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_message_ordering_input`<sup>Optional</sup> <a name="enable_message_ordering_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrderingInput"></a>

```python
enable_message_ordering_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `expiration_policy_input`<sup>Optional</sup> <a name="expiration_policy_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicyInput"></a>

```python
expiration_policy_input: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `message_retention_duration_input`<sup>Optional</sup> <a name="message_retention_duration_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDurationInput"></a>

```python
message_retention_duration_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `push_config_input`<sup>Optional</sup> <a name="push_config_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfigInput"></a>

```python
push_config_input: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

---

##### `retain_acked_messages_input`<sup>Optional</sup> <a name="retain_acked_messages_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessagesInput"></a>

```python
retain_acked_messages_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicyInput"></a>

```python
retry_policy_input: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

---

##### `ack_deadline_seconds`<sup>Required</sup> <a name="ack_deadline_seconds" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSeconds"></a>

```python
ack_deadline_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `detached`<sup>Required</sup> <a name="detached" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detached"></a>

```python
detached: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_exactly_once_delivery`<sup>Required</sup> <a name="enable_exactly_once_delivery" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDelivery"></a>

```python
enable_exactly_once_delivery: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_message_ordering`<sup>Required</sup> <a name="enable_message_ordering" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrdering"></a>

```python
enable_message_ordering: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `message_retention_duration`<sup>Required</sup> <a name="message_retention_duration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDuration"></a>

```python
message_retention_duration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retain_acked_messages`<sup>Required</sup> <a name="retain_acked_messages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessages"></a>

```python
retain_acked_messages: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resetWriteMetadata">reset_write_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_write_metadata` <a name="reset_write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resetWriteMetadata"></a>

```python
def reset_write_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput">write_metadata_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata">write_metadata</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `write_metadata_input`<sup>Optional</sup> <a name="write_metadata_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput"></a>

```python
write_metadata_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `write_metadata`<sup>Required</sup> <a name="write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata"></a>

```python
write_metadata: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience">reset_audience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audience` <a name="reset_audience" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper">put_no_wrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken">put_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetNoWrapper">reset_no_wrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetOidcToken">reset_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetPushEndpoint">reset_push_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_no_wrapper` <a name="put_no_wrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper"></a>

```python
def put_no_wrapper(
  write_metadata: bool | IResolvable = None
) -> None
```

###### `write_metadata`<sup>Optional</sup> <a name="write_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper.parameter.writeMetadata"></a>

- *Type:* bool | cdktn.IResolvable

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

##### `put_oidc_token` <a name="put_oidc_token" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken"></a>

```python
def put_oidc_token(
  audience: str = None,
  service_account_email: str = None
) -> None
```

###### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.audience"></a>

- *Type:* str

Audience to be used when generating OIDC token.

The audience claim identifies the recipients
that the JWT is intended for. The audience value is a single case-sensitive string. Having
multiple values (array) for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified,
the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#audience BigqueryAnalyticsHubListingSubscription#audience}

---

###### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.serviceAccountEmail"></a>

- *Type:* str

Service account email used for generating the OIDC token. For more information on setting up authentication, see Push subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_no_wrapper` <a name="reset_no_wrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetNoWrapper"></a>

```python
def reset_no_wrapper() -> None
```

##### `reset_oidc_token` <a name="reset_oidc_token" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetOidcToken"></a>

```python
def reset_oidc_token() -> None
```

##### `reset_push_endpoint` <a name="reset_push_endpoint" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetPushEndpoint"></a>

```python
def reset_push_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapper">no_wrapper</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcToken">oidc_token</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapperInput">no_wrapper_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput">oidc_token_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput">push_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">push_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `no_wrapper`<sup>Required</sup> <a name="no_wrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapper"></a>

```python
no_wrapper: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference</a>

---

##### `oidc_token`<sup>Required</sup> <a name="oidc_token" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```python
oidc_token: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `no_wrapper_input`<sup>Optional</sup> <a name="no_wrapper_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapperInput"></a>

```python
no_wrapper_input: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

---

##### `oidc_token_input`<sup>Optional</sup> <a name="oidc_token_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput"></a>

```python
oidc_token_input: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

---

##### `push_endpoint_input`<sup>Optional</sup> <a name="push_endpoint_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput"></a>

```python
push_endpoint_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `push_endpoint`<sup>Required</sup> <a name="push_endpoint" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```python
push_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff">reset_maximum_backoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff">reset_minimum_backoff</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_backoff` <a name="reset_maximum_backoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff"></a>

```python
def reset_maximum_backoff() -> None
```

##### `reset_minimum_backoff` <a name="reset_minimum_backoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff"></a>

```python
def reset_minimum_backoff() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput">maximum_backoff_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput">minimum_backoff_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">maximum_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">minimum_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_backoff_input`<sup>Optional</sup> <a name="maximum_backoff_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput"></a>

```python
maximum_backoff_input: str
```

- *Type:* str

---

##### `minimum_backoff_input`<sup>Optional</sup> <a name="minimum_backoff_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput"></a>

```python
minimum_backoff_input: str
```

- *Type:* str

---

##### `maximum_backoff`<sup>Required</sup> <a name="maximum_backoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```python
maximum_backoff: str
```

- *Type:* str

---

##### `minimum_backoff`<sup>Required</sup> <a name="minimum_backoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```python
minimum_backoff: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

---


### BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList <a name="BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset">linked_dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription">linked_pubsub_subscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.listing">listing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_dataset`<sup>Required</sup> <a name="linked_dataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset"></a>

```python
linked_dataset: str
```

- *Type:* str

---

##### `linked_pubsub_subscription`<sup>Required</sup> <a name="linked_pubsub_subscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription"></a>

```python
linked_pubsub_subscription: str
```

- *Type:* str

---

##### `listing`<sup>Required</sup> <a name="listing" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.listing"></a>

```python
listing: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap</a>

---


### BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList <a name="BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedDataset">linked_dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedPubsubSubscription">linked_pubsub_subscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.listing">listing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources">BigqueryAnalyticsHubListingSubscriptionLinkedResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_dataset`<sup>Required</sup> <a name="linked_dataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedDataset"></a>

```python
linked_dataset: str
```

- *Type:* str

---

##### `linked_pubsub_subscription`<sup>Required</sup> <a name="linked_pubsub_subscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedPubsubSubscription"></a>

```python
linked_pubsub_subscription: str
```

- *Type:* str

---

##### `listing`<sup>Required</sup> <a name="listing" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.listing"></a>

```python
listing: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingSubscriptionLinkedResources
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources">BigqueryAnalyticsHubListingSubscriptionLinkedResources</a>

---


### BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_listing_subscription

bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BigqueryAnalyticsHubListingSubscriptionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a>

---



