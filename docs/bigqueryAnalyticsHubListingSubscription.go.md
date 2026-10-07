# `bigqueryAnalyticsHubListingSubscription` Submodule <a name="`bigqueryAnalyticsHubListingSubscription` Submodule" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubListingSubscription <a name="BigqueryAnalyticsHubListingSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription google_bigquery_analytics_hub_listing_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscription(scope Construct, id *string, config BigqueryAnalyticsHubListingSubscriptionConfig) BigqueryAnalyticsHubListingSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig">BigqueryAnalyticsHubListingSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig">BigqueryAnalyticsHubListingSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset">PutDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription">PutDestinationPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationDataset">ResetDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationPubsubSubscription">ResetDestinationPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationDataset` <a name="PutDestinationDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset"></a>

```go
func PutDestinationDataset(value BigqueryAnalyticsHubListingSubscriptionDestinationDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationDataset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

---

##### `PutDestinationPubsubSubscription` <a name="PutDestinationPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription"></a>

```go
func PutDestinationPubsubSubscription(value BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putDestinationPubsubSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putTimeouts"></a>

```go
func PutTimeouts(value BigqueryAnalyticsHubListingSubscriptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDestinationDataset` <a name="ResetDestinationDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationDataset"></a>

```go
func ResetDestinationDataset()
```

##### `ResetDestinationPubsubSubscription` <a name="ResetDestinationPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetDestinationPubsubSubscription"></a>

```go
func ResetDestinationPubsubSubscription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryAnalyticsHubListingSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscription_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BigqueryAnalyticsHubListingSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigqueryAnalyticsHubListingSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigqueryAnalyticsHubListingSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubListingSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.commercialInfo">CommercialInfo</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDataset">DestinationDataset</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscription">DestinationPubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lastModifyTime">LastModifyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedDatasetMap">LinkedDatasetMap</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedResources">LinkedResources</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList">BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.logLinkedDatasetQueryUserEmail">LogLinkedDatasetQueryUserEmail</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationDisplayName">OrganizationDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriberContact">SubscriberContact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference">BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDatasetInput">DestinationDatasetInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscriptionInput">DestinationPubsubSubscriptionInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingIdInput">ListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommercialInfo`<sup>Required</sup> <a name="CommercialInfo" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.commercialInfo"></a>

```go
func CommercialInfo() BigqueryAnalyticsHubListingSubscriptionCommercialInfoList
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DestinationDataset`<sup>Required</sup> <a name="DestinationDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDataset"></a>

```go
func DestinationDataset() BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference</a>

---

##### `DestinationPubsubSubscription`<sup>Required</sup> <a name="DestinationPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscription"></a>

```go
func DestinationPubsubSubscription() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference</a>

---

##### `LastModifyTime`<sup>Required</sup> <a name="LastModifyTime" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.lastModifyTime"></a>

```go
func LastModifyTime() *string
```

- *Type:* *string

---

##### `LinkedDatasetMap`<sup>Required</sup> <a name="LinkedDatasetMap" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedDatasetMap"></a>

```go
func LinkedDatasetMap() BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList</a>

---

##### `LinkedResources`<sup>Required</sup> <a name="LinkedResources" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.linkedResources"></a>

```go
func LinkedResources() BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList">BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList</a>

---

##### `LogLinkedDatasetQueryUserEmail`<sup>Required</sup> <a name="LogLinkedDatasetQueryUserEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.logLinkedDatasetQueryUserEmail"></a>

```go
func LogLinkedDatasetQueryUserEmail() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrganizationDisplayName`<sup>Required</sup> <a name="OrganizationDisplayName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationDisplayName"></a>

```go
func OrganizationDisplayName() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubscriberContact`<sup>Required</sup> <a name="SubscriberContact" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriberContact"></a>

```go
func SubscriberContact() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeouts"></a>

```go
func Timeouts() BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference">BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference</a>

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeIdInput"></a>

```go
func DataExchangeIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DestinationDatasetInput`<sup>Optional</sup> <a name="DestinationDatasetInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationDatasetInput"></a>

```go
func DestinationDatasetInput() BigqueryAnalyticsHubListingSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

---

##### `DestinationPubsubSubscriptionInput`<sup>Optional</sup> <a name="DestinationPubsubSubscriptionInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.destinationPubsubSubscriptionInput"></a>

```go
func DestinationPubsubSubscriptionInput() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingIdInput"></a>

```go
func ListingIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.dataExchangeId"></a>

```go
func DataExchangeId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubListingSubscriptionCommercialInfo <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfo" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo {

}
```


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace {

}
```


### BigqueryAnalyticsHubListingSubscriptionConfig <a name="BigqueryAnalyticsHubListingSubscriptionConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataExchangeId: *string,
	ListingId: *string,
	Location: *string,
	DeletionPolicy: *string,
	DestinationDataset: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset,
	DestinationPubsubSubscription: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.listingId">ListingId</a></code> | <code>*string</code> | The ID of the listing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location of the data exchange. Distinct from the location of the destination data set. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationDataset">DestinationDataset</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationPubsubSubscription">DestinationPubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | destination_pubsub_subscription block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#id BigqueryAnalyticsHubListingSubscription#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project BigqueryAnalyticsHubListingSubscription#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.dataExchangeId"></a>

```go
DataExchangeId *string
```

- *Type:* *string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#data_exchange_id BigqueryAnalyticsHubListingSubscription#data_exchange_id}

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.listingId"></a>

```go
ListingId *string
```

- *Type:* *string

The ID of the listing.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#listing_id BigqueryAnalyticsHubListingSubscription#listing_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location of the data exchange. Distinct from the location of the destination data set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#location BigqueryAnalyticsHubListingSubscription#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#deletion_policy BigqueryAnalyticsHubListingSubscription#deletion_policy}

---

##### `DestinationDataset`<sup>Optional</sup> <a name="DestinationDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationDataset"></a>

```go
DestinationDataset BigqueryAnalyticsHubListingSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#destination_dataset BigqueryAnalyticsHubListingSubscription#destination_dataset}

---

##### `DestinationPubsubSubscription`<sup>Optional</sup> <a name="DestinationPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.destinationPubsubSubscription"></a>

```go
DestinationPubsubSubscription BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

