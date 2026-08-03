# `dataplexMetadataFeed` Submodule <a name="`dataplexMetadataFeed` Submodule" id="@cdktn/provider-google.dataplexMetadataFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexMetadataFeed <a name="DataplexMetadataFeed" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed google_dataplex_metadata_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

dataplexmetadatafeed.NewDataplexMetadataFeed(scope Construct, id *string, config DataplexMetadataFeedConfig) DataplexMetadataFeed
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig">DataplexMetadataFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig">DataplexMetadataFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetPubsubTopic">ResetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters"></a>

```go
func PutFilters(value DataplexMetadataFeedFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope"></a>

```go
func PutScope(value DataplexMetadataFeedScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts"></a>

```go
func PutTimeouts(value DataplexMetadataFeedTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPubsubTopic` <a name="ResetPubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetPubsubTopic"></a>

```go
func ResetPubsubTopic()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexMetadataFeed resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

dataplexmetadatafeed.DataplexMetadataFeed_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

dataplexmetadatafeed.DataplexMetadataFeed_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

dataplexmetadatafeed.DataplexMetadataFeed_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

dataplexmetadatafeed.DataplexMetadataFeed_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataplexMetadataFeed resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataplexMetadataFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataplexMetadataFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataplexMetadataFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference">DataplexMetadataFeedFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference">DataplexMetadataFeedScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference">DataplexMetadataFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedIdInput">MetadataFeedIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedId">MetadataFeedId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filters"></a>

```go
func Filters() DataplexMetadataFeedFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference">DataplexMetadataFeedFiltersOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scope"></a>

```go
func Scope() DataplexMetadataFeedScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference">DataplexMetadataFeedScopeOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeouts"></a>

```go
func Timeouts() DataplexMetadataFeedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference">DataplexMetadataFeedTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filtersInput"></a>

```go
func FiltersInput() DataplexMetadataFeedFilters
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetadataFeedIdInput`<sup>Optional</sup> <a name="MetadataFeedIdInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedIdInput"></a>

```go
func MetadataFeedIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopicInput"></a>

```go
func PubsubTopicInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scopeInput"></a>

```go
func ScopeInput() DataplexMetadataFeedScope
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MetadataFeedId`<sup>Required</sup> <a name="MetadataFeedId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedId"></a>

```go
func MetadataFeedId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexMetadataFeedConfig <a name="DataplexMetadataFeedConfig" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

&dataplexmetadatafeed.DataplexMetadataFeedConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MetadataFeedId: *string,
	Scope: github.com/cdktn-io/cdktn-provider-google-go/google/v19.dataplexMetadataFeed.DataplexMetadataFeedScope,
	DeletionPolicy: *string,
	Filters: github.com/cdktn-io/cdktn-provider-google-go/google/v19.dataplexMetadataFeed.DataplexMetadataFeedFilters,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	PubsubTopic: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.dataplexMetadataFeed.DataplexMetadataFeedTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.metadataFeedId">MetadataFeedId</a></code> | <code>*string</code> | The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | The pubsub topic that you want the metadata feed messages to publish to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#location DataplexMetadataFeed#location}

---

##### `MetadataFeedId`<sup>Required</sup> <a name="MetadataFeedId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.metadataFeedId"></a>

```go
MetadataFeedId *string
```

- *Type:* *string

The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#metadata_feed_id DataplexMetadataFeed#metadata_feed_id}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.scope"></a>

```go
Scope DataplexMetadataFeedScope
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#scope DataplexMetadataFeed#scope}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#deletion_policy DataplexMetadataFeed#deletion_policy}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.filters"></a>

```go
Filters DataplexMetadataFeedFilters
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#filters DataplexMetadataFeed#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#labels DataplexMetadataFeed#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}.

---

##### `PubsubTopic`<sup>Optional</sup> <a name="PubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.pubsubTopic"></a>

```go
PubsubTopic *string
```

- *Type:* *string

The pubsub topic that you want the metadata feed messages to publish to.

Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#pubsub_topic DataplexMetadataFeed#pubsub_topic}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.timeouts"></a>

```go
Timeouts DataplexMetadataFeedTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#timeouts DataplexMetadataFeed#timeouts}

---

### DataplexMetadataFeedFilters <a name="DataplexMetadataFeedFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

&dataplexmetadatafeed.DataplexMetadataFeedFilters {
	AspectTypes: *[]*string,
	ChangeTypes: *[]*string,
	EntryTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.aspectTypes">AspectTypes</a></code> | <code>*[]*string</code> | The aspect types that you want to listen to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.changeTypes">ChangeTypes</a></code> | <code>*[]*string</code> | The type of change that you want to listen to. If not specified, all changes are published. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.entryTypes">EntryTypes</a></code> | <code>*[]*string</code> | The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}. |

---

##### `AspectTypes`<sup>Optional</sup> <a name="AspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.aspectTypes"></a>

```go
AspectTypes *[]*string
```

- *Type:* *[]*string

The aspect types that you want to listen to.

Depending on how the aspect is attached to the entry, in the format: projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#aspect_types DataplexMetadataFeed#aspect_types}

---

##### `ChangeTypes`<sup>Optional</sup> <a name="ChangeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.changeTypes"></a>

```go
ChangeTypes *[]*string
```

- *Type:* *[]*string

The type of change that you want to listen to. If not specified, all changes are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#change_types DataplexMetadataFeed#change_types}

---

##### `EntryTypes`<sup>Optional</sup> <a name="EntryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.entryTypes"></a>

```go
EntryTypes *[]*string
```

- *Type:* *[]*string

The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}.

Only entries that belong to the specified entry types are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#entry_types DataplexMetadataFeed#entry_types}

---

### DataplexMetadataFeedScope <a name="DataplexMetadataFeedScope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

&dataplexmetadatafeed.DataplexMetadataFeedScope {
	EntryGroups: *[]*string,
	OrganizationLevel: interface{},
	Projects: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.entryGroups">EntryGroups</a></code> | <code>*[]*string</code> | The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.organizationLevel">OrganizationLevel</a></code> | <code>interface{}</code> | Whether the metadata feed is at the organization-level. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.projects">Projects</a></code> | <code>*[]*string</code> | The projects whose entries you want to listen to. |

---

##### `EntryGroups`<sup>Optional</sup> <a name="EntryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.entryGroups"></a>

```go
EntryGroups *[]*string
```

- *Type:* *[]*string

The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#entry_groups DataplexMetadataFeed#entry_groups}

---

##### `OrganizationLevel`<sup>Optional</sup> <a name="OrganizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.organizationLevel"></a>

```go
OrganizationLevel interface{}
```

- *Type:* interface{}

Whether the metadata feed is at the organization-level.

If true, all changes happened to the entries in the same organization as the feed are published.
If false, you must specify a list of projects or a list of entry groups whose entries you want to listen to.The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#organization_level DataplexMetadataFeed#organization_level}

---

##### `Projects`<sup>Optional</sup> <a name="Projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.projects"></a>

```go
Projects *[]*string
```

- *Type:* *[]*string

The projects whose entries you want to listen to.

Must be in the same organization as the feed. Must be in the format: projects/{project_id_or_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#projects DataplexMetadataFeed#projects}

---

### DataplexMetadataFeedTimeouts <a name="DataplexMetadataFeedTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

&dataplexmetadatafeed.DataplexMetadataFeedTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexMetadataFeedFiltersOutputReference <a name="DataplexMetadataFeedFiltersOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

dataplexmetadatafeed.NewDataplexMetadataFeedFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexMetadataFeedFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetAspectTypes">ResetAspectTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetChangeTypes">ResetChangeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetEntryTypes">ResetEntryTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAspectTypes` <a name="ResetAspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetAspectTypes"></a>

```go
func ResetAspectTypes()
```

##### `ResetChangeTypes` <a name="ResetChangeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetChangeTypes"></a>

```go
func ResetChangeTypes()
```

##### `ResetEntryTypes` <a name="ResetEntryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetEntryTypes"></a>

```go
func ResetEntryTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput">AspectTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypesInput">ChangeTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypesInput">EntryTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypes">AspectTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypes">ChangeTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypes">EntryTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AspectTypesInput`<sup>Optional</sup> <a name="AspectTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput"></a>

```go
func AspectTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChangeTypesInput`<sup>Optional</sup> <a name="ChangeTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypesInput"></a>

```go
func ChangeTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EntryTypesInput`<sup>Optional</sup> <a name="EntryTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypesInput"></a>

```go
func EntryTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AspectTypes`<sup>Required</sup> <a name="AspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypes"></a>

```go
func AspectTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ChangeTypes`<sup>Required</sup> <a name="ChangeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypes"></a>

```go
func ChangeTypes() *[]*string
```

- *Type:* *[]*string

---

##### `EntryTypes`<sup>Required</sup> <a name="EntryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypes"></a>

```go
func EntryTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexMetadataFeedFilters
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---


### DataplexMetadataFeedScopeOutputReference <a name="DataplexMetadataFeedScopeOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

dataplexmetadatafeed.NewDataplexMetadataFeedScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexMetadataFeedScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetEntryGroups">ResetEntryGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetOrganizationLevel">ResetOrganizationLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetProjects">ResetProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntryGroups` <a name="ResetEntryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetEntryGroups"></a>

```go
func ResetEntryGroups()
```

##### `ResetOrganizationLevel` <a name="ResetOrganizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetOrganizationLevel"></a>

```go
func ResetOrganizationLevel()
```

##### `ResetProjects` <a name="ResetProjects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetProjects"></a>

```go
func ResetProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroupsInput">EntryGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevelInput">OrganizationLevelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projectsInput">ProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroups">EntryGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevel">OrganizationLevel</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projects">Projects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntryGroupsInput`<sup>Optional</sup> <a name="EntryGroupsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroupsInput"></a>

```go
func EntryGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationLevelInput`<sup>Optional</sup> <a name="OrganizationLevelInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevelInput"></a>

```go
func OrganizationLevelInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectsInput`<sup>Optional</sup> <a name="ProjectsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projectsInput"></a>

```go
func ProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EntryGroups`<sup>Required</sup> <a name="EntryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroups"></a>

```go
func EntryGroups() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationLevel`<sup>Required</sup> <a name="OrganizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevel"></a>

```go
func OrganizationLevel() interface{}
```

- *Type:* interface{}

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projects"></a>

```go
func Projects() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexMetadataFeedScope
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---


### DataplexMetadataFeedTimeoutsOutputReference <a name="DataplexMetadataFeedTimeoutsOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dataplexmetadatafeed"

dataplexmetadatafeed.NewDataplexMetadataFeedTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexMetadataFeedTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



