# `beyondcorpAppConnector` Submodule <a name="`beyondcorpAppConnector` Submodule" id="@cdktn/provider-google.beyondcorpAppConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpAppConnector <a name="BeyondcorpAppConnector" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector google_beyondcorp_app_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

beyondcorpappconnector.NewBeyondcorpAppConnector(scope Construct, id *string, config BeyondcorpAppConnectorConfig) BeyondcorpAppConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig">BeyondcorpAppConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig">BeyondcorpAppConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putPrincipalInfo">PutPrincipalInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrincipalInfo` <a name="PutPrincipalInfo" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putPrincipalInfo"></a>

```go
func PutPrincipalInfo(value BeyondcorpAppConnectorPrincipalInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putPrincipalInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putTimeouts"></a>

```go
func PutTimeouts(value BeyondcorpAppConnectorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BeyondcorpAppConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

beyondcorpappconnector.BeyondcorpAppConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

beyondcorpappconnector.BeyondcorpAppConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

beyondcorpappconnector.BeyondcorpAppConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

beyondcorpappconnector.BeyondcorpAppConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BeyondcorpAppConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BeyondcorpAppConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BeyondcorpAppConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BeyondcorpAppConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfo">PrincipalInfo</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference">BeyondcorpAppConnectorPrincipalInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference">BeyondcorpAppConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfoInput">PrincipalInfoInput</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `PrincipalInfo`<sup>Required</sup> <a name="PrincipalInfo" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfo"></a>

```go
func PrincipalInfo() BeyondcorpAppConnectorPrincipalInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference">BeyondcorpAppConnectorPrincipalInfoOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeouts"></a>

```go
func Timeouts() BeyondcorpAppConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference">BeyondcorpAppConnectorTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrincipalInfoInput`<sup>Optional</sup> <a name="PrincipalInfoInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfoInput"></a>

```go
func PrincipalInfoInput() BeyondcorpAppConnectorPrincipalInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpAppConnectorConfig <a name="BeyondcorpAppConnectorConfig" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

&beyondcorpappconnector.BeyondcorpAppConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PrincipalInfo: github.com/cdktn-io/cdktn-provider-google-go/google/v19.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo,
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.name">Name</a></code> | <code>*string</code> | ID of the AppConnector. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.principalInfo">PrincipalInfo</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a></code> | principal_info block. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | An arbitrary user-provided name for the AppConnector. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#id BeyondcorpAppConnector#id}. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#project BeyondcorpAppConnector#project}. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.region">Region</a></code> | <code>*string</code> | The region of the AppConnector. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

ID of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#name BeyondcorpAppConnector#name}

---

##### `PrincipalInfo`<sup>Required</sup> <a name="PrincipalInfo" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.principalInfo"></a>

```go
PrincipalInfo BeyondcorpAppConnectorPrincipalInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

principal_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#principal_info BeyondcorpAppConnector#principal_info}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#deletion_policy BeyondcorpAppConnector#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

An arbitrary user-provided name for the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#display_name BeyondcorpAppConnector#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#id BeyondcorpAppConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#labels BeyondcorpAppConnector#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#project BeyondcorpAppConnector#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#region BeyondcorpAppConnector#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.timeouts"></a>

```go
Timeouts BeyondcorpAppConnectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#timeouts BeyondcorpAppConnector#timeouts}

---

### BeyondcorpAppConnectorPrincipalInfo <a name="BeyondcorpAppConnectorPrincipalInfo" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

&beyondcorpappconnector.BeyondcorpAppConnectorPrincipalInfo {
	ServiceAccount: github.com/cdktn-io/cdktn-provider-google-go/google/v19.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | service_account block. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo.property.serviceAccount"></a>

```go
ServiceAccount BeyondcorpAppConnectorPrincipalInfoServiceAccount
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#service_account BeyondcorpAppConnector#service_account}

---

### BeyondcorpAppConnectorPrincipalInfoServiceAccount <a name="BeyondcorpAppConnectorPrincipalInfoServiceAccount" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

&beyondcorpappconnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount {
	Email: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount.property.email">Email</a></code> | <code>*string</code> | Email address of the service account. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount.property.email"></a>

```go
Email *string
```

- *Type:* *string

Email address of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#email BeyondcorpAppConnector#email}

---

### BeyondcorpAppConnectorTimeouts <a name="BeyondcorpAppConnectorTimeouts" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

&beyondcorpappconnector.BeyondcorpAppConnectorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#create BeyondcorpAppConnector#create}. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#delete BeyondcorpAppConnector#delete}. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#update BeyondcorpAppConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#create BeyondcorpAppConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#delete BeyondcorpAppConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/beyondcorp_app_connector#update BeyondcorpAppConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpAppConnectorPrincipalInfoOutputReference <a name="BeyondcorpAppConnectorPrincipalInfoOutputReference" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

beyondcorpappconnector.NewBeyondcorpAppConnectorPrincipalInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BeyondcorpAppConnectorPrincipalInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount">PutServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount"></a>

```go
func PutServiceAccount(value BeyondcorpAppConnectorPrincipalInfoServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference">BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference">BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() BeyondcorpAppConnectorPrincipalInfoServiceAccount
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() BeyondcorpAppConnectorPrincipalInfo
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

---


### BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference <a name="BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

beyondcorpappconnector.NewBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() BeyondcorpAppConnectorPrincipalInfoServiceAccount
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---


### BeyondcorpAppConnectorTimeoutsOutputReference <a name="BeyondcorpAppConnectorTimeoutsOutputReference" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/beyondcorpappconnector"

beyondcorpappconnector.NewBeyondcorpAppConnectorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BeyondcorpAppConnectorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



