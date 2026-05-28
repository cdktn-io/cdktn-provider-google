# `computeAddress` Submodule <a name="`computeAddress` Submodule" id="@cdktn/provider-google.computeAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeAddress <a name="ComputeAddress" id="@cdktn/provider-google.computeAddress.ComputeAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address google_compute_address}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeAddress.ComputeAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeaddress"

computeaddress.NewComputeAddress(scope Construct, id *string, config ComputeAddressConfig) ComputeAddress
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig">ComputeAddressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeAddress.ComputeAddress.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeAddress.ComputeAddress.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeAddress.ComputeAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig">ComputeAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetAddressType">ResetAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetIpCollection">ResetIpCollection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetIpv6EndpointType">ResetIpv6EndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetIpVersion">ResetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetNetworkTier">ResetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetPrefixLength">ResetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeAddress.ComputeAddress.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeAddress.ComputeAddress.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeAddress.ComputeAddress.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeAddress.ComputeAddress.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeAddress.ComputeAddress.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeAddress.ComputeAddress.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeAddress.ComputeAddress.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeAddress.ComputeAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeAddress.ComputeAddress.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeAddress.ComputeAddress.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeAddress.ComputeAddress.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeAddress.ComputeAddress.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeAddress.ComputeAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeAddress.ComputeAddress.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeAddress.ComputeAddress.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeAddress.ComputeAddress.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeAddress.ComputeAddress.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeAddress.ComputeAddress.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeAddress.ComputeAddress.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeAddress.ComputeAddress.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeAddress.ComputeAddress.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeAddress.ComputeAddress.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeAddress.ComputeAddress.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeAddress.ComputeAddress.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeAddress.ComputeAddress.putTimeouts"></a>

```go
func PutTimeouts(value ComputeAddressTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeAddress.ComputeAddress.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetAddressType` <a name="ResetAddressType" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetAddressType"></a>

```go
func ResetAddressType()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetId"></a>

```go
func ResetId()
```

##### `ResetIpCollection` <a name="ResetIpCollection" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetIpCollection"></a>

```go
func ResetIpCollection()
```

##### `ResetIpv6EndpointType` <a name="ResetIpv6EndpointType" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetIpv6EndpointType"></a>

```go
func ResetIpv6EndpointType()
```

##### `ResetIpVersion` <a name="ResetIpVersion" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetIpVersion"></a>

```go
func ResetIpVersion()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNetworkTier` <a name="ResetNetworkTier" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetNetworkTier"></a>

```go
func ResetNetworkTier()
```

##### `ResetPrefixLength` <a name="ResetPrefixLength" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetPrefixLength"></a>

```go
func ResetPrefixLength()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetPurpose"></a>

```go
func ResetPurpose()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeAddress.ComputeAddress.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeAddress resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeAddress.ComputeAddress.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeaddress"

computeaddress.ComputeAddress_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeAddress.ComputeAddress.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeAddress.ComputeAddress.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeaddress"

computeaddress.ComputeAddress_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeAddress.ComputeAddress.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeAddress.ComputeAddress.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeaddress"

computeaddress.ComputeAddress_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeAddress.ComputeAddress.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeAddress.ComputeAddress.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeaddress"

computeaddress.ComputeAddress_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeAddress resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.addressId">AddressId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference">ComputeAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.users">Users</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.addressTypeInput">AddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.ipCollectionInput">IpCollectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointTypeInput">Ipv6EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.ipVersionInput">IpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.networkTierInput">NetworkTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.prefixLengthInput">PrefixLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.purposeInput">PurposeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.addressType">AddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.ipCollection">IpCollection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointType">Ipv6EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.ipVersion">IpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.prefixLength">PrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddressId`<sup>Required</sup> <a name="AddressId" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.addressId"></a>

```go
func AddressId() *string
```

- *Type:* *string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.timeouts"></a>

