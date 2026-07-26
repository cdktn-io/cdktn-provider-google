# `networkConnectivityMulticloudDataTransferConfig` Submodule <a name="`networkConnectivityMulticloudDataTransferConfig` Submodule" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityMulticloudDataTransferConfig <a name="NetworkConnectivityMulticloudDataTransferConfig" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config google_network_connectivity_multicloud_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

networkconnectivitymulticlouddatatransferconfig.NewNetworkConnectivityMulticloudDataTransferConfig(scope Construct, id *string, config NetworkConnectivityMulticloudDataTransferConfigConfig) NetworkConnectivityMulticloudDataTransferConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig">NetworkConnectivityMulticloudDataTransferConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig">NetworkConnectivityMulticloudDataTransferConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices">PutServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetServices">ResetServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServices` <a name="PutServices" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices"></a>

```go
func PutServices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts"></a>

```go
func PutTimeouts(value NetworkConnectivityMulticloudDataTransferConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServices` <a name="ResetServices" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetServices"></a>

```go
func ResetServices()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

networkconnectivitymulticlouddatatransferconfig.NetworkConnectivityMulticloudDataTransferConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

networkconnectivitymulticlouddatatransferconfig.NetworkConnectivityMulticloudDataTransferConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

networkconnectivitymulticlouddatatransferconfig.NetworkConnectivityMulticloudDataTransferConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

networkconnectivitymulticlouddatatransferconfig.NetworkConnectivityMulticloudDataTransferConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkConnectivityMulticloudDataTransferConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkConnectivityMulticloudDataTransferConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityMulticloudDataTransferConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount">DestinationsActiveCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount">DestinationsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.services">Services</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList">NetworkConnectivityMulticloudDataTransferConfigServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.servicesInput">ServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DestinationsActiveCount`<sup>Required</sup> <a name="DestinationsActiveCount" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount"></a>

```go
func DestinationsActiveCount() *f64
```

- *Type:* *f64

---

##### `DestinationsCount`<sup>Required</sup> <a name="DestinationsCount" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount"></a>

```go
func DestinationsCount() *f64
```

- *Type:* *f64

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.services"></a>

```go
func Services() NetworkConnectivityMulticloudDataTransferConfigServicesList
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList">NetworkConnectivityMulticloudDataTransferConfigServicesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeouts"></a>

```go
func Timeouts() NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.servicesInput"></a>

```go
func ServicesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityMulticloudDataTransferConfigConfig <a name="NetworkConnectivityMulticloudDataTransferConfigConfig" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

&networkconnectivitymulticlouddatatransferconfig.NetworkConnectivityMulticloudDataTransferConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Services: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of the multicloud data transfer config. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.name">Name</a></code> | <code>*string</code> | The name of the MulticloudDataTransferConfig resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.description">Description</a></code> | <code>*string</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#id NetworkConnectivityMulticloudDataTransferConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#project NetworkConnectivityMulticloudDataTransferConfig#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.services">Services</a></code> | <code>interface{}</code> | services block. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the multicloud data transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#location NetworkConnectivityMulticloudDataTransferConfig#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the MulticloudDataTransferConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#name NetworkConnectivityMulticloudDataTransferConfig#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#deletion_policy NetworkConnectivityMulticloudDataTransferConfig#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#description NetworkConnectivityMulticloudDataTransferConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#id NetworkConnectivityMulticloudDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#labels NetworkConnectivityMulticloudDataTransferConfig#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#project NetworkConnectivityMulticloudDataTransferConfig#project}.

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.services"></a>

```go
Services interface{}
```

- *Type:* interface{}

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#services NetworkConnectivityMulticloudDataTransferConfig#services}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts"></a>

```go
Timeouts NetworkConnectivityMulticloudDataTransferConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#timeouts NetworkConnectivityMulticloudDataTransferConfig#timeouts}

---

### NetworkConnectivityMulticloudDataTransferConfigServices <a name="NetworkConnectivityMulticloudDataTransferConfigServices" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

&networkconnectivitymulticlouddatatransferconfig.NetworkConnectivityMulticloudDataTransferConfigServices {
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API. |

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#service_name NetworkConnectivityMulticloudDataTransferConfig#service_name}

---

### NetworkConnectivityMulticloudDataTransferConfigServicesStates <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStates" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

&networkconnectivitymulticlouddatatransferconfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates {

}
```


### NetworkConnectivityMulticloudDataTransferConfigTimeouts <a name="NetworkConnectivityMulticloudDataTransferConfigTimeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

&networkconnectivitymulticlouddatatransferconfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#create NetworkConnectivityMulticloudDataTransferConfig#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#delete NetworkConnectivityMulticloudDataTransferConfig#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#update NetworkConnectivityMulticloudDataTransferConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#create NetworkConnectivityMulticloudDataTransferConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#delete NetworkConnectivityMulticloudDataTransferConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#update NetworkConnectivityMulticloudDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityMulticloudDataTransferConfigServicesList <a name="NetworkConnectivityMulticloudDataTransferConfigServicesList" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

networkconnectivitymulticlouddatatransferconfig.NewNetworkConnectivityMulticloudDataTransferConfigServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkConnectivityMulticloudDataTransferConfigServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get"></a>

```go
func Get(index *f64) NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

networkconnectivitymulticlouddatatransferconfig.NewNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states">States</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList">NetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `States`<sup>Required</sup> <a name="States" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states"></a>

```go
func States() NetworkConnectivityMulticloudDataTransferConfigServicesStatesList
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList">NetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a>

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectivityMulticloudDataTransferConfigServicesStatesList <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStatesList" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

networkconnectivitymulticlouddatatransferconfig.NewNetworkConnectivityMulticloudDataTransferConfigServicesStatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkConnectivityMulticloudDataTransferConfigServicesStatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get"></a>

```go
func Get(index *f64) NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

networkconnectivitymulticlouddatatransferconfig.NewNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime">EffectiveTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates">NetworkConnectivityMulticloudDataTransferConfigServicesStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveTime`<sup>Required</sup> <a name="EffectiveTime" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime"></a>

```go
func EffectiveTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectivityMulticloudDataTransferConfigServicesStates
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates">NetworkConnectivityMulticloudDataTransferConfigServicesStates</a>

---


### NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/networkconnectivitymulticlouddatatransferconfig"

networkconnectivitymulticlouddatatransferconfig.NewNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



