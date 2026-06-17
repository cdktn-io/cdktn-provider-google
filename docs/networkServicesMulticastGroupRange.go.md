# `networkServicesMulticastGroupRange` Submodule <a name="`networkServicesMulticastGroupRange` Submodule" id="@cdktn/provider-google.networkServicesMulticastGroupRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastGroupRange <a name="NetworkServicesMulticastGroupRange" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range google_network_services_multicast_group_range}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

networkservicesmulticastgrouprange.NewNetworkServicesMulticastGroupRange(scope Construct, id *string, config NetworkServicesMulticastGroupRangeConfig) NetworkServicesMulticastGroupRange
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig">NetworkServicesMulticastGroupRangeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig">NetworkServicesMulticastGroupRangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetConsumerAcceptList">ResetConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDistributionScope">ResetDistributionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetRequireExplicitAccept">ResetRequireExplicitAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putLogConfig"></a>

```go
func PutLogConfig(value NetworkServicesMulticastGroupRangeLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putTimeouts"></a>

```go
func PutTimeouts(value NetworkServicesMulticastGroupRangeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a>

---

##### `ResetConsumerAcceptList` <a name="ResetConsumerAcceptList" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetConsumerAcceptList"></a>

```go
func ResetConsumerAcceptList()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDistributionScope` <a name="ResetDistributionScope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDistributionScope"></a>

```go
func ResetDistributionScope()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRequireExplicitAccept` <a name="ResetRequireExplicitAccept" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetRequireExplicitAccept"></a>

```go
func ResetRequireExplicitAccept()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastGroupRange resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

networkservicesmulticastgrouprange.NetworkServicesMulticastGroupRange_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

networkservicesmulticastgrouprange.NetworkServicesMulticastGroupRange_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

networkservicesmulticastgrouprange.NetworkServicesMulticastGroupRange_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

networkservicesmulticastgrouprange.NetworkServicesMulticastGroupRange_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkServicesMulticastGroupRange resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkServicesMulticastGroupRange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkServicesMulticastGroupRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastGroupRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference">NetworkServicesMulticastGroupRangeLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.state">State</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList">NetworkServicesMulticastGroupRangeStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference">NetworkServicesMulticastGroupRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptListInput">ConsumerAcceptListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScopeInput">DistributionScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomainInput">MulticastDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeIdInput">MulticastGroupRangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAcceptInput">RequireExplicitAcceptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRangeInput">ReservedInternalRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptList">ConsumerAcceptList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScope">DistributionScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomain">MulticastDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeId">MulticastGroupRangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAccept">RequireExplicitAccept</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRange">ReservedInternalRange</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfig"></a>

```go
func LogConfig() NetworkServicesMulticastGroupRangeLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference">NetworkServicesMulticastGroupRangeLogConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.state"></a>

```go
func State() NetworkServicesMulticastGroupRangeStateList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList">NetworkServicesMulticastGroupRangeStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeouts"></a>

```go
func Timeouts() NetworkServicesMulticastGroupRangeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference">NetworkServicesMulticastGroupRangeTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ConsumerAcceptListInput`<sup>Optional</sup> <a name="ConsumerAcceptListInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptListInput"></a>

```go
func ConsumerAcceptListInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DistributionScopeInput`<sup>Optional</sup> <a name="DistributionScopeInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScopeInput"></a>

```go
func DistributionScopeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfigInput"></a>

```go
func LogConfigInput() NetworkServicesMulticastGroupRangeLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

---

##### `MulticastDomainInput`<sup>Optional</sup> <a name="MulticastDomainInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomainInput"></a>

```go
func MulticastDomainInput() *string
```

- *Type:* *string

---

##### `MulticastGroupRangeIdInput`<sup>Optional</sup> <a name="MulticastGroupRangeIdInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeIdInput"></a>

```go
func MulticastGroupRangeIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RequireExplicitAcceptInput`<sup>Optional</sup> <a name="RequireExplicitAcceptInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAcceptInput"></a>

```go
func RequireExplicitAcceptInput() interface{}
```

- *Type:* interface{}

---

##### `ReservedInternalRangeInput`<sup>Optional</sup> <a name="ReservedInternalRangeInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRangeInput"></a>

```go
func ReservedInternalRangeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConsumerAcceptList`<sup>Required</sup> <a name="ConsumerAcceptList" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptList"></a>

```go
func ConsumerAcceptList() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DistributionScope`<sup>Required</sup> <a name="DistributionScope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScope"></a>

```go
func DistributionScope() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MulticastDomain`<sup>Required</sup> <a name="MulticastDomain" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomain"></a>

```go
func MulticastDomain() *string
```

- *Type:* *string

---

##### `MulticastGroupRangeId`<sup>Required</sup> <a name="MulticastGroupRangeId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeId"></a>

```go
func MulticastGroupRangeId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RequireExplicitAccept`<sup>Required</sup> <a name="RequireExplicitAccept" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAccept"></a>

```go
func RequireExplicitAccept() interface{}
```

- *Type:* interface{}

---

##### `ReservedInternalRange`<sup>Required</sup> <a name="ReservedInternalRange" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRange"></a>

```go
func ReservedInternalRange() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastGroupRangeConfig <a name="NetworkServicesMulticastGroupRangeConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

&networkservicesmulticastgrouprange.NetworkServicesMulticastGroupRangeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MulticastDomain: *string,
	MulticastGroupRangeId: *string,
	ReservedInternalRange: *string,
	ConsumerAcceptList: *[]*string,
	DeletionPolicy: *string,
	Description: *string,
	DistributionScope: *string,
	Id: *string,
	Labels: *map[string]*string,
	LogConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig,
	Project: *string,
	RequireExplicitAccept: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastDomain">MulticastDomain</a></code> | <code>*string</code> | The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastGroupRangeId">MulticastGroupRangeId</a></code> | <code>*string</code> | A unique name for the multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.reservedInternalRange">ReservedInternalRange</a></code> | <code>*string</code> | The resource name of the internal range reserved for this multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.consumerAcceptList">ConsumerAcceptList</a></code> | <code>*[]*string</code> | A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.description">Description</a></code> | <code>*string</code> | An optional text description of the multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.distributionScope">DistributionScope</a></code> | <code>*string</code> | Multicast group range's distribution scope. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#id NetworkServicesMulticastGroupRange#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#project NetworkServicesMulticastGroupRange#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.requireExplicitAccept">RequireExplicitAccept</a></code> | <code>interface{}</code> | Whether an empty consumer_accept_list will deny all consumer projects. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#location NetworkServicesMulticastGroupRange#location}

---

##### `MulticastDomain`<sup>Required</sup> <a name="MulticastDomain" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastDomain"></a>

```go
MulticastDomain *string
```

- *Type:* *string

The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#multicast_domain NetworkServicesMulticastGroupRange#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `MulticastGroupRangeId`<sup>Required</sup> <a name="MulticastGroupRangeId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastGroupRangeId"></a>

```go
MulticastGroupRangeId *string
```

- *Type:* *string

A unique name for the multicast group range.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#multicast_group_range_id NetworkServicesMulticastGroupRange#multicast_group_range_id}

---

##### `ReservedInternalRange`<sup>Required</sup> <a name="ReservedInternalRange" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.reservedInternalRange"></a>

```go
ReservedInternalRange *string
```

- *Type:* *string

The resource name of the internal range reserved for this multicast group range.

The internal range must be a Class D address (224.0.0.0 to 239.255.255.255)
and have a prefix length >= 23.

Use the following format:
'projects/* /locations/global/internalRanges/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#reserved_internal_range NetworkServicesMulticastGroupRange#reserved_internal_range}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `ConsumerAcceptList`<sup>Optional</sup> <a name="ConsumerAcceptList" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.consumerAcceptList"></a>

```go
ConsumerAcceptList *[]*string
```

- *Type:* *[]*string

A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange.

The
project can be specified using its project ID or project number. If left
empty, then all consumer projects are allowed (unless
require_explicit_accept is set to true) once they have VPC networks
associated to the multicast domain. The current max length of the accept
list is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#consumer_accept_list NetworkServicesMulticastGroupRange#consumer_accept_list}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#deletion_policy NetworkServicesMulticastGroupRange#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional text description of the multicast group range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#description NetworkServicesMulticastGroupRange#description}

---

##### `DistributionScope`<sup>Optional</sup> <a name="DistributionScope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.distributionScope"></a>

```go
DistributionScope *string
```

- *Type:* *string

Multicast group range's distribution scope.

Intra-zone or intra-region
cross-zone is supported, with default value being intra-region. Cross
region distribution is not supported.
Possible values:
INTRA_ZONE
INTRA_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#distribution_scope NetworkServicesMulticastGroupRange#distribution_scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#id NetworkServicesMulticastGroupRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#labels NetworkServicesMulticastGroupRange#labels}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.logConfig"></a>

```go
LogConfig NetworkServicesMulticastGroupRangeLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#log_config NetworkServicesMulticastGroupRange#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#project NetworkServicesMulticastGroupRange#project}.

---

##### `RequireExplicitAccept`<sup>Optional</sup> <a name="RequireExplicitAccept" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.requireExplicitAccept"></a>

```go
RequireExplicitAccept interface{}
```

- *Type:* interface{}

Whether an empty consumer_accept_list will deny all consumer projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#require_explicit_accept NetworkServicesMulticastGroupRange#require_explicit_accept}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.timeouts"></a>

```go
Timeouts NetworkServicesMulticastGroupRangeTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#timeouts NetworkServicesMulticastGroupRange#timeouts}

---

### NetworkServicesMulticastGroupRangeLogConfig <a name="NetworkServicesMulticastGroupRangeLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

&networkservicesmulticastgrouprange.NetworkServicesMulticastGroupRangeLogConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to enable logging or not. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#enabled NetworkServicesMulticastGroupRange#enabled}

---

### NetworkServicesMulticastGroupRangeState <a name="NetworkServicesMulticastGroupRangeState" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

&networkservicesmulticastgrouprange.NetworkServicesMulticastGroupRangeState {

}
```


### NetworkServicesMulticastGroupRangeTimeouts <a name="NetworkServicesMulticastGroupRangeTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

&networkservicesmulticastgrouprange.NetworkServicesMulticastGroupRangeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#create NetworkServicesMulticastGroupRange#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#delete NetworkServicesMulticastGroupRange#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#update NetworkServicesMulticastGroupRange#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#create NetworkServicesMulticastGroupRange#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#delete NetworkServicesMulticastGroupRange#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_services_multicast_group_range#update NetworkServicesMulticastGroupRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastGroupRangeLogConfigOutputReference <a name="NetworkServicesMulticastGroupRangeLogConfigOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

networkservicesmulticastgrouprange.NewNetworkServicesMulticastGroupRangeLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesMulticastGroupRangeLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesMulticastGroupRangeLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

---


### NetworkServicesMulticastGroupRangeStateList <a name="NetworkServicesMulticastGroupRangeStateList" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

networkservicesmulticastgrouprange.NewNetworkServicesMulticastGroupRangeStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesMulticastGroupRangeStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.get"></a>

```go
func Get(index *f64) NetworkServicesMulticastGroupRangeStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkServicesMulticastGroupRangeStateOutputReference <a name="NetworkServicesMulticastGroupRangeStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

networkservicesmulticastgrouprange.NewNetworkServicesMulticastGroupRangeStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesMulticastGroupRangeStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState">NetworkServicesMulticastGroupRangeState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesMulticastGroupRangeState
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState">NetworkServicesMulticastGroupRangeState</a>

---


### NetworkServicesMulticastGroupRangeTimeoutsOutputReference <a name="NetworkServicesMulticastGroupRangeTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkservicesmulticastgrouprange"

networkservicesmulticastgrouprange.NewNetworkServicesMulticastGroupRangeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesMulticastGroupRangeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