```go
func Timeouts() ComputeAddressTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference">ComputeAddressTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.users"></a>

```go
func Users() *[]*string
```

- *Type:* *[]*string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `AddressTypeInput`<sup>Optional</sup> <a name="AddressTypeInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.addressTypeInput"></a>

```go
func AddressTypeInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpCollectionInput`<sup>Optional</sup> <a name="IpCollectionInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.ipCollectionInput"></a>

```go
func IpCollectionInput() *string
```

- *Type:* *string

---

##### `Ipv6EndpointTypeInput`<sup>Optional</sup> <a name="Ipv6EndpointTypeInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointTypeInput"></a>

```go
func Ipv6EndpointTypeInput() *string
```

- *Type:* *string

---

##### `IpVersionInput`<sup>Optional</sup> <a name="IpVersionInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.ipVersionInput"></a>

```go
func IpVersionInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.networkTierInput"></a>

```go
func NetworkTierInput() *string
```

- *Type:* *string

---

##### `PrefixLengthInput`<sup>Optional</sup> <a name="PrefixLengthInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.prefixLengthInput"></a>

```go
func PrefixLengthInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.purposeInput"></a>

```go
func PurposeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.addressType"></a>

```go
func AddressType() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpCollection`<sup>Required</sup> <a name="IpCollection" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.ipCollection"></a>

```go
func IpCollection() *string
```

- *Type:* *string

---

##### `Ipv6EndpointType`<sup>Required</sup> <a name="Ipv6EndpointType" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointType"></a>

```go
func Ipv6EndpointType() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.ipVersion"></a>

```go
func IpVersion() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `PrefixLength`<sup>Required</sup> <a name="PrefixLength" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.prefixLength"></a>

```go
func PrefixLength() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddress.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeAddress.ComputeAddress.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeAddressConfig <a name="ComputeAddressConfig" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeaddress"

&computeaddress.ComputeAddressConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Address: *string,
	AddressType: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	IpCollection: *string,
	Ipv6EndpointType: *string,
	IpVersion: *string,
	Labels: *map[string]*string,
	Network: *string,
	NetworkTier: *string,
	PrefixLength: *f64,
	Project: *string,
	Purpose: *string,
	Region: *string,
	Subnetwork: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeAddress.ComputeAddressTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.address">Address</a></code> | <code>*string</code> | The static external IP address represented by this resource. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.addressType">AddressType</a></code> | <code>*string</code> | The type of address to reserve. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#id ComputeAddress#id}. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.ipCollection">IpCollection</a></code> | <code>*string</code> | Reference to the source of external IPv4 addresses, like a PublicDelegatedPrefix(PDP) for BYOIP. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.ipv6EndpointType">Ipv6EndpointType</a></code> | <code>*string</code> | The endpoint type of this address, which should be VM or NETLB. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.ipVersion">IpVersion</a></code> | <code>*string</code> | The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels to apply to this address.  A list of key->value pairs. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.network">Network</a></code> | <code>*string</code> | The URL of the network in which to reserve the address. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.networkTier">NetworkTier</a></code> | <code>*string</code> | The networking tier used for configuring this address. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.prefixLength">PrefixLength</a></code> | <code>*f64</code> | The prefix length if the resource represents an IP range. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#project ComputeAddress#project}. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.purpose">Purpose</a></code> | <code>*string</code> | The purpose of this resource, which can be one of the following values. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.region">Region</a></code> | <code>*string</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The URL of the subnetwork in which to reserve the address. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#name ComputeAddress#name}

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

The static external IP address represented by this resource.

The IP address must be inside the specified subnetwork,
if any. Set by the API if undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#address ComputeAddress#address}

---

##### `AddressType`<sup>Optional</sup> <a name="AddressType" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.addressType"></a>

```go
AddressType *string
```

- *Type:* *string

The type of address to reserve.

Note: if you set this argument's value as 'INTERNAL' you need to leave the 'network_tier' argument unset in that resource block. Default value: "EXTERNAL" Possible values: ["INTERNAL", "EXTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#address_type ComputeAddress#address_type}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#deletion_policy ComputeAddress#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#description ComputeAddress#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#id ComputeAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpCollection`<sup>Optional</sup> <a name="IpCollection" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.ipCollection"></a>

```go
IpCollection *string
```

- *Type:* *string

Reference to the source of external IPv4 addresses, like a PublicDelegatedPrefix(PDP) for BYOIP.