destination_pubsub_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#destination_pubsub_subscription BigqueryAnalyticsHubListingSubscription#destination_pubsub_subscription}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#id BigqueryAnalyticsHubListingSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project BigqueryAnalyticsHubListingSubscription#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionConfig.property.timeouts"></a>

```go
Timeouts BigqueryAnalyticsHubListingSubscriptionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts">BigqueryAnalyticsHubListingSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#timeouts BigqueryAnalyticsHubListingSubscription#timeouts}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationDataset <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset {
	DatasetReference: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference,
	Location: *string,
	Description: *string,
	FriendlyName: *string,
	Labels: *map[string]*string,
	ReplicaLocations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.datasetReference">DatasetReference</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | dataset_reference block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.location">Location</a></code> | <code>*string</code> | The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.description">Description</a></code> | <code>*string</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this dataset. You can use these to organize and group your datasets. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.replicaLocations">ReplicaLocations</a></code> | <code>*[]*string</code> | List of regions where the subscriber wants dataset replicas. |

---

##### `DatasetReference`<sup>Required</sup> <a name="DatasetReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.datasetReference"></a>

```go
DatasetReference BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dataset_reference BigqueryAnalyticsHubListingSubscription#dataset_reference}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#location BigqueryAnalyticsHubListingSubscription#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.description"></a>

```go
Description *string
```

- *Type:* *string

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#description BigqueryAnalyticsHubListingSubscription#description}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#friendly_name BigqueryAnalyticsHubListingSubscription#friendly_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#labels BigqueryAnalyticsHubListingSubscription#labels}

---

##### `ReplicaLocations`<sup>Optional</sup> <a name="ReplicaLocations" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset.property.replicaLocations"></a>

```go
ReplicaLocations *[]*string
```

- *Type:* *[]*string

List of regions where the subscriber wants dataset replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#replica_locations BigqueryAnalyticsHubListingSubscription#replica_locations}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference {
	DatasetId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this dataset. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

A unique ID for this dataset, without the project name.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dataset_id BigqueryAnalyticsHubListingSubscription#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#project_id BigqueryAnalyticsHubListingSubscription#project_id}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription {
	PubsubSubscription: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.property.pubsubSubscription">PubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | pubsub_subscription block. |

---

##### `PubsubSubscription`<sup>Required</sup> <a name="PubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription.property.pubsubSubscription"></a>

```go
PubsubSubscription BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

pubsub_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#pubsub_subscription BigqueryAnalyticsHubListingSubscription#pubsub_subscription}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription {
	Name: *string,
	AckDeadlineSeconds: *f64,
	BigqueryConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig,
	CloudStorageConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig,
	DeadLetterPolicy: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy,
	Detached: interface{},
	EnableExactlyOnceDelivery: interface{},
	EnableMessageOrdering: interface{},
	ExpirationPolicy: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy,
	Filter: *string,
	Labels: *map[string]*string,
	MessageRetentionDuration: *string,
	PushConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig,
	RetainAckedMessages: interface{},
	RetryPolicy: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.name">Name</a></code> | <code>*string</code> | Name of the subscription. Format is 'projects/{project}/subscriptions/{sub}'. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.ackDeadlineSeconds">AckDeadlineSeconds</a></code> | <code>*f64</code> | The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.bigqueryConfig">BigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.cloudStorageConfig">CloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.deadLetterPolicy">DeadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.detached">Detached</a></code> | <code>interface{}</code> | Indicates whether the subscription is detached from its topic. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableExactlyOnceDelivery">EnableExactlyOnceDelivery</a></code> | <code>interface{}</code> | If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of 'message_id' on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableMessageOrdering">EnableMessageOrdering</a></code> | <code>interface{}</code> | If true, messages published with the same 'ordering_key' in 'PubsubMessage' will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.expirationPolicy">ExpirationPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.filter">Filter</a></code> | <code>*string</code> | An expression written in the Pub/Sub filter language. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.labels">Labels</a></code> | <code>*map[string]*string</code> | See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels). |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.messageRetentionDuration">MessageRetentionDuration</a></code> | <code>*string</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.pushConfig">PushConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retainAckedMessages">RetainAckedMessages</a></code> | <code>interface{}</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the subscription. Format is 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#name BigqueryAnalyticsHubListingSubscription#name}

---

##### `AckDeadlineSeconds`<sup>Optional</sup> <a name="AckDeadlineSeconds" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.ackDeadlineSeconds"></a>

```go
AckDeadlineSeconds *f64
```

- *Type:* *f64

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

##### `BigqueryConfig`<sup>Optional</sup> <a name="BigqueryConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.bigqueryConfig"></a>

```go
BigqueryConfig BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#bigquery_config BigqueryAnalyticsHubListingSubscription#bigquery_config}

---

##### `CloudStorageConfig`<sup>Optional</sup> <a name="CloudStorageConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.cloudStorageConfig"></a>

```go
CloudStorageConfig BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#cloud_storage_config BigqueryAnalyticsHubListingSubscription#cloud_storage_config}

---

##### `DeadLetterPolicy`<sup>Optional</sup> <a name="DeadLetterPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.deadLetterPolicy"></a>

```go
DeadLetterPolicy BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dead_letter_policy BigqueryAnalyticsHubListingSubscription#dead_letter_policy}

---

##### `Detached`<sup>Optional</sup> <a name="Detached" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.detached"></a>

```go
Detached interface{}
```

- *Type:* interface{}

Indicates whether the subscription is detached from its topic.

Detached subscriptions don't
receive messages from their topic and don't retain any backlog. 'Pull' and 'StreamingPull'
requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes
to the endpoint will not be made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#detached BigqueryAnalyticsHubListingSubscription#detached}

---

##### `EnableExactlyOnceDelivery`<sup>Optional</sup> <a name="EnableExactlyOnceDelivery" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableExactlyOnceDelivery"></a>

```go
EnableExactlyOnceDelivery interface{}
```

- *Type:* interface{}

If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of 'message_id' on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

