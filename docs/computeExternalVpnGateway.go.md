# `computeExternalVpnGateway` Submodule <a name="`computeExternalVpnGateway` Submodule" id="@cdktn/provider-google.computeExternalVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeExternalVpnGateway <a name="ComputeExternalVpnGateway" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway google_compute_external_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

computeexternalvpngateway.NewComputeExternalVpnGateway(scope Construct, id *string, config ComputeExternalVpnGatewayConfig) ComputeExternalVpnGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig">ComputeExternalVpnGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig">ComputeExternalVpnGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putInterface">PutInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetInterface">ResetInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetRedundancyType">ResetRedundancyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInterface` <a name="PutInterface" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putInterface"></a>

```go
func PutInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParams` <a name="PutParams" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putParams"></a>

```go
func PutParams(value ComputeExternalVpnGatewayParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParams">ComputeExternalVpnGatewayParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putTimeouts"></a>

```go
func PutTimeouts(value ComputeExternalVpnGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetInterface"></a>

```go
func ResetInterface()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetParams"></a>

```go
func ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRedundancyType` <a name="ResetRedundancyType" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetRedundancyType"></a>

```go
func ResetRedundancyType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeExternalVpnGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

computeexternalvpngateway.ComputeExternalVpnGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

computeexternalvpngateway.ComputeExternalVpnGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

computeexternalvpngateway.ComputeExternalVpnGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

computeexternalvpngateway.ComputeExternalVpnGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeExternalVpnGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeExternalVpnGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeExternalVpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeExternalVpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interface">Interface</a></code> | <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList">ComputeExternalVpnGatewayInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference">ComputeExternalVpnGatewayParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference">ComputeExternalVpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interfaceInput">InterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParams">ComputeExternalVpnGatewayParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyTypeInput">RedundancyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyType">RedundancyType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interface"></a>

```go
func Interface() ComputeExternalVpnGatewayInterfaceList
```

- *Type:* <a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList">ComputeExternalVpnGatewayInterfaceList</a>

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.params"></a>

```go
func Params() ComputeExternalVpnGatewayParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference">ComputeExternalVpnGatewayParamsOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeouts"></a>

```go
func Timeouts() ComputeExternalVpnGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference">ComputeExternalVpnGatewayTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interfaceInput"></a>

```go
func InterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.paramsInput"></a>

```go
func ParamsInput() ComputeExternalVpnGatewayParams
```

- *Type:* <a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParams">ComputeExternalVpnGatewayParams</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RedundancyTypeInput`<sup>Optional</sup> <a name="RedundancyTypeInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyTypeInput"></a>

```go
func RedundancyTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RedundancyType`<sup>Required</sup> <a name="RedundancyType" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyType"></a>

```go
func RedundancyType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeExternalVpnGatewayConfig <a name="ComputeExternalVpnGatewayConfig" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

&computeexternalvpngateway.ComputeExternalVpnGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Interface: interface{},
	Labels: *map[string]*string,
	Params: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeExternalVpnGateway.ComputeExternalVpnGatewayParams,
	Project: *string,
	RedundancyType: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#id ComputeExternalVpnGateway#id}. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.interface">Interface</a></code> | <code>interface{}</code> | interface block. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels for the external VPN gateway resource. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParams">ComputeExternalVpnGatewayParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#project ComputeExternalVpnGateway#project}. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.redundancyType">RedundancyType</a></code> | <code>*string</code> | Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"]. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#name ComputeExternalVpnGateway#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#deletion_policy ComputeExternalVpnGateway#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#description ComputeExternalVpnGateway#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#id ComputeExternalVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.interface"></a>

```go
Interface interface{}
```

- *Type:* interface{}

interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#interface ComputeExternalVpnGateway#interface}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels for the external VPN gateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#labels ComputeExternalVpnGateway#labels}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.params"></a>

```go
Params ComputeExternalVpnGatewayParams
```

- *Type:* <a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParams">ComputeExternalVpnGatewayParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#params ComputeExternalVpnGateway#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#project ComputeExternalVpnGateway#project}.

---

##### `RedundancyType`<sup>Optional</sup> <a name="RedundancyType" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.redundancyType"></a>

```go
RedundancyType *string
```

- *Type:* *string

Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#redundancy_type ComputeExternalVpnGateway#redundancy_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.timeouts"></a>

```go
Timeouts ComputeExternalVpnGatewayTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#timeouts ComputeExternalVpnGateway#timeouts}

---

### ComputeExternalVpnGatewayInterface <a name="ComputeExternalVpnGatewayInterface" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

&computeexternalvpngateway.ComputeExternalVpnGatewayInterface {
	Id: *f64,
	IpAddress: *string,
	Ipv6Address: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.id">Id</a></code> | <code>*f64</code> | The numeric ID for this interface. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.ipAddress">IpAddress</a></code> | <code>*string</code> | IP address of the interface in the external VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | IPv6 address of the interface in the external VPN gateway. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.id"></a>

```go
Id *f64
```

- *Type:* *f64

The numeric ID for this interface.

Allowed values are based on the redundancy type
of this external VPN gateway

* '0 - SINGLE_IP_INTERNALLY_REDUNDANT'
* '0, 1 - TWO_IPS_REDUNDANCY'
* '0, 1, 2, 3 - FOUR_IPS_REDUNDANCY'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#id ComputeExternalVpnGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

IP address of the interface in the external VPN gateway.

Only IPv4 is supported. This IP address can be either from
your on-premise gateway or another Cloud provider's VPN gateway,
it cannot be an IP address from Google Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#ip_address ComputeExternalVpnGateway#ip_address}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.ipv6Address"></a>

```go
Ipv6Address *string
```

- *Type:* *string

IPv6 address of the interface in the external VPN gateway.

This IPv6
address can be either from your on-premise gateway or another Cloud
provider's VPN gateway, it cannot be an IP address from Google Compute
Engine. Must specify an IPv6 address (not IPV4-mapped) using any format
described in RFC 4291 (e.g. 2001:db8:0:0:2d9:51:0:0). The output format
is RFC 5952 format (e.g. 2001:db8::2d9:51:0:0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#ipv6_address ComputeExternalVpnGateway#ipv6_address}

---

### ComputeExternalVpnGatewayParams <a name="ComputeExternalVpnGatewayParams" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

&computeexternalvpngateway.ComputeExternalVpnGatewayParams {
	ResourceManagerTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | Resource manager tags to be bound to the ExternalVpnGateway. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParams.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

Resource manager tags to be bound to the ExternalVpnGateway.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#resource_manager_tags ComputeExternalVpnGateway#resource_manager_tags}

---

### ComputeExternalVpnGatewayTimeouts <a name="ComputeExternalVpnGatewayTimeouts" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

&computeexternalvpngateway.ComputeExternalVpnGatewayTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#create ComputeExternalVpnGateway#create}. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#delete ComputeExternalVpnGateway#delete}. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#update ComputeExternalVpnGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#create ComputeExternalVpnGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#delete ComputeExternalVpnGateway#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_external_vpn_gateway#update ComputeExternalVpnGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeExternalVpnGatewayInterfaceList <a name="ComputeExternalVpnGatewayInterfaceList" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

computeexternalvpngateway.NewComputeExternalVpnGatewayInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeExternalVpnGatewayInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.get"></a>

```go
func Get(index *f64) ComputeExternalVpnGatewayInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeExternalVpnGatewayInterfaceOutputReference <a name="ComputeExternalVpnGatewayInterfaceOutputReference" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

computeexternalvpngateway.NewComputeExternalVpnGatewayInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeExternalVpnGatewayInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetIpv6Address"></a>

```go
func ResetIpv6Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.idInput">IdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.idInput"></a>

```go
func IdInput() *f64
```

- *Type:* *f64

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipv6AddressInput"></a>

```go
func Ipv6AddressInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeExternalVpnGatewayParamsOutputReference <a name="ComputeExternalVpnGatewayParamsOutputReference" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

computeexternalvpngateway.NewComputeExternalVpnGatewayParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeExternalVpnGatewayParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParams">ComputeExternalVpnGatewayParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeExternalVpnGatewayParams
```

- *Type:* <a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayParams">ComputeExternalVpnGatewayParams</a>

---


### ComputeExternalVpnGatewayTimeoutsOutputReference <a name="ComputeExternalVpnGatewayTimeoutsOutputReference" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeexternalvpngateway"

computeexternalvpngateway.NewComputeExternalVpnGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeExternalVpnGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



