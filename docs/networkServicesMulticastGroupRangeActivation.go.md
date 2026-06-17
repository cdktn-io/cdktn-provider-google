# `networkServicesMulticastGroupRangeActivation` Submodule <a name="`networkServicesMulticastGroupRangeActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastGroupRangeActivation <a name="NetworkServicesMulticastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation google_network_services_multicast_group_range_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

networkservicesmulticastgrouprangeactivation.NewNetworkServicesMulticastGroupRangeActivation(scope Construct, id *string, config NetworkServicesMulticastGroupRangeActivationConfig) NetworkServicesMulticastGroupRangeActivation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig">NetworkServicesMulticastGroupRangeActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig">NetworkServicesMulticastGroupRangeActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putLogConfig"></a>

```go
func PutLogConfig(value NetworkServicesMulticastGroupRangeActivationLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putTimeouts"></a>

```go
func PutTimeouts(value NetworkServicesMulticastGroupRangeActivationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts">NetworkServicesMulticastGroupRangeActivationTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastGroupRangeActivation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

networkservicesmulticastgrouprangeactivation.NetworkServicesMulticastGroupRangeActivation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

networkservicesmulticastgrouprangeactivation.NetworkServicesMulticastGroupRangeActivation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

networkservicesmulticastgrouprangeactivation.NetworkServicesMulticastGroupRangeActivation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

networkservicesmulticastgrouprangeactivation.NetworkServicesMulticastGroupRangeActivation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkServicesMulticastGroupRangeActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkServicesMulticastGroupRangeActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkServicesMulticastGroupRangeActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastGroupRangeActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference">NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupConsumerActivations">MulticastGroupConsumerActivations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.state">State</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList">NetworkServicesMulticastGroupRangeActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference">NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivationInput">MulticastDomainActivationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationIdInput">MulticastGroupRangeActivationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeInput">MulticastGroupRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivation">MulticastDomainActivation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRange">MulticastGroupRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationId">MulticastGroupRangeActivationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.logConfig"></a>

```go
func LogConfig() NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference">NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference</a>

---

##### `MulticastGroupConsumerActivations`<sup>Required</sup> <a name="MulticastGroupConsumerActivations" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupConsumerActivations"></a>

```go
func MulticastGroupConsumerActivations() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.state"></a>

```go
func State() NetworkServicesMulticastGroupRangeActivationStateList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList">NetworkServicesMulticastGroupRangeActivationStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.timeouts"></a>

```go
func Timeouts() NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference">NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.logConfigInput"></a>

```go
func LogConfigInput() NetworkServicesMulticastGroupRangeActivationLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a>

---

##### `MulticastDomainActivationInput`<sup>Optional</sup> <a name="MulticastDomainActivationInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivationInput"></a>

```go
func MulticastDomainActivationInput() *string
```

- *Type:* *string

---

##### `MulticastGroupRangeActivationIdInput`<sup>Optional</sup> <a name="MulticastGroupRangeActivationIdInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationIdInput"></a>

```go
func MulticastGroupRangeActivationIdInput() *string
```

- *Type:* *string

---

##### `MulticastGroupRangeInput`<sup>Optional</sup> <a name="MulticastGroupRangeInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeInput"></a>

```go
func MulticastGroupRangeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MulticastDomainActivation`<sup>Required</sup> <a name="MulticastDomainActivation" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivation"></a>

```go
func MulticastDomainActivation() *string
```

- *Type:* *string

---

##### `MulticastGroupRange`<sup>Required</sup> <a name="MulticastGroupRange" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRange"></a>

```go
func MulticastGroupRange() *string
```

- *Type:* *string

---

##### `MulticastGroupRangeActivationId`<sup>Required</sup> <a name="MulticastGroupRangeActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationId"></a>

```go
func MulticastGroupRangeActivationId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastGroupRangeActivationConfig <a name="NetworkServicesMulticastGroupRangeActivationConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

&networkservicesmulticastgrouprangeactivation.NetworkServicesMulticastGroupRangeActivationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MulticastDomainActivation: *string,
	MulticastGroupRange: *string,
	MulticastGroupRangeActivationId: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	LogConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastDomainActivation">MulticastDomainActivation</a></code> | <code>*string</code> | The resource name of a multicast domain activation that is in the same zone as this multicast group. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRange">MulticastGroupRange</a></code> | <code>*string</code> | The resource name of the global multicast group range for the group. Use the following format: 'projects/* /locations/global/multicastGroupRanges/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRangeActivationId">MulticastGroupRangeActivationId</a></code> | <code>*string</code> | A unique name for the multicast group range activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.description">Description</a></code> | <code>*string</code> | An optional text description of the multicast group range activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#id NetworkServicesMulticastGroupRangeActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#project NetworkServicesMulticastGroupRangeActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts">NetworkServicesMulticastGroupRangeActivationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#location NetworkServicesMulticastGroupRangeActivation#location}

---

##### `MulticastDomainActivation`<sup>Required</sup> <a name="MulticastDomainActivation" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastDomainActivation"></a>

```go
MulticastDomainActivation *string
```

- *Type:* *string

The resource name of a multicast domain activation that is in the same zone as this multicast group.

Use the following format:
'projects/* /locations/* /multicastDomainActivations/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#multicast_domain_activation NetworkServicesMulticastGroupRangeActivation#multicast_domain_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `MulticastGroupRange`<sup>Required</sup> <a name="MulticastGroupRange" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRange"></a>

```go
MulticastGroupRange *string
```

- *Type:* *string

The resource name of the global multicast group range for the group. Use the following format: 'projects/* /locations/global/multicastGroupRanges/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#multicast_group_range NetworkServicesMulticastGroupRangeActivation#multicast_group_range}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `MulticastGroupRangeActivationId`<sup>Required</sup> <a name="MulticastGroupRangeActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRangeActivationId"></a>

```go
MulticastGroupRangeActivationId *string
```

- *Type:* *string

A unique name for the multicast group range activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#multicast_group_range_activation_id NetworkServicesMulticastGroupRangeActivation#multicast_group_range_activation_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#deletion_policy NetworkServicesMulticastGroupRangeActivation#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional text description of the multicast group range activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#description NetworkServicesMulticastGroupRangeActivation#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#id NetworkServicesMulticastGroupRangeActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#labels NetworkServicesMulticastGroupRangeActivation#labels}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.logConfig"></a>

```go
LogConfig NetworkServicesMulticastGroupRangeActivationLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#log_config NetworkServicesMulticastGroupRangeActivation#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#project NetworkServicesMulticastGroupRangeActivation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.timeouts"></a>

```go
Timeouts NetworkServicesMulticastGroupRangeActivationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts">NetworkServicesMulticastGroupRangeActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#timeouts NetworkServicesMulticastGroupRangeActivation#timeouts}

---

### NetworkServicesMulticastGroupRangeActivationLogConfig <a name="NetworkServicesMulticastGroupRangeActivationLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

&networkservicesmulticastgrouprangeactivation.NetworkServicesMulticastGroupRangeActivationLogConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to enable logging or not. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#enabled NetworkServicesMulticastGroupRangeActivation#enabled}

---

### NetworkServicesMulticastGroupRangeActivationState <a name="NetworkServicesMulticastGroupRangeActivationState" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationState.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

&networkservicesmulticastgrouprangeactivation.NetworkServicesMulticastGroupRangeActivationState {

}
```


### NetworkServicesMulticastGroupRangeActivationTimeouts <a name="NetworkServicesMulticastGroupRangeActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

&networkservicesmulticastgrouprangeactivation.NetworkServicesMulticastGroupRangeActivationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#create NetworkServicesMulticastGroupRangeActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#delete NetworkServicesMulticastGroupRangeActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#update NetworkServicesMulticastGroupRangeActivation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#create NetworkServicesMulticastGroupRangeActivation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#delete NetworkServicesMulticastGroupRangeActivation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range_activation#update NetworkServicesMulticastGroupRangeActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference <a name="NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

networkservicesmulticastgrouprangeactivation.NewNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesMulticastGroupRangeActivationLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a>

---


### NetworkServicesMulticastGroupRangeActivationStateList <a name="NetworkServicesMulticastGroupRangeActivationStateList" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

networkservicesmulticastgrouprangeactivation.NewNetworkServicesMulticastGroupRangeActivationStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesMulticastGroupRangeActivationStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.get"></a>

```go
func Get(index *f64) NetworkServicesMulticastGroupRangeActivationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkServicesMulticastGroupRangeActivationStateOutputReference <a name="NetworkServicesMulticastGroupRangeActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

networkservicesmulticastgrouprangeactivation.NewNetworkServicesMulticastGroupRangeActivationStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesMulticastGroupRangeActivationStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationState">NetworkServicesMulticastGroupRangeActivationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesMulticastGroupRangeActivationState
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationState">NetworkServicesMulticastGroupRangeActivationState</a>

---


### NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference <a name="NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprangeactivation"

networkservicesmulticastgrouprangeactivation.NewNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