An acknowledged message will
not be resent to a subscriber. Note that subscribers may still receive multiple copies of a
message when 'enableExactlyOnceDelivery' is true if the message was published multiple times by
a publisher client. These copies are considered distinct by Pub/Sub and have distinct 'message_id'
values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#enable_exactly_once_delivery BigqueryAnalyticsHubListingSubscription#enable_exactly_once_delivery}

---

##### `EnableMessageOrdering`<sup>Optional</sup> <a name="EnableMessageOrdering" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.enableMessageOrdering"></a>

```go
EnableMessageOrdering interface{}
```

- *Type:* interface{}

If true, messages published with the same 'ordering_key' in 'PubsubMessage' will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#enable_message_ordering BigqueryAnalyticsHubListingSubscription#enable_message_ordering}

---

##### `ExpirationPolicy`<sup>Optional</sup> <a name="ExpirationPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.expirationPolicy"></a>

```go
ExpirationPolicy BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#expiration_policy BigqueryAnalyticsHubListingSubscription#expiration_policy}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

An expression written in the Pub/Sub filter language.

If non-empty, then only 'PubsubMessage's
whose 'attributes' field matches the filter are delivered on this subscription. If empty, then
no messages are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filter BigqueryAnalyticsHubListingSubscription#filter}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#labels BigqueryAnalyticsHubListingSubscription#labels}

---

##### `MessageRetentionDuration`<sup>Optional</sup> <a name="MessageRetentionDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.messageRetentionDuration"></a>

```go
MessageRetentionDuration *string
```

- *Type:* *string

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If 'retainAckedMessages' is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a Seek can be done. Defaults
to 7 days. Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#message_retention_duration BigqueryAnalyticsHubListingSubscription#message_retention_duration}

---

##### `PushConfig`<sup>Optional</sup> <a name="PushConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.pushConfig"></a>

```go
PushConfig BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#push_config BigqueryAnalyticsHubListingSubscription#push_config}

---

##### `RetainAckedMessages`<sup>Optional</sup> <a name="RetainAckedMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retainAckedMessages"></a>

```go
RetainAckedMessages interface{}
```

- *Type:* interface{}

Indicates whether to retain acknowledged messages.

If true, then messages are not expunged from
the subscription's backlog, even if they are acknowledged, until they fall out of the
'messageRetentionDuration' window. This must be true if you would like to Seek to a timestamp
in the past to replay previously-acknowledged messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#retain_acked_messages BigqueryAnalyticsHubListingSubscription#retain_acked_messages}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription.property.retryPolicy"></a>