The PDP must support enhanced IPv4 allocations.
Use one of the following formats to specify a PDP when reserving an external IPv4 address using BYOIP.
Full resource URL, as in:

* 'https://www.googleapis.com/compute/v1/projects/{{projectId}}/regions/{{region}}/publicDelegatedPrefixes/{{pdp-name}}'
  Partial URL, as in:
* 'projects/{{projectId}}/regions/region/publicDelegatedPrefixes/{{pdp-name}}'
* 'regions/{{region}}/publicDelegatedPrefixes/{{pdp-name}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#ip_collection ComputeAddress#ip_collection}

---

##### `Ipv6EndpointType`<sup>Optional</sup> <a name="Ipv6EndpointType" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.ipv6EndpointType"></a>

```go
Ipv6EndpointType *string
```

- *Type:* *string

The endpoint type of this address, which should be VM or NETLB.

This is
used for deciding which type of endpoint this address can be used after
the external IPv6 address reservation. Possible values: ["VM", "NETLB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#ipv6_endpoint_type ComputeAddress#ipv6_endpoint_type}

---

##### `IpVersion`<sup>Optional</sup> <a name="IpVersion" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.ipVersion"></a>

```go
IpVersion *string
```

- *Type:* *string

The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#ip_version ComputeAddress#ip_version}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels to apply to this address.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#labels ComputeAddress#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The URL of the network in which to reserve the address.

This field
can only be used with INTERNAL type with the VPC_PEERING and
IPSEC_INTERCONNECT purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#network ComputeAddress#network}

---

##### `NetworkTier`<sup>Optional</sup> <a name="NetworkTier" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.networkTier"></a>

```go
NetworkTier *string
```

- *Type:* *string

The networking tier used for configuring this address.

If this field is not
specified, it is assumed to be PREMIUM.
This argument should not be used when configuring Internal addresses, because [network tier cannot be set for internal traffic; it's always Premium](https://cloud.google.com/network-tiers/docs/overview). Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#network_tier ComputeAddress#network_tier}

---

##### `PrefixLength`<sup>Optional</sup> <a name="PrefixLength" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.prefixLength"></a>

```go
PrefixLength *f64
```

- *Type:* *f64

The prefix length if the resource represents an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#prefix_length ComputeAddress#prefix_length}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#project ComputeAddress#project}.

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.purpose"></a>

```go
Purpose *string
```

- *Type:* *string

The purpose of this resource, which can be one of the following values.

* GCE_ENDPOINT for addresses that are used by VM instances, alias IP
  ranges, load balancers, and similar resources.
* SHARED_LOADBALANCER_VIP for an address that can be used by multiple
  internal load balancers.
* VPC_PEERING for addresses that are reserved for VPC peer networks.
* IPSEC_INTERCONNECT for addresses created from a private IP range that
  are reserved for a VLAN attachment in an HA VPN over Cloud Interconnect
  configuration. These addresses are regional resources.
* PRIVATE_SERVICE_CONNECT for a private network address that is used to
  configure Private Service Connect. Only global internal addresses can use
  this purpose.

This should only be set when using an Internal address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#purpose ComputeAddress#purpose}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#region ComputeAddress#region}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The URL of the subnetwork in which to reserve the address.

If an IP
address is specified, it must be within the subnetwork's IP range.
This field can only be used with INTERNAL type with
GCE_ENDPOINT/DNS_RESOLVER purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#subnetwork ComputeAddress#subnetwork}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeAddress.ComputeAddressConfig.property.timeouts"></a>

```go
Timeouts ComputeAddressTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#timeouts ComputeAddress#timeouts}

---

### ComputeAddressTimeouts <a name="ComputeAddressTimeouts" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeaddress"

&computeaddress.ComputeAddressTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#create ComputeAddress#create}. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#delete ComputeAddress#delete}. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#update ComputeAddress#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#create ComputeAddress#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#delete ComputeAddress#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_address#update ComputeAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeAddressTimeoutsOutputReference <a name="ComputeAddressTimeoutsOutputReference" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeaddress"

computeaddress.NewComputeAddressTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeAddressTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