```go
RetryPolicy BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#retry_policy BigqueryAnalyticsHubListingSubscription#retry_policy}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig {
	DropUnknownFields: interface{},
	ServiceAccountEmail: *string,
	Table: *string,
	UseTableSchema: interface{},
	UseTopicSchema: interface{},
	WriteMetadata: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.dropUnknownFields">DropUnknownFields</a></code> | <code>interface{}</code> | When true and 'useTopicSchema' is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The service account to use to write to BigQuery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.table">Table</a></code> | <code>*string</code> | The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTableSchema">UseTableSchema</a></code> | <code>interface{}</code> | When true, use the BigQuery table's schema as the columns to write to in BigQuery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTopicSchema">UseTopicSchema</a></code> | <code>interface{}</code> | When true, use the topic's schema as the columns to write to in BigQuery, if it exists. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table. |

---

##### `DropUnknownFields`<sup>Optional</sup> <a name="DropUnknownFields" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.dropUnknownFields"></a>

```go
DropUnknownFields interface{}
```

- *Type:* interface{}

When true and 'useTopicSchema' is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas
must be kept in sync and any messages with extra fields are not written and remain in the
subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#drop_unknown_fields BigqueryAnalyticsHubListingSubscription#drop_unknown_fields}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The service account to use to write to BigQuery.

The subscription creator or updater that
specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
If not specified, the Pub/Sub service agent,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.table"></a>

```go
Table *string
```

- *Type:* *string

The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#table BigqueryAnalyticsHubListingSubscription#table}

---

##### `UseTableSchema`<sup>Optional</sup> <a name="UseTableSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTableSchema"></a>

```go
UseTableSchema interface{}
```

- *Type:* interface{}

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

'useTableSchema' and 'useTopicSchema' cannot be enabled at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_table_schema BigqueryAnalyticsHubListingSubscription#use_table_schema}

---

##### `UseTopicSchema`<sup>Optional</sup> <a name="UseTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.useTopicSchema"></a>

```go
UseTopicSchema interface{}
```

- *Type:* interface{}

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

'useTopicSchema' and 'useTableSchema' cannot be enabled at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_topic_schema BigqueryAnalyticsHubListingSubscription#use_topic_schema}

---

##### `WriteMetadata`<sup>Optional</sup> <a name="WriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig.property.writeMetadata"></a>

```go
WriteMetadata interface{}
```

- *Type:* interface{}

When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table.

The subscription name, message_id, and publish_time fields
are put in their own columns while all other message properties (other than data) are written
to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig {
	AvroConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig,
	Bucket: *string,
	FilenameDatetimeFormat: *string,
	FilenamePrefix: *string,
	FilenameSuffix: *string,
	MaxBytes: *string,
	MaxDuration: *string,
	MaxMessages: *string,
	ServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.avroConfig">AvroConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | avro_config block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.bucket">Bucket</a></code> | <code>*string</code> | User-provided name for the Cloud Storage bucket. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat">FilenameDatetimeFormat</a></code> | <code>*string</code> | User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names). |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenamePrefix">FilenamePrefix</a></code> | <code>*string</code> | User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameSuffix">FilenameSuffix</a></code> | <code>*string</code> | User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/". |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxBytes">MaxBytes</a></code> | <code>*string</code> | The maximum bytes that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxDuration">MaxDuration</a></code> | <code>*string</code> | The maximum duration that can elapse before a new Cloud Storage file is created. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxMessages">MaxMessages</a></code> | <code>*string</code> | The maximum number of messages that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | The service account to use to write to Cloud Storage. |

---

##### `AvroConfig`<sup>Optional</sup> <a name="AvroConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.avroConfig"></a>

```go
AvroConfig BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#avro_config BigqueryAnalyticsHubListingSubscription#avro_config}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user.
The bucket name must be without any prefix like "gs://". See the
[bucket naming requirements](https://cloud.google.com/storage/docs/buckets#naming).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#bucket BigqueryAnalyticsHubListingSubscription#bucket}

---

##### `FilenameDatetimeFormat`<sup>Optional</sup> <a name="FilenameDatetimeFormat" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat"></a>

```go
FilenameDatetimeFormat *string
```

- *Type:* *string

User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_datetime_format BigqueryAnalyticsHubListingSubscription#filename_datetime_format}

---

##### `FilenamePrefix`<sup>Optional</sup> <a name="FilenamePrefix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenamePrefix"></a>

```go
FilenamePrefix *string
```

- *Type:* *string

User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_prefix BigqueryAnalyticsHubListingSubscription#filename_prefix}

---

##### `FilenameSuffix`<sup>Optional</sup> <a name="FilenameSuffix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.filenameSuffix"></a>

```go
FilenameSuffix *string
```

- *Type:* *string

User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_suffix BigqueryAnalyticsHubListingSubscription#filename_suffix}

---

##### `MaxBytes`<sup>Optional</sup> <a name="MaxBytes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxBytes"></a>

```go
MaxBytes *string
```

- *Type:* *string

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB. The maxBytes limit may be exceeded in cases where messages are larger
than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_bytes BigqueryAnalyticsHubListingSubscription#max_bytes}

---

##### `MaxDuration`<sup>Optional</sup> <a name="MaxDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxDuration"></a>

```go
MaxDuration *string
```

- *Type:* *string

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription's
acknowledgement deadline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_duration BigqueryAnalyticsHubListingSubscription#max_duration}

---

##### `MaxMessages`<sup>Optional</sup> <a name="MaxMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.maxMessages"></a>

```go
MaxMessages *string
```

- *Type:* *string

The maximum number of messages that can be written to a Cloud Storage file before a new file is created.

Min 1000 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_messages BigqueryAnalyticsHubListingSubscription#max_messages}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

The service account to use to write to Cloud Storage.

The subscription creator or updater that
specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
If not specified, the Pub/Sub service agent,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig {
	UseTopicSchema: interface{},
	WriteMetadata: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema">UseTopicSchema</a></code> | <code>interface{}</code> | When true, the output Cloud Storage file will be serialized using the topic schema, if it exists. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. |

---

##### `UseTopicSchema`<sup>Optional</sup> <a name="UseTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.useTopicSchema"></a>

```go
UseTopicSchema interface{}
```

- *Type:* interface{}

When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_topic_schema BigqueryAnalyticsHubListingSubscription#use_topic_schema}

---

##### `WriteMetadata`<sup>Optional</sup> <a name="WriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata"></a>

```go
WriteMetadata interface{}
```

- *Type:* interface{}

When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output.

The subscription name, message_id, and publish_time fields
are put in their own fields while all other message properties other than data (for example,
an ordering_key, if present) are added as entries in the attributes map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy {
	DeadLetterTopic: *string,
	MaxDeliveryAttempts: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic">DeadLetterTopic</a></code> | <code>*string</code> | The name of the topic to which dead letter messages should be published. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>*f64</code> | The maximum number of delivery attempts for any message. |

---

##### `DeadLetterTopic`<sup>Optional</sup> <a name="DeadLetterTopic" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic"></a>

```go
DeadLetterTopic *string
```

- *Type:* *string

The name of the topic to which dead letter messages should be published.

Format is
'projects/{project}/topics/{topic}'. The Pub/Sub service account associated with the enclosing
subscription's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com)
must have permission to Publish() to this topic. The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic since messages published to
a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#dead_letter_topic BigqueryAnalyticsHubListingSubscription#dead_letter_topic}

---

##### `MaxDeliveryAttempts`<sup>Optional</sup> <a name="MaxDeliveryAttempts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts"></a>

```go
MaxDeliveryAttempts *f64
```

- *Type:* *f64

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

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy {
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy.property.ttl">Ttl</a></code> | <code>*string</code> | Specifies the "time-to-live" duration for an associated resource. |

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Specifies the "time-to-live" duration for an associated resource.

The resource expires if it
is not active for a period of 'ttl'. The definition of "activity" depends on the type of the
associated resource. The minimum and maximum allowed values for 'ttl' depend on the type of
the associated resource, as well. If 'ttl' is not set, the associated resource never expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#ttl BigqueryAnalyticsHubListingSubscription#ttl}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig {
	Attributes: *map[string]*string,
	NoWrapper: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper,
	OidcToken: github.com/cdktn-io/cdktn-provider-google-go/google/v21.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken,
	PushEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.attributes">Attributes</a></code> | <code>*map[string]*string</code> | Endpoint configuration attributes that can be used to control different aspects of the message delivery. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.noWrapper">NoWrapper</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | no_wrapper block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.pushEndpoint">PushEndpoint</a></code> | <code>*string</code> | A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use 'https://example.com/push'. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.attributes"></a>

```go
Attributes *map[string]*string
```

- *Type:* *map[string]*string

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

##### `NoWrapper`<sup>Optional</sup> <a name="NoWrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.noWrapper"></a>

```go
NoWrapper BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#no_wrapper BigqueryAnalyticsHubListingSubscription#no_wrapper}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.oidcToken"></a>

```go
OidcToken BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#oidc_token BigqueryAnalyticsHubListingSubscription#oidc_token}

---

##### `PushEndpoint`<sup>Optional</sup> <a name="PushEndpoint" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig.property.pushEndpoint"></a>

```go
PushEndpoint *string
```

- *Type:* *string

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use 'https://example.com/push'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#push_endpoint BigqueryAnalyticsHubListingSubscription#push_endpoint}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper {
	WriteMetadata: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. |

---

##### `WriteMetadata`<sup>Optional</sup> <a name="WriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper.property.writeMetadata"></a>

```go
WriteMetadata interface{}
```

- *Type:* interface{}

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken {
	Audience: *string,
	ServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.audience">Audience</a></code> | <code>*string</code> | Audience to be used when generating OIDC token. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Service account email used for generating the OIDC token. For more information on setting up authentication, see Push subscriptions. |

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience to be used when generating OIDC token.

The audience claim identifies the recipients
that the JWT is intended for. The audience value is a single case-sensitive string. Having
multiple values (array) for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified,
the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#audience BigqueryAnalyticsHubListingSubscription#audience}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Service account email used for generating the OIDC token. For more information on setting up authentication, see Push subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}

---

### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy {
	MaximumBackoff: *string,
	MinimumBackoff: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.maximumBackoff">MaximumBackoff</a></code> | <code>*string</code> | The maximum delay between consecutive deliveries of a given message. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.minimumBackoff">MinimumBackoff</a></code> | <code>*string</code> | The minimum delay between consecutive deliveries of a given message. |

---

##### `MaximumBackoff`<sup>Optional</sup> <a name="MaximumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.maximumBackoff"></a>

```go
MaximumBackoff *string
```

- *Type:* *string

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#maximum_backoff BigqueryAnalyticsHubListingSubscription#maximum_backoff}

---

##### `MinimumBackoff`<sup>Optional</sup> <a name="MinimumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy.property.minimumBackoff"></a>

```go
MinimumBackoff *string
```

- *Type:* *string

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#minimum_backoff BigqueryAnalyticsHubListingSubscription#minimum_backoff}

---

### BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap <a name="BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap {

}
```


### BigqueryAnalyticsHubListingSubscriptionLinkedResources <a name="BigqueryAnalyticsHubListingSubscriptionLinkedResources" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources {

}
```


### BigqueryAnalyticsHubListingSubscriptionTimeouts <a name="BigqueryAnalyticsHubListingSubscriptionTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

&bigqueryanalyticshublistingsubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#create BigqueryAnalyticsHubListingSubscription#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#delete BigqueryAnalyticsHubListingSubscription#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#create BigqueryAnalyticsHubListingSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_analytics_hub_listing_subscription#delete BigqueryAnalyticsHubListingSubscription#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get"></a>

```go
func Get(index *f64) BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace</a>

---


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoList <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionCommercialInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryAnalyticsHubListingSubscriptionCommercialInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get"></a>

```go
func Get(index *f64) BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.cloudMarketplace">CloudMarketplace</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo">BigqueryAnalyticsHubListingSubscriptionCommercialInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudMarketplace`<sup>Required</sup> <a name="CloudMarketplace" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.cloudMarketplace"></a>

```go
func CloudMarketplace() BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList">BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionCommercialInfo
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionCommercialInfo">BigqueryAnalyticsHubListingSubscriptionCommercialInfo</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference">PutDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetReplicaLocations">ResetReplicaLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetReference` <a name="PutDatasetReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference"></a>

```go
func PutDatasetReference(value BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.putDatasetReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetReplicaLocations` <a name="ResetReplicaLocations" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.resetReplicaLocations"></a>

```go
func ResetReplicaLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReference">DatasetReference</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput">DatasetReferenceInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocationsInput">ReplicaLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocations">ReplicaLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetReference`<sup>Required</sup> <a name="DatasetReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReference"></a>

```go
func DatasetReference() BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference</a>

---

##### `DatasetReferenceInput`<sup>Optional</sup> <a name="DatasetReferenceInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput"></a>

```go
func DatasetReferenceInput() BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference">BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ReplicaLocationsInput`<sup>Optional</sup> <a name="ReplicaLocationsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocationsInput"></a>

```go
func ReplicaLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ReplicaLocations`<sup>Required</sup> <a name="ReplicaLocations" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.replicaLocations"></a>

```go
func ReplicaLocations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationDataset">BigqueryAnalyticsHubListingSubscriptionDestinationDataset</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription">PutPubsubSubscription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsubSubscription` <a name="PutPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription"></a>

```go
func PutPubsubSubscription(value BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.putPubsubSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscription">PubsubSubscription</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscriptionInput">PubsubSubscriptionInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PubsubSubscription`<sup>Required</sup> <a name="PubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscription"></a>

```go
func PubsubSubscription() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference</a>

---

##### `PubsubSubscriptionInput`<sup>Optional</sup> <a name="PubsubSubscriptionInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.pubsubSubscriptionInput"></a>

```go
func PubsubSubscriptionInput() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields">ResetDropUnknownFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema">ResetUseTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema">ResetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata">ResetWriteMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDropUnknownFields` <a name="ResetDropUnknownFields" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields"></a>

```go
func ResetDropUnknownFields()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetTable` <a name="ResetTable" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetTable"></a>

```go
func ResetTable()
```

##### `ResetUseTableSchema` <a name="ResetUseTableSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema"></a>

```go
func ResetUseTableSchema()
```

##### `ResetUseTopicSchema` <a name="ResetUseTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema"></a>

```go
func ResetUseTopicSchema()
```

##### `ResetWriteMetadata` <a name="ResetWriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata"></a>

```go
func ResetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput">DropUnknownFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.tableInput">TableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput">UseTableSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput">UseTopicSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">DropUnknownFields</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema">UseTableSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">UseTopicSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DropUnknownFieldsInput`<sup>Optional</sup> <a name="DropUnknownFieldsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput"></a>

```go
func DropUnknownFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.tableInput"></a>

```go
func TableInput() *string
```

- *Type:* *string

---

##### `UseTableSchemaInput`<sup>Optional</sup> <a name="UseTableSchemaInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput"></a>

```go
func UseTableSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `UseTopicSchemaInput`<sup>Optional</sup> <a name="UseTopicSchemaInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput"></a>

```go
func UseTopicSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput"></a>

```go
func WriteMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `DropUnknownFields`<sup>Required</sup> <a name="DropUnknownFields" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```go
func DropUnknownFields() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `UseTableSchema`<sup>Required</sup> <a name="UseTableSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema"></a>

```go
func UseTableSchema() interface{}
```

- *Type:* interface{}

---

##### `UseTopicSchema`<sup>Required</sup> <a name="UseTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```go
func UseTopicSchema() interface{}
```

- *Type:* interface{}

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```go
func WriteMetadata() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema">ResetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata">ResetWriteMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseTopicSchema` <a name="ResetUseTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetUseTopicSchema"></a>

```go
func ResetUseTopicSchema()
```

##### `ResetWriteMetadata` <a name="ResetWriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata"></a>

```go
func ResetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput">UseTopicSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema">UseTopicSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UseTopicSchemaInput`<sup>Optional</sup> <a name="UseTopicSchemaInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchemaInput"></a>

```go
func UseTopicSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput"></a>

```go
func WriteMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `UseTopicSchema`<sup>Required</sup> <a name="UseTopicSchema" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema"></a>

```go
func UseTopicSchema() interface{}
```

- *Type:* interface{}

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata"></a>

```go
func WriteMetadata() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig">PutAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig">ResetAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat">ResetFilenameDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix">ResetFilenamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix">ResetFilenameSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes">ResetMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration">ResetMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages">ResetMaxMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvroConfig` <a name="PutAvroConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig"></a>

```go
func PutAvroConfig(value BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `ResetAvroConfig` <a name="ResetAvroConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig"></a>

```go
func ResetAvroConfig()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetFilenameDatetimeFormat` <a name="ResetFilenameDatetimeFormat" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat"></a>

```go
func ResetFilenameDatetimeFormat()
```

##### `ResetFilenamePrefix` <a name="ResetFilenamePrefix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix"></a>

```go
func ResetFilenamePrefix()
```

##### `ResetFilenameSuffix` <a name="ResetFilenameSuffix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix"></a>

```go
func ResetFilenameSuffix()
```

##### `ResetMaxBytes` <a name="ResetMaxBytes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes"></a>

```go
func ResetMaxBytes()
```

##### `ResetMaxDuration` <a name="ResetMaxDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration"></a>

```go
func ResetMaxDuration()
```

##### `ResetMaxMessages` <a name="ResetMaxMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetMaxMessages"></a>

```go
func ResetMaxMessages()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig">AvroConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput">AvroConfigInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput">FilenameDatetimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput">FilenamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput">FilenameSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput">MaxBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput">MaxDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput">MaxMessagesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat">FilenameDatetimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix">FilenamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix">FilenameSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes">MaxBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration">MaxDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages">MaxMessages</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvroConfig`<sup>Required</sup> <a name="AvroConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig"></a>

```go
func AvroConfig() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a>

---

##### `AvroConfigInput`<sup>Optional</sup> <a name="AvroConfigInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput"></a>

```go
func AvroConfigInput() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `FilenameDatetimeFormatInput`<sup>Optional</sup> <a name="FilenameDatetimeFormatInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput"></a>

```go
func FilenameDatetimeFormatInput() *string
```

- *Type:* *string

---

##### `FilenamePrefixInput`<sup>Optional</sup> <a name="FilenamePrefixInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput"></a>

```go
func FilenamePrefixInput() *string
```

- *Type:* *string

---

##### `FilenameSuffixInput`<sup>Optional</sup> <a name="FilenameSuffixInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput"></a>

```go
func FilenameSuffixInput() *string
```

- *Type:* *string

---

##### `MaxBytesInput`<sup>Optional</sup> <a name="MaxBytesInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput"></a>

```go
func MaxBytesInput() *string
```

- *Type:* *string

---

##### `MaxDurationInput`<sup>Optional</sup> <a name="MaxDurationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput"></a>

```go
func MaxDurationInput() *string
```

- *Type:* *string

---

##### `MaxMessagesInput`<sup>Optional</sup> <a name="MaxMessagesInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessagesInput"></a>

```go
func MaxMessagesInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `FilenameDatetimeFormat`<sup>Required</sup> <a name="FilenameDatetimeFormat" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat"></a>

```go
func FilenameDatetimeFormat() *string
```

- *Type:* *string

---

##### `FilenamePrefix`<sup>Required</sup> <a name="FilenamePrefix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix"></a>

```go
func FilenamePrefix() *string
```

- *Type:* *string

---

##### `FilenameSuffix`<sup>Required</sup> <a name="FilenameSuffix" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix"></a>

```go
func FilenameSuffix() *string
```

- *Type:* *string

---

##### `MaxBytes`<sup>Required</sup> <a name="MaxBytes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes"></a>

```go
func MaxBytes() *string
```

- *Type:* *string

---

##### `MaxDuration`<sup>Required</sup> <a name="MaxDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration"></a>

```go
func MaxDuration() *string
```

- *Type:* *string

---

##### `MaxMessages`<sup>Required</sup> <a name="MaxMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages"></a>

```go
func MaxMessages() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic">ResetDeadLetterTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts">ResetMaxDeliveryAttempts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeadLetterTopic` <a name="ResetDeadLetterTopic" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic"></a>

```go
func ResetDeadLetterTopic()
```

##### `ResetMaxDeliveryAttempts` <a name="ResetMaxDeliveryAttempts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts"></a>

```go
func ResetMaxDeliveryAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput">DeadLetterTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput">MaxDeliveryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">DeadLetterTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeadLetterTopicInput`<sup>Optional</sup> <a name="DeadLetterTopicInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput"></a>

```go
func DeadLetterTopicInput() *string
```

- *Type:* *string

---

##### `MaxDeliveryAttemptsInput`<sup>Optional</sup> <a name="MaxDeliveryAttemptsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```go
func MaxDeliveryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `DeadLetterTopic`<sup>Required</sup> <a name="DeadLetterTopic" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```go
func DeadLetterTopic() *string
```

- *Type:* *string

---

##### `MaxDeliveryAttempts`<sup>Required</sup> <a name="MaxDeliveryAttempts" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```go
func MaxDeliveryAttempts() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig">PutBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig">PutCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy">PutDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy">PutExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig">PutPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetAckDeadlineSeconds">ResetAckDeadlineSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetBigqueryConfig">ResetBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetCloudStorageConfig">ResetCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDeadLetterPolicy">ResetDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDetached">ResetDetached</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableExactlyOnceDelivery">ResetEnableExactlyOnceDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableMessageOrdering">ResetEnableMessageOrdering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetExpirationPolicy">ResetExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetMessageRetentionDuration">ResetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetPushConfig">ResetPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetainAckedMessages">ResetRetainAckedMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryConfig` <a name="PutBigqueryConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig"></a>

```go
func PutBigqueryConfig(value BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putBigqueryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

---

##### `PutCloudStorageConfig` <a name="PutCloudStorageConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig"></a>

```go
func PutCloudStorageConfig(value BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putCloudStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

---

##### `PutDeadLetterPolicy` <a name="PutDeadLetterPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy"></a>

```go
func PutDeadLetterPolicy(value BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putDeadLetterPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

---

##### `PutExpirationPolicy` <a name="PutExpirationPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy"></a>

```go
func PutExpirationPolicy(value BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

---

##### `PutPushConfig` <a name="PutPushConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig"></a>

```go
func PutPushConfig(value BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putPushConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy"></a>

```go
func PutRetryPolicy(value BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

---

##### `ResetAckDeadlineSeconds` <a name="ResetAckDeadlineSeconds" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetAckDeadlineSeconds"></a>

```go
func ResetAckDeadlineSeconds()
```

##### `ResetBigqueryConfig` <a name="ResetBigqueryConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetBigqueryConfig"></a>

```go
func ResetBigqueryConfig()
```

##### `ResetCloudStorageConfig` <a name="ResetCloudStorageConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetCloudStorageConfig"></a>

```go
func ResetCloudStorageConfig()
```

##### `ResetDeadLetterPolicy` <a name="ResetDeadLetterPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDeadLetterPolicy"></a>

```go
func ResetDeadLetterPolicy()
```

##### `ResetDetached` <a name="ResetDetached" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetDetached"></a>

```go
func ResetDetached()
```

##### `ResetEnableExactlyOnceDelivery` <a name="ResetEnableExactlyOnceDelivery" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableExactlyOnceDelivery"></a>

```go
func ResetEnableExactlyOnceDelivery()
```

##### `ResetEnableMessageOrdering` <a name="ResetEnableMessageOrdering" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetEnableMessageOrdering"></a>

```go
func ResetEnableMessageOrdering()
```

##### `ResetExpirationPolicy` <a name="ResetExpirationPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetExpirationPolicy"></a>

```go
func ResetExpirationPolicy()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMessageRetentionDuration` <a name="ResetMessageRetentionDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetMessageRetentionDuration"></a>

```go
func ResetMessageRetentionDuration()
```

##### `ResetPushConfig` <a name="ResetPushConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetPushConfig"></a>

```go
func ResetPushConfig()
```

##### `ResetRetainAckedMessages` <a name="ResetRetainAckedMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetainAckedMessages"></a>

```go
func ResetRetainAckedMessages()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.resetRetryPolicy"></a>

```go
func ResetRetryPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfig">BigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfig">CloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicy">DeadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicy">ExpirationPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfig">PushConfig</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSecondsInput">AckDeadlineSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfigInput">BigqueryConfigInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfigInput">CloudStorageConfigInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicyInput">DeadLetterPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detachedInput">DetachedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDeliveryInput">EnableExactlyOnceDeliveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrderingInput">EnableMessageOrderingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicyInput">ExpirationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDurationInput">MessageRetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfigInput">PushConfigInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessagesInput">RetainAckedMessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSeconds">AckDeadlineSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detached">Detached</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDelivery">EnableExactlyOnceDelivery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrdering">EnableMessageOrdering</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDuration">MessageRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessages">RetainAckedMessages</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BigqueryConfig`<sup>Required</sup> <a name="BigqueryConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfig"></a>

```go
func BigqueryConfig() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference</a>

---

##### `CloudStorageConfig`<sup>Required</sup> <a name="CloudStorageConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfig"></a>

```go
func CloudStorageConfig() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference</a>

---

##### `DeadLetterPolicy`<sup>Required</sup> <a name="DeadLetterPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicy"></a>

```go
func DeadLetterPolicy() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference</a>

---

##### `ExpirationPolicy`<sup>Required</sup> <a name="ExpirationPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicy"></a>

```go
func ExpirationPolicy() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference</a>

---

##### `PushConfig`<sup>Required</sup> <a name="PushConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfig"></a>

```go
func PushConfig() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicy"></a>

```go
func RetryPolicy() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference</a>

---

##### `AckDeadlineSecondsInput`<sup>Optional</sup> <a name="AckDeadlineSecondsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSecondsInput"></a>

```go
func AckDeadlineSecondsInput() *f64
```

- *Type:* *f64

---

##### `BigqueryConfigInput`<sup>Optional</sup> <a name="BigqueryConfigInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.bigqueryConfigInput"></a>

```go
func BigqueryConfigInput() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig</a>

---

##### `CloudStorageConfigInput`<sup>Optional</sup> <a name="CloudStorageConfigInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.cloudStorageConfigInput"></a>

```go
func CloudStorageConfigInput() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig</a>

---

##### `DeadLetterPolicyInput`<sup>Optional</sup> <a name="DeadLetterPolicyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.deadLetterPolicyInput"></a>

```go
func DeadLetterPolicyInput() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy</a>

---

##### `DetachedInput`<sup>Optional</sup> <a name="DetachedInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detachedInput"></a>

```go
func DetachedInput() interface{}
```

- *Type:* interface{}

---

##### `EnableExactlyOnceDeliveryInput`<sup>Optional</sup> <a name="EnableExactlyOnceDeliveryInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDeliveryInput"></a>

```go
func EnableExactlyOnceDeliveryInput() interface{}
```

- *Type:* interface{}

---

##### `EnableMessageOrderingInput`<sup>Optional</sup> <a name="EnableMessageOrderingInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrderingInput"></a>

```go
func EnableMessageOrderingInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationPolicyInput`<sup>Optional</sup> <a name="ExpirationPolicyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.expirationPolicyInput"></a>

```go
func ExpirationPolicyInput() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MessageRetentionDurationInput`<sup>Optional</sup> <a name="MessageRetentionDurationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDurationInput"></a>

```go
func MessageRetentionDurationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PushConfigInput`<sup>Optional</sup> <a name="PushConfigInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.pushConfigInput"></a>

```go
func PushConfigInput() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

---

##### `RetainAckedMessagesInput`<sup>Optional</sup> <a name="RetainAckedMessagesInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessagesInput"></a>

```go
func RetainAckedMessagesInput() interface{}
```

- *Type:* interface{}

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retryPolicyInput"></a>

```go
func RetryPolicyInput() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

---

##### `AckDeadlineSeconds`<sup>Required</sup> <a name="AckDeadlineSeconds" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.ackDeadlineSeconds"></a>

```go
func AckDeadlineSeconds() *f64
```

- *Type:* *f64

---

##### `Detached`<sup>Required</sup> <a name="Detached" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.detached"></a>

```go
func Detached() interface{}
```

- *Type:* interface{}

---

##### `EnableExactlyOnceDelivery`<sup>Required</sup> <a name="EnableExactlyOnceDelivery" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableExactlyOnceDelivery"></a>

```go
func EnableExactlyOnceDelivery() interface{}
```

- *Type:* interface{}

---

##### `EnableMessageOrdering`<sup>Required</sup> <a name="EnableMessageOrdering" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.enableMessageOrdering"></a>

```go
func EnableMessageOrdering() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MessageRetentionDuration`<sup>Required</sup> <a name="MessageRetentionDuration" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.messageRetentionDuration"></a>

```go
func MessageRetentionDuration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetainAckedMessages`<sup>Required</sup> <a name="RetainAckedMessages" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.retainAckedMessages"></a>

```go
func RetainAckedMessages() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resetWriteMetadata">ResetWriteMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWriteMetadata` <a name="ResetWriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.resetWriteMetadata"></a>

```go
func ResetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput"></a>

```go
func WriteMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata"></a>

```go
func WriteMetadata() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience"></a>

```go
func ResetAudience()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper">PutNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken">PutOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetNoWrapper">ResetNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetOidcToken">ResetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetPushEndpoint">ResetPushEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNoWrapper` <a name="PutNoWrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper"></a>

```go
func PutNoWrapper(value BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putNoWrapper.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

---

##### `PutOidcToken` <a name="PutOidcToken" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken"></a>

```go
func PutOidcToken(value BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetNoWrapper` <a name="ResetNoWrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetNoWrapper"></a>

```go
func ResetNoWrapper()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetOidcToken"></a>

```go
func ResetOidcToken()
```

##### `ResetPushEndpoint` <a name="ResetPushEndpoint" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.resetPushEndpoint"></a>

```go
func ResetPushEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapper">NoWrapper</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributesInput">AttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapperInput">NoWrapperInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput">OidcTokenInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput">PushEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributes">Attributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">PushEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NoWrapper`<sup>Required</sup> <a name="NoWrapper" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapper"></a>

```go
func NoWrapper() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference</a>

---

##### `OidcToken`<sup>Required</sup> <a name="OidcToken" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```go
func OidcToken() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributesInput"></a>

```go
func AttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NoWrapperInput`<sup>Optional</sup> <a name="NoWrapperInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.noWrapperInput"></a>

```go
func NoWrapperInput() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper</a>

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput"></a>

```go
func OidcTokenInput() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken</a>

---

##### `PushEndpointInput`<sup>Optional</sup> <a name="PushEndpointInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput"></a>

```go
func PushEndpointInput() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```go
func Attributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PushEndpoint`<sup>Required</sup> <a name="PushEndpoint" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```go
func PushEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig</a>

---


### BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff">ResetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff">ResetMinimumBackoff</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumBackoff` <a name="ResetMaximumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff"></a>

```go
func ResetMaximumBackoff()
```

##### `ResetMinimumBackoff` <a name="ResetMinimumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff"></a>

```go
func ResetMinimumBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput">MaximumBackoffInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput">MinimumBackoffInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">MaximumBackoff</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">MinimumBackoff</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBackoffInput`<sup>Optional</sup> <a name="MaximumBackoffInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput"></a>

```go
func MaximumBackoffInput() *string
```

- *Type:* *string

---

##### `MinimumBackoffInput`<sup>Optional</sup> <a name="MinimumBackoffInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput"></a>

```go
func MinimumBackoffInput() *string
```

- *Type:* *string

---

##### `MaximumBackoff`<sup>Required</sup> <a name="MaximumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```go
func MaximumBackoff() *string
```

- *Type:* *string

---

##### `MinimumBackoff`<sup>Required</sup> <a name="MinimumBackoff" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```go
func MinimumBackoff() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy">BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy</a>

---


### BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList <a name="BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get"></a>

```go
func Get(index *f64) BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset">LinkedDataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription">LinkedPubsubSubscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.listing">Listing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedDataset`<sup>Required</sup> <a name="LinkedDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset"></a>

```go
func LinkedDataset() *string
```

- *Type:* *string

---

##### `LinkedPubsubSubscription`<sup>Required</sup> <a name="LinkedPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription"></a>

```go
func LinkedPubsubSubscription() *string
```

- *Type:* *string

---

##### `Listing`<sup>Required</sup> <a name="Listing" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.listing"></a>

```go
func Listing() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap">BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap</a>

---


### BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList <a name="BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionLinkedResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get"></a>

```go
func Get(index *f64) BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedDataset">LinkedDataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedPubsubSubscription">LinkedPubsubSubscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.listing">Listing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources">BigqueryAnalyticsHubListingSubscriptionLinkedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedDataset`<sup>Required</sup> <a name="LinkedDataset" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedDataset"></a>

```go
func LinkedDataset() *string
```

- *Type:* *string

---

##### `LinkedPubsubSubscription`<sup>Required</sup> <a name="LinkedPubsubSubscription" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.linkedPubsubSubscription"></a>

```go
func LinkedPubsubSubscription() *string
```

- *Type:* *string

---

##### `Listing`<sup>Required</sup> <a name="Listing" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.listing"></a>

```go
func Listing() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingSubscriptionLinkedResources
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionLinkedResources">BigqueryAnalyticsHubListingSubscriptionLinkedResources</a>

---


### BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference <a name="BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/bigqueryanalyticshublistingsubscription"

bigqueryanalyticshublistingsubscription.NewBigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubListingSubscription.BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



